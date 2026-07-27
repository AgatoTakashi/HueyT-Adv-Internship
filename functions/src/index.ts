import { onCall, CallableRequest } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import admin from "firebase-admin";
import Stripe from "stripe";

admin.initializeApp();

const STRIPE_SECRET = defineSecret("stripe_secret");

export const createCheckoutSession = onCall(
  { secrets: [STRIPE_SECRET] },
  async (request: CallableRequest) => {
    const auth = request.auth;
    if (!auth) throw new Error("User must be logged in");

    const priceId = request.data.priceId;
    if (!priceId) throw new Error("Missing priceId");

    const stripe = new Stripe(STRIPE_SECRET.value());

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      customer_email: auth.token.email,
      metadata: {
            uid: auth.uid,
        },
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: "http://localhost:3000/settings",
      cancel_url: "http://localhost:3000/choose-plan",
    });

    return { url: session.url };
  }
);
