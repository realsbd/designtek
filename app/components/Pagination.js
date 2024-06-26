import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Pagination() {
  return (
    <div className="flex justify-end items-center gap-5 py-3.5">
      <div className="items-center rounded flex gap-5">
        <button
          className="text-white text-base leading-6 tracking-tight whitespace-nowrap flex justify-center items-center rounded border bg-primary-green aspect-square h-6 px-2.5 border-solid border-primary-green"
          aria-label="Button 1"
          role="button"
        >
          1
        </button>
        <button
          className="text-black text-justify text-base leading-6 tracking-tight whitespace-nowrap flex justify-center items-center rounded border aspect-square h-6 px-2 border-solid border-primary-green"
          aria-label="Button 2"
          role="button"
        >
          2
        </button>
        <button
          className="text-black text-justify text-base leading-6 tracking-tight whitespace-nowrap flex justify-center items-center rounded border aspect-square h-6 px-2 border-solid border-primary-green"
          aria-label="Button 3"
          role="button"
        >
          3
        </button>
        <button
          className="text-black text-justify text-base leading-6 tracking-tight whitespace-nowrap flex justify-center items-center rounded border aspect-square h-6 px-2 border-solid border-primary-green"
          aria-label="Button 4"
          role="button"
        >
          4
        </button>
        <button
          className="text-black text-justify text-base leading-6 tracking-tight whitespace-nowrap flex justify-center items-center rounded border aspect-square h-6 px-2 border-solid border-primary-green"
          aria-label="Button 5"
          role="button"
        >
          5
        </button>
      </div>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
}
