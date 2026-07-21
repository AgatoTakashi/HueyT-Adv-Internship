"use client";

import { useState } from "react";
import { auth, googleProvider } from "../firebase/config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";
import Image from "next/image";
import googleIcon from '../assets/google.png'
import { FaX } from "react-icons/fa6";

export default function AuthModal({ isOpen, onClose }) {
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  // EMAIL LOGIN / SIGNUP
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }

      onClose();
      router.push("/for-you");
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  // GOOGLE LOGIN
  const handleGoogle = async () => {
    setErrorMsg("");

    try {
      await signInWithPopup(auth, googleProvider);
      onClose();
      router.push("/for-you");
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  // GUEST LOGIN (anonymous)
  const handleGuest = async () => {
    setErrorMsg("");

    try {
      await signInWithEmailAndPassword(auth, "guest@gmail.com", "guest123");
      onClose();
      router.push("/for-you");
    } catch (error) {
      setErrorMsg("Guest login is not configured.");
    }
  };

  return (
    <div className="auth__wrapper">
      <div className="auth">
        <div className="auth__content">

          {/* TITLE */}
          <div className="auth__title">
            {isLogin ? "Log in to Summarist" : "Create your Summarist account"}
          </div>

          {/* GUEST LOGIN */}
          <button className="btn guest__btn--wrapper" onClick={handleGuest}>
            <figure className="guest__icon--mask">
              <FaUser />
            </figure>
            <div>Login as a Guest</div>
          </button>

          {/* SEPARATOR */}
          <div className="auth__separator">
            <span className="auth__separator--text">or</span>
          </div>

          {/* GOOGLE LOGIN */}
          <button className="btn google__btn--wrapper" onClick={handleGoogle}>
            <figure className="google__icon--mask">
              <Image
                src={googleIcon}
                alt="google"
                width="22"
                height="22"
              />
            </figure>
            <div>Login with Google</div>
          </button>

          {/* SEPARATOR */}
          <div className="auth__separator">
            <span className="auth__separator--text">or</span>
          </div>

          {/* EMAIL FORM */}
          <form className="auth__main--form" onSubmit={handleSubmit}>
            <input
              className="auth__main--input"
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="auth__main--input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="btn">
              <span>{isLogin ? "Login" : "Sign Up"}</span>
            </button>
          </form>

          {/* ERROR MESSAGE */}
          {errorMsg && (
            <div style={{ color: "red", fontSize: "14px", marginTop: "8px" }}>
              {errorMsg}
            </div>
          )}
        </div>

        {/* FORGOT PASSWORD */}
        <div className="auth__forgot--password">Forgot your password?</div>

        {/* SWITCH LOGIN/SIGNUP */}
        <button
          className="auth__switch--btn"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Don't have an account?" : "Already have an account?"}
        </button>

        {/* CLOSE BUTTON */}
        <div className="auth__close--btn" onClick={onClose}>
          <FaX />
        </div>
      </div>
    </div>
  );
}
