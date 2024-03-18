import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import CircularBar from "./CircularBar";

const Disapproval = () => {
  return (
    <div>
      <div className="text-gray-shade-30">
        <h1 className="text-xl text-black">Reason for disapproval</h1>
        <div className="border-2 border-solid border-gray-shade-25 rounded-lg p-3 mt-3">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2 border-b border-solid border-gray-shade-25 pb-10">
              <h2 className="text-sm">Plagiarism</h2>
              <p className="text-[10px]">
                We detected plagiarism of more than 8%
              </p>

              <div>
                <CircularBar />
              </div>
            </div>

            <div className="flex flex-col gap-2 border-b border-solid border-gray-shade-25 pb-10">
              <h2 className="text-sm">Not a finance related content</h2>
              <div className="flex justify-between items-center">
                <p className="text-[10px]">
                  This content is not finance related and so we can not approve
                  it.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 border-b border-solid border-gray-shade-25 pb-10">
              <h2 className="text-sm">Abusive words</h2>
              <div className="flex justify-between items-center">
                <p className="text-[10px]">
                  This content has been found to contain abusive or
                  inappropriate words
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 border-b border-solid border-gray-shade-25 pb-10">
              <h2 className="text-sm">Duplicated content</h2>
              <div className="flex justify-between items-center">
                <p className="text-[10px]">
                  This content has once been uploaded to this website
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 border-b border-solid border-gray-shade-25 pb-10">
              <h2 className="text-sm">AI generated</h2>
              <div className="flex justify-between items-center">
                <p className="text-[10px]">
                  This content was disapproved as we detected it was AI
                  generated
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 pb-3">
              <h2 className="text-sm">Additional info</h2>
              <div className="flex justify-between items-center">
                <p className="text-[10px]">
                  Date of submission 21st - March - 2024
                </p>
                <p className="text-[10px]">
                  Date of rejection 22nd - March - 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disapproval;
