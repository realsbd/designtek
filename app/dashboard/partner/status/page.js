import DashboardLayout from "@/app/components/Layout/DashboardLayout";
import NavDashboard from "@/components/NavDashboard";
import React from "react";

const page = () => {
  return (
    <DashboardLayout>
      <div className="px-5 py-3 md:px-20">
        <NavDashboard />
      </div>
      <div className="bg-black flex justify-center w-full py-2 px-20">
        <p className="text-white text-sm md:text-[25px] font-bold">
          64 hrs : 13 mins : 05 sec left
        </p>
      </div>
      <div className="px-3 py-5 md:p-14 max-md:gap-4 flex flex-col md:flex-row md:justify-between">
        <div className="md:w-[394px]">
          <div className="flex flex-col gap-3 mb-5">
            <h1 className="text-[25px] font-medium">Document status</h1>
            <p className="">Hi David,</p>
            <p className="text-justify">
              Your documents are now under review and you should get to hear
              from us within 3 days from the time of submission.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-primary-green text-[20px] font-medium">
              Please note
            </h2>
            <p className="text-justify">
              Our team will get in touch with you for a virtual meeting only if
              all documents provided are verified. Exception to this, a mail
              will be sent to the email used in registering this account. Thank
              you.
            </p>
          </div>
        </div>
        <div className="md:w-[275px] flex flex-col gap-8">
          <div className="w-full px-5 py-10 bg-gray-shade-15 rounded-md text-center">
            <h2 className="text-[25px] font-medium py-4 border-b-2 border-gray-shade-10">
              Meeting details
            </h2>

            <p className="py-4 text-sm">Time: 12:15 PM - 12:30 PM</p>
            <p className="text-sm">Date: 13, March, 2024.</p>
            <button className="w-full rounded-md text-white text-sm bg-black-shade-0 hover:bg-primary-green duration-300 mt-12 py-3">
              Join Meeting
            </button>
          </div>
          <div className="w-full h-[96px] bg-gray-shade-15 rounded-md text-center"></div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default page;
