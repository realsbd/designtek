import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faApple} from "@fortawesome/free-brands-svg-icons";
import AuthLayout from "../components/Layout/AuthLayout";

import "../styles/style.css";
import {register} from "@/lib/auth";
import PasswordField from "@/components/PasswordField";

export default function Signup() {


  return (
    <AuthLayout>
      <div className="">
        <div className="login-title text-primary-green text-xl mb-3">
          Sign up
        </div>
        <div className="welcome-message text-gray-500 mb-6">
          Welcome! Please enter your details.
        </div>

        <form
            action={async (formData) => {
              "use server";
              await register(formData)
              // redirect("/dashboard")
            }}
        >
          <div className="form-group mb-3">
            <label htmlFor="username" className="text-sm">
              Username
            </label>
            <div className="input-field">
              <input
                type="text"
                id="username"
                name="username"
                aria-label="Enter your username"
                placeholder="Enter your username"
                required
                className="w-full rounded border text-sm border-solid outline-none border-gray-300 px-3 py-[5px]"
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
                aria-label="Enter your email"
                placeholder="Enter your email"
                required
                className="w-full rounded text-sm  border border-solid outline-none border-gray-300 px-3 py-[5px]"
              />
            </div>
          </div>
          <div className="form-group my-3">
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <PasswordField />
          </div>
          <div className=" my-3 flex items-center gap-2">
            <input type="checkbox" className="" />
            <p className="text-sm">
              By signing up, you Agree to our{" "}
              <Link href="/terms-condition" className="text-primary-green">
                Terms
              </Link>{" "}
              &{" "}
              <Link href="/terms-condition" className="text-primary-green">
                Conditions
              </Link>
            </p>
          </div>
          <button
            type="submit"
            className="login-button w-full bg-gray-300 rounded py-2 my-3 border border-solid border-transparent hover:bg-primary-green hover:text-white duration-300"
          >
            Sign up
          </button>
        </form>

        <div className="divider flex items-center gap-2 my-3 text-center">
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
            Already have an account?{" "}
            <span className="text-primary-green">
              <Link href="/login">Log in</Link>
            </span>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
