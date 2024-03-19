"use client";

import PageLayout from "@/app/components/Layout/PageLayout";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function About() {
  return (
    <PageLayout>
      <div
        className="flex items-center"
        style={{
          backgroundImage: 'url("/img/unsplash.png")',
          height: "400px",
          backgroundPosition: "right",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="w-auto md:w-1/2 p-5 flex flex-col justify-center"
          style={{
            backgroundImage: 'url("/img/about-2.png")',
            height: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="text-4xl font-bold mb-10">
            That smile when you get{" "}
            <span className="text-customBlue">Verified</span>
          </h1>
          <p className=" border-t border-customBlue text-xl pt-6">
            Your All-in-One Solution for Effortless Management of Fiat and
            Crypto Transactions!
          </p>
        </div>
        <div className="w-1/2 h-full bg-gradient-to-r from-transparent to-customBlue ..."></div>
      </div>
      <div className="mt-20 md:mt-36">
        {/* <div className="border border-customBlue rounded h-56 px-5"> */}
        <fieldset className="py-20 px-5 border-solid border border-primary-green">
          <legend className="text-4xl font-bold -mt-6 mx-auto flex justify-center">
            <h1 className="text-4xl font-bold -mt-6 mx-auto flex justify-center">
              About <span className="text-customBlue">us</span>
            </h1>
          </legend>

          <p className="">
            Welcome to a future where every transaction is seamless, secure, and
            verified. Verified is not just a blog; we are the heartbeat of a
            revolutionary fintech product that has redefined the way we manage
            fiat and cryptocurrency transactions. As the pioneers in this
            dynamic field, we take pride in introducing you to a world where
            financial management meets innovation. At Verified, we believe in
            the power of innovation to transform lives.{" "}
          </p>
        </fieldset>
        {/* </div> */}
      </div>
      <ScrollToTopButton />
    </PageLayout>
  );
}
