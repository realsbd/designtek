"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import AuthLayout from "../components/Layout/AuthLayout";
import Loading from "./loading";

import "../styles/style.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
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
      router.push("/login");
      setLoading(false);
    }, 3000);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <AuthLayout>
      <div className="">
        <div className="login-title text-indigo-300 text-xl mb-3">Sign up</div>
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
        <div className="divider flex items-center gap-2 my-3 text-center">
          <div className="divider-line bg-gray-300" />
          <div className="divider-text">or</div>
          <div className="divider-line bg-gray-300" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="username" className="text-sm">
              Username
            </label>
            <div className="input-field">
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                aria-label="Enter your username"
                placeholder="Enter your username"
                required
                className="w-full rounded border text-sm border-solid border-gray-300 px-3 py-[5px]"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <div className="input-field">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                aria-label="Enter your email"
                placeholder="Enter your email"
                required
                className="w-full rounded text-sm  border border-solid border-gray-300 px-3 py-[5px]"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group my-3">
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <div className="input-field">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                aria-label="Enter your password"
                placeholder="Enter your password"
                required
                className="w-full rounded text-sm  border border-solid border-gray-300 px-3 py-[5px]"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className=" my-3 flex items-center gap-2">
            <input type="checkbox" className="align self-start" />
            <p className="text-sm">
              By signing up, you{" "}
              <Link href="#" className="text-indigo-500">
                Agree
              </Link>{" "}
              to our{" "}
              <Link href="#" className="text-indigo-500">
                Terms
              </Link>{" "}
              &{" "}
              <Link href="#" className="text-indigo-500">
                Conditions
              </Link>
            </p>
          </div>
          <button
            type="submit"
            className="login-button w-full bg-gray-300 rounded py-2 my-3 border border-solid border-transparent hover:bg-white hover:border-gray-300 transition-all "
          >
            Sign up
          </button>
        </form>
        <div className="form-footer">
          <p>
            Already have an account?{" "}
            <span className="text-indigo-500">
              <Link href="/login">Log in</Link>
            </span>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
