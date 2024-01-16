import Link from "next/link";
import AuthorCard from "../AuthorCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function AuthLayout({ children }) {
    return (
        <>
            <div className="w-full flex align-center justify-space-between item-center h-screen">
                <div className="w-2/3 py-16 px-52 mx-auto max-h-full">
                    <Link href="#"><FontAwesomeIcon icon={faArrowLeft} /></Link>
                    {children}
                </div>
                <div className="w-1/3 bg-indigo-200 p-20 h-full">
                    <div className="flex gap-2 mb-4 justify-end">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <h3>“Veerified has been able to help me tap into my creativity and monetize my passion. I love the payment structure as I get paid immediately my posts are approved! Thanks to Veerified...”</h3>
                    <AuthorCard />
                </div>
            </div>
        </>
    );
}