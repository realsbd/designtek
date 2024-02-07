import Image from "next/image";
import Blurb from "./Blurb";
export default function Comment() {



    return (
        <div className="w-full mx-auto">
            <h2 className="text-3xl font-bold my-10">Share your thoughts!</h2>
            <div className="flex gap-4 w-full justify-space-between mx-auto justify-center mb-10">
                <form className="w-2/3">
                    <div className="flex flex-col gap-6">
                        <div className="flex w-auto gap-2">
                            <label className="block flex-1">
                                <span className="text-gray-700">Full name</span>
                                <input
                                    type="text"
                                    className="mt-1 block w-full flex-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                                    placeholder=""
                                />
                            </label>
                            <label className="block flex-1">
                                <span className="text-gray-700">Email address</span>
                                <input
                                    type="email"
                                    className="mt-1 block w-full flex-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                                    placeholder="john@example.com"
                                />
                            </label>
                        </div>
                        <label className="block">
                            <span className="text-gray-700">Write your comment here...</span>
                            <textarea
                                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                                rows="7"
                            ></textarea>
                        </label>
                    </div>
                    <button type="submit" className="bg-gray-200 p-3 w-full rounded mt-4">Submit</button>
                </form>
                <Image src="/img/cta.jpg" width={245} height={406} className="rounded" alt="cta" />
            </div>
        </div>
    )
}