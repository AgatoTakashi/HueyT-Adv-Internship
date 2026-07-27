"use client";

import { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged, User } from "firebase/auth";

export default function useAuth(): User | null {
  const [user, setUser] = useState<User | null >(null);

  useEffect(() => {
    return onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);

    });
    }, []);

  return user;
}
