"use client"  //fix me

import Image from "next/image";
import landing from '../assets/landing.png'
import AuthModal from "./AuthModal";
import { useState } from "react";

export default function landingPage () {
    const [authOpen, setAuthOpen] = useState(false);

    return (
        <section id="landing">
            <div className="container">
                <div className="row">
                <div className="landing__wrapper">
                    <div className="landing__content">
                    <div className="landing__content__title">
                        Gain more knowledge <br className="remove--tablet" />
                        in less time
                    </div>
                    <div className="landing__content__subtitle">
                        Great summaries for busy people,
                        <br className="remove--tablet" />
                        individuals who barely have time to read,
                        <br className="remove--tablet" />
                        and even people who don’t like to read.
                    </div>
                    <button className="btn home__cta--btn" onClick={() => setAuthOpen(true)} >Login</button>
                    </div>
                    <figure className="landing__image--mask">
                        <Image src={landing} alt="landing" />
                    </figure>
                </div>
                </div>
            </div>
            <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
            </section>
    )
}