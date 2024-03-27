import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/navigation";
import cookieParser from "cookie-parser";

export default function UserRole(){

    const router = useRouter()

    const clearSessionCookie = (req, res) => {
        // Set maxAge to -1 to delete the cookie
        const options = { maxAge: -1 };

        // Remove the cookie
        res.setHeader("Set-Cookie", ["session=" + "; Max-Age=0; Path=/"]);
    };
    const handleLogout = async () => {
        const res = await fetch('https://fintech-blog-749ab6e21c45.herokuapp.com/secure/logout');
        if (res.status === 200) {
            // Remove the session cookie
            document.cookie = 'session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

            // Navigate to the login page
            router.push('/login');
        }

    }


    return (
        <div className=" mt-auto">
            <div className="flex content-center justify-between gap-5 pl-2 pr-9 py-6 border-t border-zinc-300">
                <div className="items-stretch flex flex-col" role="group">
                    <div className="text-stone-300 text-base font-medium leading-5 whitespace-nowrap">
                        David Schoger
                    </div>
                    <div className="text-white text-sm leading-5">Contributor</div>
                </div>
                <FontAwesomeIcon icon={faArrowRightFromBracket} color="white" className={"cursor-pointer"} onClick={handleLogout} />
            </div>
        </div>
    )
}