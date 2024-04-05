import {
  faAlignCenter,
  faAlignJustify,
  faAlignLeft,
  faAlignRight,
  faBold,
  faItalic,
  faListOl,
  faListUl,
  faMagnifyingGlass,
  faQuoteRight,
  faStrikethrough,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Blocks = ({ editor }) => {
  return (
    <div>
      <div className="flex border border-solid items-center border-primary-green rounded-md p-2">
        <input
          type="text"
          placeholder="Search"
          className="w-full outline-none"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="w-8 h-8 text-primary-green"
        />
      </div>
      <div className="grid grid-cols-5 gap-5">
        <button
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={
            editor.isActive({ textAlign: "center" }) ? "is-active" : ""
          }
        >
          <FontAwesomeIcon icon={faAlignCenter} />
        </button>

        <button
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          className={
            editor.isActive({ textAlign: "justify" }) ? "is-active" : ""
          }
        >
          <FontAwesomeIcon icon={faAlignJustify} />
        </button>

        <button
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
        >
          <FontAwesomeIcon icon={faAlignLeft} />
        </button>

        <button
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={editor.isActive({ textAlign: "right" }) ? "is-active" : ""}
        >
          <FontAwesomeIcon icon={faAlignRight} />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : ""}
        >
          <FontAwesomeIcon icon={faListUl} />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "is-active" : ""}
        >
          <FontAwesomeIcon icon={faListOl} />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          <FontAwesomeIcon icon={faItalic} />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={`border border-solid border-gray-shade-20 ${
            editor.isActive("bold") ? "is-active" : ""
          }`}
        >
          <FontAwesomeIcon icon={faBold} />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "is-active" : ""}
        >
          <FontAwesomeIcon icon={faQuoteRight} />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
        >
          <FontAwesomeIcon icon={faStrikethrough} />
        </button>
      </div>
    </div>
  );
};

export default Blocks;
