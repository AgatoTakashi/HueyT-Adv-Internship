"use client"

import SectionSubTitle from "@/app/components/SectionSubTitle";
import SectionTitle from "@/app/components/SectionTitle";
import useAuth from "@/app/hooks/useAuth";
import loggedOut from "@/app/assets/login.png"
import Image from "next/image";
import { useState } from "react";
import AuthModal from "@/app/components/AuthModal";


export default function settings () {
    const user = useAuth();
    const [authOpen, setAuthOpen] = useState(false);
    const handleLoginSuccess = () => {
    };
    return (
        <>
            <div className="settings flex flex-col p-[32px] mt-[8px]">
                <h1 className="settings__title w-full text-[32px] pb-[16px] mb-[32px]">Settings</h1>
                {user && (
                    <>
                        <div className="plan pb-[16px] mb-[32px]">
                    <SectionTitle title="Your subscription plan" />
                    <SectionSubTitle subTitle="premium" />
                </div>
                <div className="email">
                    <SectionTitle title="Email" />
                    <SectionSubTitle subTitle="hanna@gmail.com" />
                </div>
                    </>
                )}
                {!user && (
                    <>  
                    <div className="image__wrapper flex flex-col items-center justify-center">
                        <Image src={loggedOut} alt="logged out" width={460} />
                        <SectionTitle title={"Log in to your account to see your details"} />
                        <button className="btn home__cta--btn" onClick={() => setAuthOpen(true)} >Login</button>
                    </div>
                    </>
                )}
            </div>
            <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} onSuccess={handleLoginSuccess} />
        </>
    )
}