import React from "react";

export default function Navbar() {
  return (
    <header className="justify-between items-stretch flex gap-5 max-md:flex-wrap">
      <div className="items-center flex justify-between gap-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ad2cba5e5fc269634e6f0b0bb457c33959bce29db56707649d4659c6728cb44b?apiKey=6444ce9d0f924ecb8e73f73084cc2824&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad2cba5e5fc269634e6f0b0bb457c33959bce29db56707649d4659c6728cb44b?apiKey=6444ce9d0f924ecb8e73f73084cc2824&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad2cba5e5fc269634e6f0b0bb457c33959bce29db56707649d4659c6728cb44b?apiKey=6444ce9d0f924ecb8e73f73084cc2824&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad2cba5e5fc269634e6f0b0bb457c33959bce29db56707649d4659c6728cb44b?apiKey=6444ce9d0f924ecb8e73f73084cc2824&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad2cba5e5fc269634e6f0b0bb457c33959bce29db56707649d4659c6728cb44b?apiKey=6444ce9d0f924ecb8e73f73084cc2824&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad2cba5e5fc269634e6f0b0bb457c33959bce29db56707649d4659c6728cb44b?apiKey=6444ce9d0f924ecb8e73f73084cc2824&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad2cba5e5fc269634e6f0b0bb457c33959bce29db56707649d4659c6728cb44b?apiKey=6444ce9d0f924ecb8e73f73084cc2824&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad2cba5e5fc269634e6f0b0bb457c33959bce29db56707649d4659c6728cb44b?apiKey=6444ce9d0f924ecb8e73f73084cc2824&" className="aspect-[3.9] object-contain object-center w-[113px] overflow-hidden shrink-0 max-w-full my-auto"
        />
        <div className="self-stretch flex gap-3.5 px-5 items-start">
          <div
            className="text-cyan-600 text-sm leading-10 tracking-tight whitespace-nowrap items-stretch self-stretch aspect-[1.0909090909090908] justify-center"
            aria-label="Update"
            role="button"
          >
            Update
          </div>
          <a
            href="..."
            className="text-zinc-800 text-sm leading-10 tracking-tight"
            role="link"
          >
            About us
          </a>
          <a
            href="..."
            className="text-zinc-800 text-sm leading-10 tracking-tight self-stretch grow whitespace-nowrap"
            role="link"
          >
            Forex signals
          </a>
        </div>
      </div>
      <div className="items-stretch flex justify-between gap-5">
        <button
          type="submit"
          className="text-white text-sm leading-10 tracking-tight whitespace-nowrap justify-center items-stretch bg-zinc-900 grow px-9 rounded-lg max-md:px-5"
        >
          Log in
        </button>
        <button
          type="submit"
          className="text-cyan-600 text-sm leading-10 tracking-tight whitespace-nowrap justify-center items-stretch border grow px-8 rounded-lg border-solid border-cyan-600 max-md:px-5"
        >
          Sign up
        </button>
      </div>
    </header>
  );
}