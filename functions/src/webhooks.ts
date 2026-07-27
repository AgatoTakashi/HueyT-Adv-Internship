import { onRequest } from "firebase-functions/v2/https";
import admin from "firebase-admin";
import Stripe from "stripe";

admin.initializeApp();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export const stripeWebhook = onRequest(
  { secrets: ["STRIPE_SECRET_KEY"], cors: true },
  async (req, res) => {
    const sig = req.headers["stripe-signature"] as string;

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.rawBody,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET as string
      );
    } catch (err: any) {
      console.error("Webhook signature verification failed:", err.message);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    switch (event.type) {
      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.resumed":
      case "customer.subscription.trial_will_end":
      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;

        const uid = (subscription.metadata as any)?.uid;

        if (!uid) {
          console.error("No UID found in subscription metadata");
          break;
        }

        const userRef = admin.firestore().collection("users").doc(uid);

        let status = "basic";

        if (subscription.status === "active") {
        // Yearly plan
        if (subscription.items.data[0].price.recurring?.interval === "year") {
            status = "premium-plus-yearly";
        }

        // Monthly plan
        if (subscription.items.data[0].price.recurring?.interval === "month") {
            status = "premium-plus-monthly";
        }
        }

        if (subscription.status === "trialing") {
        status = "premium-plus-yearly"; // your trial is yearly
        }

        if (subscription.status === "canceled") {
        status = "basic";
        }

        await userRef.set(
          {
            subscriptionStatus: status,
            stripeSubscriptionId: subscription.id,
            stripeCustomerId: subscription.customer,
            currentPeriodEnd: (subscription as any).current_period_end ?? null,
          },
          { merge: true }
        );

        break;
      }
    }

    res.json({ received: true });
  }
);
