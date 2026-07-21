"use client" //fix me

import Image from "next/image"
import logo from '../assets/logo.png'
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai"
import Link from "next/link"
import AuthModal from "./AuthModal";
import { useState } from "react";
import useAuth from '../hooks/useAuth'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/config'
import { BsBookmark, BsPen } from "react-icons/bs"
import { FiSettings } from "react-icons/fi"
import { LuCircleHelp } from "react-icons/lu"
import { MdLogout } from "react-icons/md"

export default function sideBar () {
    const [authOpen, setAuthOpen] = useState(false);
    const user = useAuth();
    
    const logout = async () => {
        await signOut(auth);
    };
    
    return (
        <div className="sidebar w-[200px] flex-shrink-0">
            <div className="sidebar__wrapper flex flex-col justify-between h-screen fixed">
                <div className="sidebar__top">
                    <div className="logo__wrapper">
                        <Image src={logo} width={160} height={40} alt="logo" />
                    </div>
                </div>
                <div className="sidebar__middle flex flex-col flex-1">
                    <Link className="sidebar__middle--link flex items-center" href="/for-you" ><AiOutlineHome />For you</Link>
                    <Link className="sidebar__middle--link flex items-center" href="/library"><BsBookmark />My Library</Link>
                    <div className="sidebar__middle--link flex items-center cursor-not-allowed"><BsPen />Highlights</div>
                    <div className="sidebar__middle--link flex items-center cursor-not-allowed"><AiOutlineSearch />Search</div>
                </div>
                <div className="sidebar__bottom">
                    <Link className="sidebar__bottom-link flex items-center" href="/settings"><FiSettings /> Settings</Link>
                    <div className="sidebar__bottom-link flex items-center cursor-not-allowed"><LuCircleHelp /> Help & Support</div>
                    {!user && (
                        <li
                            className="nav__list nav__list--login flex items-center"
                            onClick={() => setAuthOpen(true)}
                        >
                            <MdLogout />
                            Login
                        </li>
                    )}

                    {user && (
                        <li
                            className="nav__list nav__list--login flex items-center"
                            onClick={logout}
                        >
                            <MdLogout />
                            Logout
                        </li>
                    )}
                </div>
            </div>
            <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
        </div>
        
    )
}