import Link from "next/link";
import AuthorCard from "../AuthorCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function AuthLayout({ children }) {
  return (
    <>
      <div className="w-full flex justify-center align-center item-center h-screen">
        <div className="w-[800px] py-16 px-5 sm:px-24 md:px-28 lg:px-52 mx-auto h-full flex flex-col justify-center">
          <div className="flex flex-col justify-between gap-5">
            <Link href="/" className="w-5">
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
            {children}
          </div>
        </div>
        <div className="w-[600px] bg-indigo-200 hidden md:block px-10 lg:px-20 h-full">
          <div className="flex gap-2 mt-28 mb-4 justify-end">
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
          </div>
          <h3 className="text-2xl">
            “Veerified has been able to help me tap into my creativity and
            monetize my passion. I love the payment structure as I get paid
            immediately my posts are approved! Thanks to Veerified...”
          </h3>
          <AuthorCard />
        </div>
      </div>
    </>
  );
}
