"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  const navs = [
    {
      name: "Update",
      href: "/",
    },
    {
      name: "About us",
      href: "/about",
    },
    {
      name: "Trade signal",
      href: "/signal",
    },
  ];

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap px-6 lg:px-0 py-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href="/">
            <Image
              src="/img/logo.png"
              alt="logo"
              width={113}
              height={32}
              className="aspect-[3.9] object-contain object-center w-[113px] overflow-hidden shrink-0 max-w-full my-auto"
            />
          </Link>
        </div>

        <button
          className="block lg:hidden px-2 text-gray-500 hover:text-black focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>

        <div
          className={`${
            menuOpen ? "" : "hidden"
          } w-full block flex-grow justify-between mt-4 lg:mt-0 lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm flex gap-5 flex-col lg:flex-row">
            {navs.map((nav, index) => (
              <Link
                key={index}
                href={nav.href}
                className={`${
                  pathname === nav.href && "active_nav"
                } h-full flex items-center lg:py-2 border-b border-solid border-transparent hover:text-primary-green hover:border-b-primary-green duration-300`}
              >
                {nav.name}
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-4 lg:mt-0 items-center gap-5">
            <Link
              href="/login"
              className="flex justify-center items-center text-primary-green text-sm py-2 px-5 rounded-lg max-md:px-5 hover:bg-primary-green hover:text-white transition-all duration-200 border border-solid border-primary-green lg:border-transparent"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="flex justify-center items-center text-sm py-2 px-5 rounded-lg max-md:px-5 bg-black text-white hover:bg-primary-green hover:text-white transition-all duration-200"
            >
              Sign up
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
