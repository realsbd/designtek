"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import AuthLayout from "../components/Layout/AuthLayout";
import { useState } from "react";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import Loading from "./loading";
import { useRouter } from "next/navigation";

import "../styles/style.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    console.log({
      email: email,
      password: password,
    });

    setTimeout(() => {
      router.push("/dashboard");
      setLoading(false);
    }, 3000);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <AuthLayout>
      <div className="w-full">
        <div className="login-title text-indigo-300 text-xl mb-3">Log in</div>
        <div className="welcome-message text-gray-500 mb-6">
          Welcome! Please enter your details.
        </div>
        <div className="flex flex-col">
          <button className="form-group">
            <div className="flex items-center gap-2 login-with-google border rounded border-gray-300 justify-center py-[5px] my-2">
              <FontAwesomeIcon icon={faGoogle} className="w-6" />
              <div>Log in with Google</div>
            </div>
          </button>
          <button className="form-group">
            <div className="flex items-center gap-2 login-with-apple border rounded border-gray-300 justify-center py-[5px] my-2">
              <FontAwesomeIcon icon={faApple} className="w-6" />
              <div>Log in with Apple</div>
            </div>
          </button>
        </div>

        <div className="divider flex items-center gap-2 my-5 text-center">
          <div className="divider-line bg-gray-300" />
          <div className="divider-text">or</div>
          <div className="divider-line bg-gray-300" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <div className="input-field">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                aria-label="Enter your email"
                placeholder="Enter your email"
                required
                className="w-full rounded border border-solid border-gray-300 px-3 py-[5px]"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group my-3">
            <label htmlFor="password">Password</label>
            <div className="input-field">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                aria-label="Enter your password"
                placeholder="Enter your password"
                required
                className="w-full rounded border border-solid border-gray-300 px-3 py-[5px]"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="forgot-password my-3 text-right">
            <Link href="#" className="text-right hover:text-indigo-300">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="login-button w-full bg-gray-300 rounded py-2 my-3"
          >
            Log in
          </button>
        </form>
        <div className="form-footer">
          <p>
            Don&lsquo;t have an account?{" "}
            <span className="text-indigo-500">
              <Link href="/signup">Sign up for free</Link>
            </span>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
