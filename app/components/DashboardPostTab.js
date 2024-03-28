import PostsFilter from "./PostsFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Disapproval from "./Disapproval";

const DashboardPostTab = ({ filter, handleFilterChange, handleTabChange }) => {
  const router = useRouter();

  return (
    <div>
      <div className="flex gap-20">
        <div className="flex flex-col gap-2 w-full">
          <div>
            <button
              href=""
              className="w-9 h-9 flex items-center justify-start"
              onClick={() => router.back()}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          </div>

          <div>
            <div className="flex flex-col gap-2 w-full">
              <Image
                src="/img/post-1.png"
                alt="post one"
                width={500}
                height={500}
                className="w-full rounded-lg"
              />
              <h1 className="text-[23px] text-black">
                Latest updates on the finanacial market and the implecation on
                the economy
              </h1>
              <p className="text-sm text-gray-shade-30 text-justify">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <Image
                src="/img/post-2.png"
                alt="post one"
                width={500}
                height={500}
                className="w-full rounded-lg"
              />
              <h1 className="text-lg text-black">
                Latest updates on the finanacial market and the implecation on
                the economy
              </h1>
              <p className="text-sm text-gray-shade-30 text-justify">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-gray-shade-30">
          <Disapproval />
        </div>
      </div>
    </div>
  );
};

export default DashboardPostTab;
