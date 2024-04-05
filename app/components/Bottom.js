import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Bottom({ signUp }) {
  const footerLinks = [
    {
      link: "/terms-condition",
      text: "Terms & Conditions",
    },
    {
      link: "/privacy-policy",
      text: "Privacy policy",
    },
    {
      link: "/disclaimer",
      text: "Disclaimer",
    },
  ];

  return (
    <div className="p-6 w-full mt-24 md:mt-38">
      {signUp && (
        <div className="flex max-w-[501px] flex-col mx-auto">
          <header className="text-zinc-800 text-xl font-semibold leading-6 self-center whitespace-nowrap">
            Never Miss A Post!
          </header>
          <div className="text-zinc-900 text-sm text-center leading-6 self-center mt-4">
            Sign up for free and be the first to get notified about updates.
          </div>
          <form className="items-center rounded flex w-full gap-2 mt-4 md:max-w-full">
            <input
              type="email"
              id="email"
              className="text-gray-500 px-3 py-1 w-full text-lg whitespace-nowrap border border-solid border-primary-green focus:outline-primary-green justify-center items-stretch rounded"
              placeholder="Email Address"
            />
            <button
              type="submit"
              className="text-white text-sm leading-10 whitespace-nowrap justify-center items-stretch rounded bg-zinc-900 self-stretch px-6 max-md:px-5 hover:bg-primary-green duration-300"
              aria-label="Subscribe"
            >
              Subscribe
            </button>
          </form>
        </div>
      )}

      <div className="flex flex-wrap gap-4 mt-36 items-center justify-between pb-6 border-b border-gray-400">
        <div className="header">
          <Image
            src="/img/logo.png"
            alt="Logo"
            className="overflow-hidden w-1/3 md:flex"
            width={500}
            height={29}
          />
          <div className="text-zinc-800 text-justify text-sm font-light leading-6 tracking-tight self-stretch whitespace-nowrap mt-4">
            Your gateway to a verified financial future.
          </div>
        </div>

        <div className="follow-us">
          <div className="text-zinc-800 text-justify text-sm font-semibold leading-6 tracking-tight">
            Follow us
          </div>
          <div className="social-links flex gap-4 py-5">
            <Link
              href="#"
              className="overflow-hidden bg-[#F6FAFF] flex justify-center items-center rounded-full h-[50px] w-[50px]"
              aria-label="Facebook"
              aria-role="link"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ color: "#0866FF", width: "24px", height: "24px" }}
              />
            </Link>
            <Link
              href="#"
              className="overflow-hidden bg-[#F6FAFF] flex justify-center items-center rounded-full h-[50px] w-[50px]"
              aria-label="Twitter"
              aria-role="link"
            >
              <FontAwesomeIcon
                icon={faXTwitter}
                style={{ width: "24px", height: "24px" }}
              />
            </Link>
            <Link
              href="#"
              className="overflow-hidden bg-[#F6FAFF] flex justify-center items-center rounded-full h-[50px] w-[50px]"
              aria-label="Instagram"
              aria-role="link"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ width: "24px", height: "24px" }}
              />
            </Link>
            <Link
              href="#"
              className="overflow-hidden bg-[#F6FAFF] flex justify-center items-center rounded-full h-[50px] w-[50px]"
              aria-label="YouTube"
              aria-role="link"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                style={{ color: "#25D366", width: "24px", height: "24px" }}
              />
            </Link>
            <Link
              href="#"
              className="overflow-hidden bg-[#F6FAFF] flex justify-center items-center rounded-full h-[50px] w-[50px]"
              aria-label="LinkedIn"
              aria-role="link"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "#0A66C2", width: "24px", height: "24px" }}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-center justify-between my-10">
        <div className="flex items-center gap-5 flex-wrap">
          <p className="text-xs">All rights reserved by verified</p>
          {footerLinks.map(({ link, text }, index) => (
            <Link
              key={index}
              href={link}
              className="text-primary-green text-xs"
            >
              {text}
            </Link>
          ))}
        </div>
        <div>
          <select
            name="lang"
            id="lang"
            className="bg-gray-300 px-5 py-1 text-xs"
          >
            <option value="english" id="lang">
              English
            </option>
            <option value="french" id="lang">
              French
            </option>
            <option value="spanish" id="lang">
              Spanish
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}
