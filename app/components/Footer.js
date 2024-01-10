import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
    <div className="flex max-w-[501px] flex-col">
        <header className="text-zinc-800 text-xl font-semibold leading-6 tracking-tight self-center whitespace-nowrap">
            Never Miss A Post!
        </header>
        <div className="text-zinc-900 text-sm leading-6 tracking-tight self-center whitespace-nowrap mt-4">
            Sign up for free and be the first to get notified about updates.
        </div>
        <form className="items-center rounded flex w-full justify-between gap-5 mt-4 pl-3.5 border-[0.5px] border-solid border-cyan-600 max-md:max-w-full max-md:flex-wrap">
            <label
                htmlFor="email"
                className="text-zinc-500 text-sm leading-6 tracking-tight flex-1 my-auto"
            >
                Enter email address
            </label>
            <input
                type="email"
                id="email"
                className="text-white text-sm leading-10 tracking-tight whitespace-nowrap justify-center items-stretch rounded bg-zinc-900 self-stretch px-6 max-md:px-5"
                aria-label="Email Address"
            />
            <button
                type="submit"
                className="text-white text-sm leading-10 tracking-tight whitespace-nowrap justify-center items-stretch rounded bg-zinc-900 self-stretch px-6 max-md:px-5"
                aria-label="Subscribe"
            >
                Subscribe
            </button>
        </form>
    </div>
}