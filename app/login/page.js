import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faApple} from "@fortawesome/free-brands-svg-icons";
import AuthLayout from "../components/Layout/AuthLayout";
import { redirect } from "next/navigation";
import {login} from "@/lib/auth";

import "../styles/style.css";
import PasswordField from "@/components/PasswordField";
import PasswordModal from "@/components/PasswordModal";
import {ErrorBoundary} from "next/dist/client/components/error-boundary";
import Error from "@/app/login/error";

export default function Login() {

  return (
    <AuthLayout>
      <div className="w-full">
        <div className="login-title text-primary-green text-xl mb-3">
          Log in
        </div>
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
        <ErrorBoundary errorComponent={<Error />}>
          <form
              action={async (formData) => {
                "use server";
                await login(formData)
                redirect("/dashboard")
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
                    className="w-full rounded border border-solid border-gray-300 px-3 py-[5px]"
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
          </form>
        </ErrorBoundary>

        <PasswordModal />

        <div className="divider flex items-center gap-2 my-5 text-center">
          <div className="divider-line bg-gray-300" />
          <div className="divider-text">or</div>
          <div className="divider-line bg-gray-300" />
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
