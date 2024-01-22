import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
// import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'


export default function Dashboard() {
    return (
        <div className="w-full m-0 flex">
            <div className="bg-black max-w-[312px] w-full pt-12 pb-8 px-5 h-full">
                <Link href="dashboard" className="bg-cyan-600 flex w-full flex-col justify-center pl-3 pr-16 py-2 rounded-md items-start align-center">
                    <span className="items-stretch flex gap-3" role="banner">
                        <FontAwesomeIcon icon={faBars} color='white' size='2x' />
                        <div className="text-white text-base font-medium leading-6 grow whitespace-nowrap">
                            Dashboard
                        </div>
                    </span>
                </Link>

                <a href="#" className="items-stretch flex my-4 gap-3" role="link">
                    <FontAwesomeIcon icon={faPlus} color='white' size='2x' />
                    <div className="text-white text-base leading-6 grow whitespace-nowrap">
                        Add New Post
                    </div>
                </a>
                <a href="#" className="items-stretch flex my-4 gap-3 mt-10" role="link">
                    <FontAwesomeIcon icon={faDollarSign} color='white' size='2x' />
                    <div className="text-white text-base leading-6">Earnings</div>
                </a>
                <a href="#" className="items-stretch flex my-4 gap-3 mt-10" role="link">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4914bf6f5b3a5b39bc93c3646d2fe8b8cb35b219b04d283cfb9ec46bee0a2cd8?apiKey=6444ce9d0f924ecb8e73f73084cc2824&"
                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        aria-hidden="true"
                        alt=""
                    />
                    <div className="text-white text-base leading-6">Drafts</div>
                </a>
                <a href="#" className="items-stretch flex my-4 gap-3 mt-10" role="link">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/246136989ae3f207d717b3e74e1c64ddccf4e7d658fffad96b109d18a140ea07?apiKey=6444ce9d0f924ecb8e73f73084cc2824&"
                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        aria-hidden="true"
                        alt=""
                    />
                    <div className="text-white text-base leading-6">Settings</div>
                </a>
                <a href="#" className="items-stretch flex my-4 gap-3 mt-10" role="link">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0d83e1eda9d60883b0302827dc7debb9acf456a6884e820061b98953c27f83b?apiKey=6444ce9d0f924ecb8e73f73084cc2824&"
                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        aria-hidden="true"
                        alt=""
                    />
                    <div className="text-white text-base leading-6">Support</div>
                </a>

                <div className="items-stretch self-stretch flex justify-between gap-5 mt-6 pl-2 pr-9 border border-solid border-zinc-300">
                    <div className="items-stretch flex flex-col" role="group">
                        <div className="text-stone-300 text-base font-medium leading-5 whitespace-nowrap">
                            David Schoger
                        </div>
                        <div className="text-white text-sm leading-5">Contributor</div>
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/934a08f15ea2705cf53c84471f4c77bde2d4c87751a99c4ee92a6a9637ff56c0?apiKey=6444ce9d0f924ecb8e73f73084cc2824&"
                        className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 max-w-full my-auto"
                        aria-hidden="true"
                        alt=""
                    />
                </div>
            </div>
            <div className="w-3/4 mx-auto">
                All Posts
            </div>
        </div>

    )
}