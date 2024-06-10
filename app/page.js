"use client";

import PageLayout from "./components/Layout/PageLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Blurb from "./components/Blurb";
import Pagination from "@/app/components/Pagination";
import Image from "next/image";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Link from "next/link";
import { useEffect, useState } from "react";
import { formatDate } from "@/lib/utils";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://fintech-blog-749ab6e21c45.herokuapp.com/posts"
        );

        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }

        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
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
          className="mt-8 h-[482px] p-5 sm:p-10 flex max-sm:justify-center items-end"
          style={{
            backgroundImage: posts[0]?.image? `url(${posts[0].image})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgorundRepeat: "no-repeat",
          }}
        >
          <Link href={posts[0]?.slug? posts[0].slug : '#'} className="text-white ">
            <div className="flex gap-5 items-center mb-2">
              <div className="w-[44px] h-[44px] flex justify-center items-center rounded-full overflow-hidden">
                <Image
                  src="/img/author.jpg"
                  width={50}
                  height={50}
                  alt="blog user"
                />
              </div>

              <p className="text-lg">{posts[0]?.author.username}. {formatDate(posts[0]?.createdAt)}</p>
            </div>
            <p className="text-lg sm:text-[32px] font-semibold leading-normal">
              {posts[0]?.title}
            </p>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 my-5 grid-cols-1 md:grid-cols-2 max-lg:px-5">
          {posts.map((post) => (
            <Blurb
              key={post._id}
              link={post.slug}
              img={post.image}
              title={post.title}
              text={
                post.desc.length > 250
                  ? `${post.desc.slice(0, 250)}...`
                  : post.desc
              }
            />
          ))}
        </div>
        <div className="max-md:pr-5">
          <Pagination />
        </div>
        <ScrollToTopButton />
      </div>
    </PageLayout>
  );
}
