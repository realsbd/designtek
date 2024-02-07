import PageLayout from "@/app/components/Layout/PageLayout";
import Image from "next/image";

export default function About() {
    return (
        <PageLayout>
            <div className="mt-10 flex items-center" style={{backgroundImage: 'url("/img/unsplash.png")', height: "400px"}}>
                <div className="w-1/2 p-5">
                    <h1 className="text-6xl font-bold mb-10">That smile when
                        you get <span className="text-customBlue">Verified</span></h1>
                    <p className=" border-t border-customBlue text-xl pt-6">Your All-in-One Solution for Effortless Management of Fiat and Crypto Transactions!</p>
                </div>
                <div className="w-1/2 h-full bg-gradient-to-r from-transparent to-customBlue ..."></div>
            </div>
            <div className="mt-36">
                <div className="border border-customBlue rounded h-56 px-5">
                    <h1 className="text-4xl font-bold -mt-6 mx-auto flex justify-center">About <span className="text-customBlue">us</span></h1>
                    <p className="mt-16">Welcome to a future where every transaction is seamless, secure, and verified. Verified is  not just a blog; we are the heartbeat of a revolutionary fintech product that has redefined the way we manage fiat and cryptocurrency transactions. As the pioneers in this dynamic field, we take pride in introducing you to a world where financial management meets innovation. At Verified, we believe in the power of innovation to transform lives. </p>
                </div>
            </div>
        </PageLayout>
    )
}