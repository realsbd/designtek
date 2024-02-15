"use client"
import { useState } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Sidebar(){

    const [open, setOpen] = useState(true);

    return (
        <>
            <div className={`bg-gray-800 h-full fixed top-0 left-0 z-40 w-64 py-4 px-6 transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}>

                {/* Hamburger menu icon */}
                <button
                    className="text-white hover:text-gray-500 focus:outline-none"
                    onClick={() => setOpen(!open)}
                >
                    <FontAwesomeIcon icon={faTimes} color="white" size="2x"/>
                </button>

                <div className="mt-6">
                    <Link href="/dashboard" className="bg-cyan-600 flex w-full flex-col justify-center content-center pl-3 pr-16 py-2 rounded-md items-start align-center">
                    <span className="items-stretch flex gap-3" role="banner">
                        <FontAwesomeIcon icon={faBars} color='white' />
                        <div className="text-white text-base font-medium leading-6 grow whitespace-nowrap">
                            Dashboard
                        </div>
                    </span>
                    </Link>

                    <Link href="#" className="items-stretch flex content-center my-4 gap-3" role="link">
                        <FontAwesomeIcon icon={faPlus} color='white' />
                        <div className="text-white text-base leading-6 grow whitespace-nowrap">
                            Add New Post
                        </div>
                    </Link>
                    <Link href="#" className="items-stretch flex content-center my-4 gap-3 mt-10" role="link">
                        <FontAwesomeIcon icon={faDollarSign} color='white' />
                        <div className="text-white text-base leading-6">Earnings</div>
                    </Link>
                    <Link href="#" className="items-stretch flex content-center my-4 gap-3 mt-10" role="link">
                        <FontAwesomeIcon icon={faPenToSquare} color='white' />
                        <div className="text-white text-base leading-6">Drafts</div>
                    </Link>
                    <Link href="#" className="items-stretch flex content-center my-4 gap-3 mt-10" role="link">
                        <FontAwesomeIcon icon={faGear} color='white' />
                        <div className="text-white text-base leading-6">Settings</div>
                    </Link>
                    <Link href="#" className="items-stretch flex content-center my-4 gap-3 mt-10" role="link">
                        <FontAwesomeIcon icon={faPhone} color='white' />
                        <div className="text-white text-base leading-6">Support</div>
                    </Link>

                </div>

                <div className="mt-auto">
                    <div className="flex content-center justify-between gap-5 mt-6 pl-2 pr-9 py-6 mt-24 border-t border-zinc-300">
                        <div className="items-stretch flex flex-col" role="group">
                            <div className="text-stone-300 text-base font-medium leading-5 whitespace-nowrap">
                                David Schoger
                            </div>
                            <div className="text-white text-sm leading-5">Contributor</div>
                        </div>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} color='white' />
                    </div>
                </div>

            </div>
            {/* Hamburger menu icon */}
            <button className="block lg:hidden px-2 text-gray-500 hover:text-black focus:outline-none" onClick={() => setOpen(!open)}>
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                </svg>
            </button>
        </>
    )
}