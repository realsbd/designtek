"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "@/components/MenuBar";

const Tiptap = ({ editOptions }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
  });

  return (
    <div className="h-full">
      <div
        className={`absolute right-0 top-0 w-[400px] duration-300 z-10 h-52 visible ${
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
