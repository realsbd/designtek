import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AppliedCard from "./AppliedCard";

const PartnerSecondStep = ({
  setCurrentStep,
  handleDocumentChange,
  handleFileChange,
  file,
  success,
  setSuccess,
}) => {
  if (success) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <AppliedCard />
      </div>
    );
  }

  return (
    <div>
      <div className="flex md:justify-between flex-col md:flex-row h-full">
        <div className="md:w-[400px] h-full">
          <h1 className="text-2xl font-medium mb-3">KYC</h1>
          <p className="text-gray-shade-5">
            Hi, you are just a step away from becoming Veerified’s partner. Well
            done!
          </p>
          <div className="flex my-12 gap-12 items-center">
            <div className="flex justify-center items-center w-[38px] h-[38px] rounded-full bg-[#E8EDF4]">
              <p>1</p>
            </div>
            <div className="flex justify-center items-center w-[38px] h-[38px] rounded-full bg-primary-green text-white">
              <p>2</p>
            </div>
            <div className="flex justify-center items-center w-[38px] h-[38px] rounded-full bg-[#E8EDF4]">
              <p>3</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 mb-3">
            <h2 className="text-lg font-medium">Upload document</h2>
            <p className="text-gray-shade-5">
              Please take note, only documents in the listed formats are allowed
              to be uploaded
            </p>
            <div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select document" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value="International Passport"
                    onClick={() =>
                      handleDocumentChange("international passport")
                    }
                  >
                    International Passport
                  </SelectItem>
                  <SelectItem
                    value="drivers-license"
                    onClick={() => handleDocumentChange("drivers license")}
                  >
                    Drivers License
                  </SelectItem>
                  <SelectItem
                    value="birth-certificate"
                    onClick={() => handleDocumentChange("birth certificate")}
                  >
                    Birth Certificate
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-3 items-center text-sm">
              <label className="bg-[#E8EDF4] hover:bg-primary-green duration-300 px-5 py-2 rounded-sm text-black hover:text-white">
                Choose
                <input
                  type="file"
                  accept="image/*,application/pdf"
                  className="hidden"
                />
              </label>
              <span>JPG, PNG, PDF</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 mb-3">
            <h2 className="text-lg font-medium">Proof of address</h2>
            <p className="text-gray-shade-5">
              Kindly attach your current proof of address document
            </p>
            <div className="flex gap-3 items-center text-sm">
              <label className="bg-[#E8EDF4] hover:bg-primary-green duration-300 px-5 py-2 rounded-sm text-black hover:text-white">
                Choose
                <input
                  type="file"
                  accept="image/*,application/pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              <span>JPG, PNG, PDF</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 mb-3">
            <h2 className="text-lg font-medium">Next of Kin</h2>
            <p className="text-gray-shade-5">
              Please include details of next of kin{" "}
            </p>
            <input type="number" className="gray-intput-field" />
          </div>
        </div>
        <div className="flex md:flex-col justify-end">
          <div className="flex">
            <button
              onClick={() => setCurrentStep(1)}
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

export default PartnerSecondStep;
