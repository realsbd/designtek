import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

export default function NavDashboard() {
  return (
    <nav className={"flex gap-6 justify-end items-center"}>
      <div className="relative">
        <FontAwesomeIcon icon={faBell} size="lg" />
        <div className="absolute -right-2 -top-2 w-4 text-xs h-4 rounded-full bg-red-500 flex justify-center items-center text-white">
          3
        </div>
      </div>
      <Link href={"#"}>
        <Image
          src={"/img/author.jpg"}
          alt={"username"}
          width={40}
          height={40}
          className={"rounded-3xl w-10 h-10 hover:border hover:border-blue-600"}
        />
      </Link>
    </nav>
  );
}
