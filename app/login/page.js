"use client"
import Link from "next/link";
import {redirect, useRouter} from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import AuthLayout from "../components/Layout/AuthLayout";

import "../styles/style.css";
import PasswordField from "@/components/PasswordField";
import PasswordModal from "@/components/PasswordModal";
import { useState, useRef } from "react";
import {useUser} from "@/app/hooks/useUser";
import {getUser} from "@/lib/auth";

export default function Login() {

  const router = useRouter()

  const [message, setMessage] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const togglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const { user, updateUser, login } = useUser();

  // redirect to dashboard if user is loggedin
  if (user.accessToken !== '') {
    console.log(user.accessToken);
    redirect('/dashboard');
    return null;
  }

  const handleLogin = async (email, password) => {
    try {
      const response = await login(email, password);
      console.log('login response:', response);
      if (response && response.success) {
        updateUser(response)
        // Redirect to the dashboard
        router.push('/dashboard');
      } else {
        // Handle login error
        console.error('Login error:', response || 'Login failed');
        setMessage(response.msg)
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setMessage(error)
    }
  };

  return (
    <AuthLayout>
      <div className="w-full">
        <div className="login-title text-primary-green text-xl mb-3">
          Log in
        </div>
        <div className="welcome-message text-gray-500 mb-6">
          Welcome! Please enter your details.
        </div>

        {message ? (
            <div className={'text-red-600 font-bold'}>{message}</div>
        ) : ''}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const username = usernameRef.current.value;
            const password = passwordRef.current.value;

            username && password && handleLogin(username, password);
          }}
        >
          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <div className="input-field">
              <input
                type="email"
                id="email"
                name="username"
                ref={usernameRef}
                aria-label="Enter your email"
                placeholder="Enter your email"
                required
                className="w-full rounded border-2 focus:outline-primary-green border-solid border-gray-300 px-3 py-[8px]"
              />
            </div>
          </div>
          <div className="form-group my-3">
            <label htmlFor="password">Password</label>
            <div
              className={`flex gap-1 items-center input-field w-full rounded border-2 border-solid ${isFocused ? "border-primary-green" : "border-gray-300"
                }`}
            >
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                ref={passwordRef}
                aria-label="Enter your password"
                placeholder="Enter your password"
                required
                className="w-full rounded px-3 py-[5px] outline-none"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              <span
                onClick={togglePassword}
                className={`pointer p-2 ${isFocused ? "text-primary-green" : "text-gray-400"
                  }`}
              >
                {showPassword ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </span>
            </div>
            {/* <PasswordField ref={passwordRef} /> */}
          </div>
          <button
            type="submit"
            className="login-button w-full bg-gray-300 hover:bg-primary-green hover:text-white rounded py-2 my-3"
          >
            Log in
          </button>
          {/* {errorMessage && (
            <>
              <p className={'text-red-600'}>{errorMessage}</p>
            </>
          )} */}
        </form>

        <PasswordModal />

        <div className="divider flex items-center gap-2 my-5 text-center">
          <div className="divider-line bg-gray-300" />
          <div className="divider-text">or</div>
          <div className="divider-line bg-gray-300" />
        </div>

        <div className="flex flex-col">
          <button className="form-group">
            <div className="hover:bg-primary-green hover:text-white hover:border-primary-green duration-300 flex items-center gap-2 login-with-google border rounded border-gray-300 justify-center py-[5px] my-2">
              <FontAwesomeIcon icon={faGoogle} className="w-6" />
              <div>Log in with Google</div>
            </div>
          </button>
          <button className="form-group">
            <div className="hover:bg-primary-green hover:text-white hover:border-primary-green duration-300 flex items-center gap-2 login-with-apple border rounded border-gray-300 justify-center py-[5px] my-2">
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
