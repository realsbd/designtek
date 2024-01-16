import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
export default function Bottom() {
    return(
        <div className="mt-52">
          <div className="flex max-w-[501px] flex-col mx-auto">
            <header className="text-zinc-800 text-xl font-semibold leading-6 self-center whitespace-nowrap">
              Never Miss A Post!
            </header>
            <div className="text-zinc-900 text-sm leading-6 self-center whitespace-nowrap mt-4">
              Sign up for free and be the first to get notified about updates.
            </div>
            <form className="items-center rounded flex w-full gap-2 mt-4 pl-3.5 max-md:max-w-full max-md:flex-wrap">
              <input
                type="email"
                id="email"
                className="text-gray-500 text-sm w-full whitespace-nowrap justify-center items-stretch rounded"
                placeholder="Email Address"
              />
              <button
                type="submit"
                className="text-white text-sm leading-10 whitespace-nowrap justify-center items-stretch rounded bg-zinc-900 self-stretch px-6 max-md:px-5"
                aria-label="Subscribe"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="flex mx-auto mt-10 justify-center gap-14 pb-6 border-b border-gray-400">
            <header className="header w-1/4">
              <Image
                src="/img/logo.png"
                alt="Logo"
                className="aspect-[3.9] object-contain object-center w-[113px] overflow-hidden max-w-full"
                width={113}
                height={29}
              />
              <div className="text-zinc-800 text-justify text-sm font-light leading-6 tracking-tight self-stretch whitespace-nowrap mt-4">
                Your gateway to a verified financial future.
              </div>
            </header>
            <div className="contact w-1/4">
              <div className="text-zinc-800 text-justify text-xl leading-9 tracking-tight">
                <span className="font-medium text-sm">Contact us</span>
              </div>
              <div className="text-zinc-800 text-justify text-sm font-light leading-6 tracking-tight whitespace-nowrap mt-4">
                +234 (0) 906 336 6118, +234 (0) 70 567 745 6578
              </div>
            </div>
            <div className="follow-us w-1/4">
              <div className="text-zinc-800 text-justify text-sm font-semibold leading-6 tracking-tight">
                Follow us
              </div>
              <div className="social-links flex items-stretch">
                <Link
                  href="#"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  aria-label="Facebook"
                  aria-role="link"
                ><FontAwesomeIcon icon={faFacebook} /></Link>
                <Link
                  href="#"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  aria-label="Twitter"
                  aria-role="link"
                ><FontAwesomeIcon icon={faTwitter} /></Link>
                <Link
                  href="#"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  aria-label="Instagram"
                  aria-role="link"
                ><FontAwesomeIcon icon={faInstagram} /></Link>
                <Link
                  href="#"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  aria-label="YouTube"
                  aria-role="link"
                ><FontAwesomeIcon icon={faWhatsapp} /></Link>
                <Link
                  href="#"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  aria-label="LinkedIn"
                  aria-role="link"
                ><FontAwesomeIcon icon={faLinkedin} /></Link>
              </div>
            </div>
          </div>
        </div>
    )
}