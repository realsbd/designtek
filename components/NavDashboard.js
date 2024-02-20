import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

export default function NavDashboard() {
    return (
        <nav className={'flex justify-end items-center'}>
            <FontAwesomeIcon icon={faBell} size={'2x'} />
            <Link href={'#'}>
                <Image src={"/img/author.jpg"} alt={"username"} width={40} height={40} className={"rounded-3xl w-10 h-10 mx-6 hover:border hover:border-blue-600"} />
            </Link>
        </nav>
    )
}