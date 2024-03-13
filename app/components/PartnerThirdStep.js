import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

const PartnerThirdStep = ({ setCurrentStep }) => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <div className="flex md:justify-between flex-col md:flex-row h-full">
        <div className="md:w-[400px] h-full">
          <h1 className="text-2xl font-medium mb-3">Verification</h1>
          <p className="text-gray-shade-5">
            Welcome to the last phase of becoming Veerified’s partner.
          </p>
          <div className="flex my-12 gap-12 items-center">
            <div className="flex justify-center items-center w-[38px] h-[38px] rounded-full bg-[#E8EDF4]">
              <p>1</p>
            </div>
            <div className="flex justify-center items-center w-[38px] h-[38px] rounded-full bg-[#E8EDF4]">
              <p>2</p>
            </div>
            <div className="flex justify-center items-center w-[38px] h-[38px] rounded-full bg-primary-green text-white">
              <p>3</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 mb-3">
            <h2 className="text-lg font-medium">Calendar</h2>
            <p className="text-gray-shade-5">
              Choose a comfortable date so we can meet you virtually.
            </p>
            <div>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </div>
          </div>
        </div>
        <div className="flex md:flex-col justify-end">
          <div className="flex gap-5">
            <button
              onClick={() => setCurrentStep(2)}
              className="bg-[#E8EDF4] hover:bg-primary-green duration-300 px-5 py-2 rounded-sm text-black hover:text-white"
            >
              Previous
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerThirdStep;
