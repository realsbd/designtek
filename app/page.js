"use client"
import PageLayout from "./components/Layout/PageLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Blurb from "./components/Blurb";
import Pagination from "@/app/components/Pagination";
import Image from "next/image";
import ScrollToTopButton from "./components/ScrollToTopButton";
import getPosts from "@/lib/posts";
import {useEffect, useState} from "react";

export default function Home() {

  const blurbsData = [
    {
      link: "#",
      img: "/img/blurb-1.png",
      title: "When an unknown printer took a galley of type and scrambled",
      text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into."
    },
    {
      link: "#",
      img: "/img/blurb-2.png",
      title: "When an unknown printer took a galley of type and scrambled",
      text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into."
    },
    {
      link: "#",
      img: "/img/blurb-3.png",
      title: "When an unknown printer took a galley of type and scrambled",
      text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into."
    },
    {
      link: "#",
      img: "/img/blurb-4.png",
      title: "When an unknown printer took a galley of type and scrambled",
      text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into."
    },
    {
      link: "#",
      img: "/img/blurb-5.png",
      title: "When an unknown printer took a galley of type and scrambled",
      text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into."
    },
    {
      link: "#",
      img: "/img/blurb-6.png",
      title: "When an unknown printer took a galley of type and scrambled",
      text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into."
    },
    {
      link: "#",
      img: "/img/blurb-7.png",
      title: "When an unknown printer took a galley of type and scrambled",
      text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into."
    },
    {
      link: "#",
      img: "/img/blurb-8.png",
      title: "When an unknown printer took a galley of type and scrambled",
      text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into."
    },
    {
      link: "#",
      img: "/img/blurb-9.png",
      title: "When an unknown printer took a galley of type and scrambled",
      text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into."
    },
    {
      link: "#",
      img: "/img/blurb-10.png",
      title: "When an unknown printer took a galley of type and scrambled",
      text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into."
    },
    {
      link: "#",
      img: "/img/blurb-11.png",
      title: "When an unknown printer took a galley of type and scrambled",
      text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into."
    },
    {
      link: "#",
      img: "/img/blurb-12.png",
      title: "When an unknown printer took a galley of type and scrambled",
      text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into."
    },
  ]

  const [posts, setPosts] = useState([]);
  const [noContent, setNoContent] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://fintech-blog-749ab6e21c45.herokuapp.com/posts");

        if (response.status === 204) {
          setNoContent(true);
          setPosts([]);
        } else if (response.status === 200) {
          const data = await response.json();
          setPosts(data);
          setNoContent(false);
        } else {
          // Handle other response statuses
          console.error('Error fetching posts:', response.status);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);


  return (
    <PageLayout>
      <div className="w-full">
        <div className="text-center px-5 sm:px-0 mt-20">
          <header className="text-zinc-800 text-xl leading-10 whitespace-nowrap">
            The blog
          </header>
          <h1 className="text-black inline text-5xl font-medium leading-10 tracking-tighter self-stretch w-full mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-10">
            Writings from our{" "}
            <span className="text-primary-green relative">
              team
              <Image
                src="/img/splash.png"
                alt="splash"
                width={45}
                height={45}
                className="absolute top-2 md:-top-1 -right-4 md:-right-9 max-md:w-5 max-md:h-5"
              />
            </span>
          </h1>
          <div className="text-zinc-800 text-base leading-5 tracking-tight self-stretch w-full mt-4 max-md:max-w-full">
            The latest industry blog posts, finance, technology and forex
            signals.
          </div>
          <form className="flex justify-center">
            <div
              className="flex justify-center mt-6 mb-4"
              style={{ width: "500px" }}
            >
              <input
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 focus:outline-primary-green focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Search updates"
              />
              <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="button"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} className="w-6" />
              </button>
            </div>
          </form>
        </div>

        <div
          className="mt-8 h-[482px] p-10 flex items-center max-sm:justify-center sm:items-end"
          style={{
            backgroundImage: "url('/img/hero-image.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgorundRepeat: "no-repeat",
          }}
        >
          <div className="text-white max-sm:text-center">
            <p className="text-2xl font-normal">David Nelson. 20.Jan.2024</p>
            <h3 className="text-4xl font-medium tracking-tighter">
              Latest updates on the financial exchange market
            </h3>
            <p className="text-2xl font-normal mb-3">
              Latest update on forex news
            </p>

            <div className="flex gap-2 max-sm:justify-center items-center">
              <button className="border border-solid duration-300 border-white rounded-lg py-1 px-7 hover:bg-primary-green hover:border-primary-green">
                Crypto
              </button>
              <button className="border border-solid duration-300 border-white rounded-lg py-1 px-7 hover:bg-primary-green hover:border-primary-green">
                Money
              </button>
              <button className="border border-solid duration-300 border-white rounded-lg py-1 px-7 hover:bg-primary-green hover:border-primary-green">
                Market
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 my-5 grid-cols-1 md:grid-cols-2 max-lg:px-5">
          {/*{noContent ? (*/}
          {/*    <p>No content available</p>*/}
          {/*) : (*/}
          {/*    <ul>*/}
          {/*      {posts.map((post) => (*/}
          {/*          <li key={post.id}>{post.title}</li>*/}
          {/*      ))}*/}
          {/*    </ul>*/}
          {/*)}*/}
          {blurbsData.map(blurb => (
              <Blurb
                  key={blurb.title}
                  link={blurb.link}
                  img={blurb.img}
                  title={blurb.title}
                  text={blurb.text}
              />
          ))}
        </div>
        <Pagination />
        <ScrollToTopButton />
      </div>
    </PageLayout>
  );
}
