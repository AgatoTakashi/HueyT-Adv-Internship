"use client"

import NavBar from "./components/NavBar";
import { useState } from "react";
import Landing from './components/Landing'
import Features from './components/Features'
import AuthModal from "./components/AuthModal";
import Reviews from './components/Reviews'
import Numbers from './components/Numbers'
import Footer from './components/Footer'

export default function Home() {

  return (
    <>
    <NavBar />
    <Landing />
    <Features />
    <Reviews />
    <Numbers />
    <Footer />
    </>
  );
}
