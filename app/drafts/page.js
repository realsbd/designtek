import React from "react";
import DashboardLayout from "../components/Layout/DashboardLayout";

const page = () => {
  return (
    <DashboardLayout>
      <section className="px-5 md:px-20">
        <div className="mb-5">
          <h1 className="text-[25px] font-medium">Drafts</h1>
          <p className="text-sm text-gray-shade-30">
            Your creative write ups are saved here
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="pb-3 border-b border-solid border-gray-shade-20">
            <h2 className="text-lg font-medium mb-3">The reason why USD is weak</h2>
            <div>
              <p className="text-sm">
                The United State of America is running on the high side of the
                hill and Donald, the former president is working
              </p>
              <p className="text-[10px]">15 May 2024</p>
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default page;
