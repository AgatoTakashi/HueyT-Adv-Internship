"use client"

import navLogo from '../assets/logo.png'
import Image from 'next/image'
import { useState } from 'react'
import AuthModal from "./AuthModal"
import { auth } from '../firebase/config'
import { signOut } from 'firebase/auth'
import useAuth from '../hooks/useAuth'

export default function NavBar () {
    const [authOpen, setAuthOpen] = useState(false);
    const user = useAuth();

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <>
            <nav className="nav">
                <div className="nav__wrapper">
                    <figure className="nav__img--mask">
                        <Image src={navLogo} alt="logo" className='nav__img' />
                    </figure>
                    <ul className="nav__list--wrapper">
                    {!user && (
                        <li
                            className="nav__list nav__list--login"
                            onClick={() => setAuthOpen(true)}
                        >
                            Login
                        </li>
                    )}

                    {user && (
                        <li
                            className="nav__list nav__list--login"
                            onClick={logout}
                        >
                            Logout
                        </li>
                    )}
                    <li className="nav__list nav__list--mobile">About</li>
                    <li className="nav__list nav__list--mobile">Contact</li>
                    <li className="nav__list nav__list--mobile">Help</li>
                    </ul>
                </div>
            </nav>

            <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
        </>
    )
}