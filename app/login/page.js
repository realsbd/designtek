// "use client"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";
import AuthLayout from "../components/Layout/AuthLayout";

import "../styles/style.css";
import PasswordField from "@/components/PasswordField";
import PasswordModal from "@/components/PasswordModal";
import { signIn } from "@/auth";
// import { AuthError } from "next-auth";
// import { useFormState } from 'react-dom'
import { authenticate } from "@/lib/action";

export default function Login() {
  // const [errorMessage, dispatch] = useFormState(authenticate, undefined)
  return (
    <AuthLayout>
      <div className="w-full">
        <div className="login-title text-primary-green text-xl mb-3">
          Log in
        </div>
        <div className="welcome-message text-gray-500 mb-6">
          Welcome! Please enter your details.
        </div>

        <form
          action={async (formData) => {
            "use server"
            // await dispatch(formData)
            await signIn("credentials", formData)
          }}
        >
          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <div className="input-field">
              <input
                type="email"
                id="email"
                name="username"
                aria-label="Enter your email"
                placeholder="Enter your email"
                required
                className="w-full rounded border-2 focus:outline-primary-green border-solid border-gray-300 px-3 py-[8px]"
              />
            </div>
          </div>
          <div className="form-group my-3">
            <label htmlFor="password">Password</label>
            <PasswordField />
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
