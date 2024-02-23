"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  const pathname = usePathname();

  const links = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: faBars,
    },
    {
      title: "Add New Post",
      href: "/dashboard/add-post",
      icon: faPlus,
    },
    {
      title: "Earnings",
      href: "/dashboard/earnings",
      icon: faDollarSign,
    },
    {
      title: "Drafts",
      href: "/dashboard/drafts",
      icon: faPenToSquare,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: faGear,
    },
    {
      title: "Support",
      href: "/dashboard/support",
      icon: faPhone,
    },
  ];

  return (
    <>
      {open ? (
        <aside
          className={`bg-gray-800 flex flex-col h-full z-40 w-64 py-4 px-6 transition-transform duration-300 `}
        >
          {/* Hamburger menu icon */}
          <button
            className="text-white hover:text-gray-500 focus:outline-none self-start"
            onClick={() => setOpen(!open)}
          >
            <FontAwesomeIcon icon={faTimes} color="white" size="2x" />
          </button>

          <div className="mt-10 flex flex-col gap-5">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`${
                  pathname === link.href && "bg-cyan-600"
                }  flex w-full flex-col justify-center content-center pl-3 pr-16 py-2 rounded-md items-start align-center`}
              >
                <span className="flex items-center gap-3" role="banner">
                  <FontAwesomeIcon icon={link.icon} color="white" />
                  <div className="text-white text-base font-medium leading-6 grow whitespace-nowrap">
                    {link.title}
                  </div>
                </span>
              </Link>
            ))}
          </div>

          <div className=" mt-auto">
            <div className="flex content-center justify-between gap-5 pl-2 pr-9 py-6 border-t border-zinc-300">
              <div className="items-stretch flex flex-col" role="group">
                <div className="text-stone-300 text-base font-medium leading-5 whitespace-nowrap">
                  David Schoger
                </div>
                <div className="text-white text-sm leading-5">Contributor</div>
              </div>
              <FontAwesomeIcon icon={faArrowRightFromBracket} color="white" />
            </div>
          </div>
        </aside>
      ) : (
        <button
          className={`fixed top-8 left-7 md:block px-2 text-gray-500 hover:text-black focus:outline-none`}
          onClick={() => setOpen(!open)}
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      )}
    </>
  );
}
