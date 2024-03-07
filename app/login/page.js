"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faBullseye, faApple} from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash  } from "@fortawesome/free-solid-svg-icons";
import AuthLayout from "../components/Layout/AuthLayout";
import { useState } from "react";
import Loading from "./loading";
import { useRouter } from "next/navigation";

import "../styles/style.css";
import ForgotPassword from "../components/ForgotPassword";
import CodeSent from "../components/CodeSent";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [codeSent, setCodeSent] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

  const toggleVisible = () => {
    setIsVisible(!isVisible)
  }

  if (loading) {
    return <Loading />;
  }

  if (forgotPassword) {
    return (
      <ForgotPassword
        setForgotPassword={setForgotPassword}
        setCodeSent={setCodeSent}
      />
    );
  }

  if (codeSent) {
    return <CodeSent />;
  }

  return (
    <AuthLayout>
      <div className="w-full">
        <div className="login-title text-primary-green text-xl mb-3">
          Log in
        </div>
        <div className="welcome-message text-gray-500 mb-6">
          Welcome! Please enter your details.
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
                className="w-full rounded border border-solid border-gray-300 px-3 py-[5px] outline-none"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group my-3">
            <label htmlFor="password">Password</label>
            <div className="flex gap-1 items-center input-field w-full rounded border border-solid border-gray-300 px-3 py-[5px]">
              <input
                type={isVisible ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                aria-label="Enter your password"
                placeholder="Enter your password"
                required
                className="w-full outline-none"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span onClick={toggleVisible} className="pointer">
                {isVisible ? (<FontAwesomeIcon icon={faEye} />) : (<FontAwesomeIcon icon={faEyeSlash} />)}
              
              </span>
            </div>
          </div>
          <div className="forgot-password my-3 text-right">
            <button
              onClick={() => setForgotPassword(true)}
              className="text-right border-0 hover:text-primary-green"
            >
              Forgot password?
            </button>
          </div>
          <button
            type="submit"
            className="login-button w-full bg-gray-300 hover:bg-primary-green hover:text-white rounded py-2 my-3"
          >
            Log in
          </button>
        </form>

        <div className="divider flex items-center gap-2 my-5 text-center">
          <div className="divider-line bg-gray-300" />
          <div className="divider-text">or</div>
          <div className="divider-line bg-gray-300" />
        </div>

        <div className="flex flex-col">
          <button className="form-group hover:bg-primary-green hover:text-white border rounded duration-300 border-gray-300 py-[5px] my-2">
            <div className="flex items-center gap-2 login-with-google justify-center">
              <FontAwesomeIcon icon={faGoogle} className="w-6" />
              <div>Log in with Google</div>
            </div>
          </button>
          <button className="form-group hover:bg-primary-green hover:text-white border rounded duration-300 border-gray-300 py-[5px] my-2">
            <div className="flex items-center gap-2 login-with-apple justify-center">
              <FontAwesomeIcon icon={faApple} className="w-6" />
              <div>Log in with Apple</div>
            </div>
          </button>
        </div>

        <div className="form-footer">
          <p>
            Don&lsquo;t have an account?{" "}
            <span className="text-primary-green">
              <Link href="/signup">Sign up for free</Link>
            </span>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
