import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'


export default function DashboardLayout({children}) {
    return (
        <div className="w-full m-0 flex">
            <div className="bg-black max-w-[312px] w-full pt-12 pb-8 px-5 h-screen">
                <Link href="dashboard" className="bg-cyan-600 flex w-full flex-col justify-center content-center pl-3 pr-16 py-2 rounded-md items-start align-center">
                    <span className="items-stretch flex gap-3" role="banner">
                        <FontAwesomeIcon icon={faBars} color='white' />
                        <div className="text-white text-base font-medium leading-6 grow whitespace-nowrap">
                            Dashboard
                        </div>
                    </span>
                </Link>

                <a href="#" className="items-stretch flex content-center my-4 gap-3" role="link">
                    <FontAwesomeIcon icon={faPlus} color='white' />
                    <div className="text-white text-base leading-6 grow whitespace-nowrap">
                        Add New Post
                    </div>
                </a>
                <a href="#" className="items-stretch flex content-center my-4 gap-3 mt-10" role="link">
                    <FontAwesomeIcon icon={faDollarSign} color='white' />
                    <div className="text-white text-base leading-6">Earnings</div>
                </a>
                <a href="#" className="items-stretch flex content-center my-4 gap-3 mt-10" role="link">
                    <FontAwesomeIcon icon={faPenToSquare} color='white' />
                    <div className="text-white text-base leading-6">Drafts</div>
                </a>
                <a href="#" className="items-stretch flex content-center my-4 gap-3 mt-10" role="link">
                    <FontAwesomeIcon icon={faGear} color='white' />
                    <div className="text-white text-base leading-6">Settings</div>
                </a>
                <a href="#" className="items-stretch flex content-center my-4 gap-3 mt-10" role="link">
                    <FontAwesomeIcon icon={faPhone} color='white' />    
                    <div className="text-white text-base leading-6">Support</div>
                </a>

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
            <div className="w-3/4 mx-auto">
                {children}
            </div>
        </div>

    )
}