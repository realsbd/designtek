import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DashboardLayout from "@/app/components/Layout/DashboardLayout";
import NavDashboard from "@/components/NavDashboard";

export default function NewPost() {
  return (
    <DashboardLayout>
      <div className="px-5 py-8 md:px-20">
        <NavDashboard />
      </div>
      <div className="bg-black flex justify-end w-full py-2 px-20">
        <div className="flex gap-3">
          <button>
            <Image
              src="/img/plus-circle.svg"
              width={24}
              height={24}
              alt="plus button"
            />
          </button>
          <button>
            <Image
              src="/img/settings.svg"
              width={24}
              height={24}
              alt="settings button"
            />
          </button>
          <button>
            <Image
              src="/img/edit.svg"
              width={24}
              height={24}
              alt="edit button"
            />
          </button>
          <button className="text-[#E8EDF4] hover:bg-[#E8EDF4] rounded-sm duration-300 hover:text-black text-sm px-4 py-1">
            Save as draft
          </button>
          <button className="bg-[#E8EDF4] text-black px-4 py-1 rounded-sm text-sm">
            submit
          </button>
        </div>
      </div>
      <div className="px-20 py-10">Add new post</div>
    </DashboardLayout>
  );
}
