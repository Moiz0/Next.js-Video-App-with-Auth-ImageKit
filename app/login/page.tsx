"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

function LoginPage() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      Email,
      Password,
      redirect: false,
    });
    if (result?.error) {
      console.log(result.error);
    }
    router.push("/");
  };
  return (
    <div>
      <h1>LogIn</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="enter email"
          type="email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="enter password"
          type="password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">LogIn</button>
      </form>
      <div>
        Don't have an account?
        <button type="submit" onClick={() => router.push("/register")}>
          Register
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
