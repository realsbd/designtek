"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import FormFields from "@/app/components/admin/FormFields";

const LoginPage = () => {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push("/admin");
  };

  return (
    <div className="screen_height w-full flex items-center justify-center">
      <div className="w-96 max-sm:px-5">
        <h1 className="text-3xl text-primary-green">Log In</h1>
        <p className="text-gray-shade-30 py-4">Welcome back to blog</p>

        <form className="w-full" onSubmit={handleSubmit}>
          <FormFields />

          <div className="flex justify-end">
            <Link
              href=""
              className="text-sm font-medium text-primary-green py-7"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="login-button w-full bg-gray-300 rounded py-2 my-3 border border-solid border-transparent hover:bg-primary-green hover:text-white duration-300"
          >
            Log In
          </button>

          <div className="flex gap-1 justify-center">
            <p>Don&lsquo;t have an account?</p>
            <Link href="admin/register" className="text-primary-green">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
