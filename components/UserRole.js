import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/navigation";
import {logout} from "@/lib/action";

export default function UserRole(){

    const router = useRouter()



    return (
        <div className=" mt-auto">
            <div className="flex content-center justify-between gap-5 pl-2 pr-9 py-6 border-t border-zinc-300">
                <div className="items-stretch flex flex-col" role="group">
                    <div className="text-stone-300 text-base font-medium leading-5 whitespace-nowrap">
                        David Schoger
                    </div>
                    <div className="text-white text-sm leading-5">Contributor</div>
                </div>
                <form action={async () => {
                    await logout()
                }
                }>
                    <button type={"submit"}>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} color="white" className={"cursor-pointer"} />
                    </button>
                </form>
            </div>
        </div>
    )
}