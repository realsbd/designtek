"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap p-6">

        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href="/">
            <Image src="/img/logo.png" alt="logo" width={113} height={32} className="aspect-[3.9] object-contain object-center w-[113px] overflow-hidden shrink-0 max-w-full my-auto" />
          </Link>
        </div>

        <button className="block lg:hidden px-2 text-gray-500 hover:text-black focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>

        <div className={`${menuOpen ? '' : 'hidden'} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
          <div className="text-sm lg:flex-grow">
            <a href="/update" className="block mt-4 lg:inline-block lg:mt-0 hover:font-bold mr-4">
              Update
            </a>
            <a href="/about" className="block mt-4 lg:inline-block lg:mt-0 hover:font-bold mr-4">
              About us
            </a>
            <a href="/signal" className="block mt-4 lg:inline-block lg:mt-0 hover:font-bold">
              Trade Signal
            </a>
          </div>
          <div className="items-stretch mt-4 flex flex-1 justify-center content-center gap-5">
            <Link
                href="/login"
                className="text-white text-center text-lg leading-10 tracking-tight whitespace-nowrap justify-center items-stretch bg-zinc-900 grow px-9 rounded-lg max-md:px-5"
            >
              Log in
            </Link>
            <Link
                href="/signup"
                className="text-cyan-600 text-sm leading-10 tracking-tight whitespace-nowrap justify-center items-stretch border grow px-8 rounded-lg border-solid border-cyan-600 max-md:px-5"
            >
              Sign up
            </Link>
          </div>
        </div>

      </nav>
    </>
  );
}