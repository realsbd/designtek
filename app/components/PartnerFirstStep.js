"use client";

const PartnerFirstStep = ({ setCurrentStep, userData, setUserData }) => {
  return (
    <div>
      <div className="flex md:justify-between flex-col md:flex-row h-full">
        <div className="md:w-[400px] h-full">
          <h1 className="text-2xl font-medium mb-3">
            Hi, we&apos;d like to meet you!
          </h1>
          <p className="text-gray-shade-5">
            Have you got what it takes to be consistently profitable in the
            foreign exchange market? If yes, fill the details below.{" "}
          </p>
          <div className="flex my-12 gap-12 items-center">
            <div className="flex justify-center items-center w-[38px] h-[38px] rounded-full bg-primary-green text-white">
              <p>1</p>
            </div>
            <div className="flex justify-center items-center w-[38px] h-[38px] rounded-full bg-[#E8EDF4]">
              <p>2</p>
            </div>
            <div className="flex justify-center items-center w-[38px] h-[38px] rounded-full bg-[#E8EDF4]">
              <p>3</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 mb-3">
            <h2 className="text-lg font-medium">Legal Name</h2>
            <p className="text-gray-shade-5">Please fill in your legal name </p>
            <input type="text" className="gray-intput-field " />
          </div>

          <div className="flex flex-col gap-3 mb-3">
            <h2 className="text-lg font-medium">
              Link to active social media accounts
            </h2>
            <p className="text-gray-shade-5">
              Make use of the “+” icon to add more social media active accounts
              of yours.{" "}
            </p>
            <input type="text" className="gray-intput-field " />
          </div>

          <div className="flex flex-col gap-3 mb-3">
            <h2 className="text-lg font-medium">
              How many years of experience do you have trading the financial
              exchange market?
            </h2>
            <p className="text-gray-shade-5">Ensure to enter a digit</p>
            <input type="number" className="gray-intput-field" />
          </div>
        </div>
        <div className="flex md:flex-col justify-end">
          <button
            onClick={() => setCurrentStep(2)}
            className="bg-[#E8EDF4] hover:bg-primary-green duration-300 px-5 py-2 rounded-sm text-black hover:text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnerFirstStep;
