"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import DashboardLayout from "@/app/components/Layout/DashboardLayout";
import Tiptap from "@/components/TipTap";
import { useUser } from "@/app/hooks/useUser";
import { useRouter } from "next/navigation";

export default function NewPost() {
  const { user } = useUser();
  const router = useRouter();

  const [editOptions, setEditOptions] = useState(false);
  const [content, setContent] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  const handleContentChange = (e) => {
    setContent(e)
  }

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);
  return (
    <DashboardLayout>
      <div className="bg-black flex justify-end w-full py-2 px-20">
        <div className="flex gap-3">
          <button onClick={() => setEditOptions(!editOptions)}>
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
      <div
        className="w-2/3 grid place-items-center mx-auto pt-10 mb-10"
      >
        <div className="text-3xl text-center text-sky-300 mb-10">
          Add a New Post
        </div>

        <Tiptap content={content}
          onChange={(newContent) => handleContentChange(newContent)}
        />

      </div>
    </DashboardLayout>
  );
}