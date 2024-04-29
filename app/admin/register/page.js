import Link from "next/link";

import FormFields from "@/app/components/admin/FormFields";

const RegisterPage = () => {
  return (
    <div className="screen_height w-full flex items-center justify-center">
      <div className="w-96 max-sm:px-5">
        <h1 className="text-3xl text-primary-green">Register</h1>
        <p className="text-gray-shade-30 py-4">
          Hi, please create your account
        </p>

        <form className="w-full">
          <FormFields />

          <div className="flex gap-2">
            <input type="checkbox" />
            <p className="text-sm font-medium text-gray-shade-45 py-7">
              By signing up, you agree to our{" "}
              <Link href="" className="text-primary-green">
                Terms
              </Link>{" "}
              &{" "}
              <Link href="" className="text-primary-green">
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

          <div className="flex gap-1 justify-center">
            <p>Already have an account?</p>
            <Link href="/admin/login" className="text-primary-green">
              Log In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
