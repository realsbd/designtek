import Link from 'next/link'
import Image from 'next/image'
import PageLayout from './components/Layout/PageLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Blurb from './components/Blurb'
import Footer from './components/Footer'

export default function Home() {

  const blurbsData = [
    {
      link: "#",
      img: "/img/blurb-1.png",
      text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into."
    },
    {
      link: "#",
      img: "/img/blurb-2.png",
      text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into."
    },
    {
      link: "#",
      img: "/img/blurb-3.png",
      text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into."
    },
    {
      link: "#",
      img: "/img/blurb-4.png",
      text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into."
    },
    {
      link: "#",
      img: "/img/blurb-5.png",
      text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into."
    },
    {
      link: "#",
      img: "/img/blurb-6.png",
      text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into."
    },
    {
      link: "#",
      img: "/img/blurb-7.png",
      text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into."
    },
    {
      link: "#",
      img: "/img/blurb-8.png",
      text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into."
    },
    {
      link: "#",
      img: "/img/blurb-9.png",
      text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into."
    },
    {
      link: "#",
      img: "/img/blurb-10.png",
      text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into."
    },
    {
      link: "#",
      img: "/img/blurb-11.png",
      text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into."
    },
    {
      link: "#",
      img: "/img/blurb-12.png",
      text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into."
    },
  ]

  const blurbs = blurbsData.map(blurb => (
    <Blurb
      key={blurb.img}
      link={blurb.link}
      img={blurb.img}
      text={blurb.text}
    />
  ))


  return (
    <PageLayout>
      <div>
        <div className="text-center mt-20">
          <header className="text-zinc-800 text-xl leading-10 whitespace-nowrap">
            The blog
          </header>
          <h1 className="text-cyan-600 text-5xl font-medium leading-10 tracking-tighter self-stretch w-full mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-10">
            Writings from our <span className="text-cyan-600">team</span>
          </h1>
          <div className="text-zinc-800 text-base leading-10 tracking-tight self-stretch w-full mt-4 max-md:max-w-full">
            The latest industry blog posts, finance, technology and forex signals.
          </div>
          <form className="flex justify-center">
            <div className="w-full mt-6 mb-4">
              <input className="shadow appearance-none border rounded w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Search updates" />
              <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 w-4/5 pt-80 mx-auto relative" style={{ backgroundImage: "url('/img/blurb-2.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="min-h-96 text-white ml-8 ">
            <p className="text-2xl font-normal">David Nelson. 20.Jan.2024</p>
            <h3 className="text-4xl font-medium tracking-tighter">Latest updates on the financial exchange market</h3>
            <p className="text-2xl font-normal mb-3">Latest update on forex news</p>
          </div>
        </div>

        <div className="flex flex-row flex-wrap justify-center">
          {blurbs}
        </div>
        <div className="items-stretch flex justify-end gap-5 pr-4 py-3.5">
          <div className="items-stretch rounded flex justify-between gap-5">
            <button
              className="text-white text-justify text-base leading-6 tracking-tight whitespace-nowrap justify-center items-center rounded border bg-cyan-600 aspect-square h-6 px-2.5 border-solid border-cyan-600"
              aria-label="Button 1"
              role="button"
            >
              1
            </button>
            <button
              className="text-black text-justify text-base leading-6 tracking-tight whitespace-nowrap justify-center items-center rounded border aspect-square h-6 px-2 border-solid border-cyan-600"
              aria-label="Button 2"
              role="button"
            >
              2
            </button>
            <button
              className="text-black text-justify text-base leading-6 tracking-tight whitespace-nowrap justify-center items-center rounded border aspect-square h-6 px-2 border-solid border-cyan-600"
              aria-label="Button 3"
              role="button"
            >
              3
            </button>
            <button
              className="text-black text-justify text-base leading-6 tracking-tight whitespace-nowrap justify-center items-center rounded border aspect-square h-6 px-2 border-solid border-cyan-600"
              aria-label="Button 4"
              role="button"
            >
              4
            </button>
            <button
              className="text-black text-justify text-base leading-6 tracking-tight whitespace-nowrap justify-center items-center rounded border aspect-square h-6 px-2 border-solid border-cyan-600"
              aria-label="Button 5"
              role="button"
            >
              5
            </button>
          </div>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <Footer />
        <div>
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



      </div>

    </PageLayout>
  )
}
