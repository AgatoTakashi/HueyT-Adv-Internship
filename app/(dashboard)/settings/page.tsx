"use client";

import Image from "next/image";
import SectionSubTitle from "@/app/components/SectionSubTitle";
import SectionTitle from "@/app/components/SectionTitle";
import useAuth from "@/app/hooks/useAuth";
import loggedOut from "@/app/assets/login.png";
import AuthModal from "@/app/components/AuthModal";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "@/app/firebase/config";

async function getPlan() {
  const user = auth.currentUser;
  if (!user) return "basic";

  const ref = doc(db, "users", user.uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) return "basic";

  return snap.data().plan || "basic";
}

export default function Settings() {
  const user = useAuth();
  const [authOpen, setAuthOpen] = useState(false);
  const router = useRouter();
  const [plan, setPlan] = useState("basic");

    useEffect(() => {
    if (!user) return;
    getPlan().then(setPlan);
    }, [user]);

   const isPremium = plan.startsWith("premium-plus");

  return (
    <>
      <div className="settings flex flex-col p-[32px] mt-[8px]">
        <h1 className="settings__title w-full text-[32px] pb-[16px] mb-[32px]">
          Settings
        </h1>

        {user && (
          <>
            <div className="plan pb-[16px] mb-[32px]">
              <SectionTitle title="Your subscription plan" />

              <SectionSubTitle
                subTitle={isPremium ? "Premium Member" : "Basic"}
              />

              {/* Hide upgrade button if already premium */}
              {!isPremium && (
                <button
                  className="btn home__cta--btn w-fit"
                  onClick={() => router.push("/choose-plan")}
                >
                  Upgrade to Premium
                </button>
              )}
            </div>

            <div className="email">
              <SectionTitle title="Email" />
              <SectionSubTitle subTitle={user?.email ?? ""} />
            </div>
          </>
        )}

        {!user && (
          <>
            <div className="image__wrapper flex flex-col items-center justify-center">
              <Image src={loggedOut} alt="logged out" width={460} />
              <SectionTitle title="Log in to your account to see your details" />
              <button
                className="btn home__cta--btn"
                onClick={() => setAuthOpen(true)}
              >
                Login
              </button>
            </div>
          </>
        )}
      </div>

      <AuthModal
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        onSuccess={""}
      />
    </>
  );
}
