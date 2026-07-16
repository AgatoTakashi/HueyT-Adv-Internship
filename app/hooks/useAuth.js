"use client";

import { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    return onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);

        if (currentUser) {
        router.push("/for-you");
        }
    });
    }, []);

  return user;
}
