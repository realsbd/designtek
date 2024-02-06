import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="justify-between items-stretch flex gap-5 max-md:flex-wrap">
      <div className="items-center flex justify-between gap-5">
        <Link href="/">
          <Image src="/img/logo.png" alt="logo" width={113} height={32} className="aspect-[3.9] object-contain object-center w-[113px] overflow-hidden shrink-0 max-w-full my-auto" />
        </Link>
        <div className="self-stretch flex gap-3.5 px-5 items-start">
          <Link href="/"
            className="active:text-cyan-600 text-sm leading-10 tracking-tight whitespace-nowrap items-stretch self-stretch aspect-[1.0909090909090908] justify-center"
          >
            Update
          </Link>
          <Link
            href="about"
            className="active:text-cyan-600 text-zinc-800 text-sm leading-10 tracking-tight"
            role="link"
          >
            About us
          </Link>
          <Link
            href="signal"
            className="active:text-cyan-600 text-zinc-800 text-sm leading-10 tracking-tight self-stretch grow whitespace-nowrap"
            role="link"
          >
            Forex signals
          </Link>
        </div>
      </div>
      <div className="items-stretch flex justify-between gap-5">
        <Link
          href="/login"
          className="text-white text-sm leading-10 tracking-tight whitespace-nowrap justify-center items-stretch bg-zinc-900 grow px-9 rounded-lg max-md:px-5"
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
    </header>
  );
}