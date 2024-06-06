"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "@/components/MenuBar";

const Tiptap = ({ editOptions }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content:
      "<div><h1 className='text-[50px] font-semibold'>Add title</h1> <p>Write a finance related blog post not less than 700 words....</p></div>",
  });

  return (
    <div className="h-full">
      <div
        className={`absolute right-0 top-0 w-[400px] duration-300 z-10 ${
          editOptions ? "h-52 visible" : "h-0 hidden"
        }`}
      >
        <MenuBar editor={editor} />
      </div>
      <EditorContent className="h-full outline-none" editor={editor} />
    </div>
  );
};

export default Tiptap;
