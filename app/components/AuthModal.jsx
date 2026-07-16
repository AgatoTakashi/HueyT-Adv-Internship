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
            <figure className="google__icon--mask guest__icon--mask">
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
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
