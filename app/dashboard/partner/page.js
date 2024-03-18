"use client";

import React, { useState } from "react";
import DashboardLayout from "@/app/components/Layout/DashboardLayout";
import PartnerFirstStep from "@/app/components/PartnerFirstStep";
import PartnerSecondStep from "@/app/components/PartnerSecondStep";
import PartnerThirdStep from "@/app/components/PartnerThirdStep";
import NavDashboard from "@/components/NavDashboard";
import PartnerFourthStep from "@/app/components/PartnerFourthStep";

const PartnerPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [success, setSuccess] = useState(false);

  const [selectedDocument, setSelectedDocument] = useState(null);
  const [file, setFile] = useState(null);

  const handleDocumentChange = (document) => {
    setSelectedDocument(document);
    setFile(null); // Clear the previously selected file
  };

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  const showStep = (step) => {
    switch (step) {
      case 1:
        return <PartnerFirstStep setCurrentStep={setCurrentStep} />;
      case 2:
        return (
          <PartnerSecondStep
            setCurrentStep={setCurrentStep}
            handleDocumentChange={handleDocumentChange}
            handleFileChange={handleFileChange}
            file={file}
            success={success}
            setSuccess={setSuccess}
          />
        );
      case 3:
        return <PartnerThirdStep setCurrentStep={setCurrentStep} />;
      case 4:
        return (
          <div className="h-[500px] flex justify-center items-center">
            <PartnerFourthStep setCurrentStep={setCurrentStep} />
          </div>
        );
    }
  };

  const handleSubmit = () => {
    setSuccess(true);
    console.log("clicked");
    setTimeout(() => {
      setSuccess(false);
      setCurrentStep(3);
    }, 2000);
  };

  return (
    <DashboardLayout>
      <div className="px-5 py-3 md:px-20">
        <NavDashboard />
      </div>
      <div className="bg-black flex justify-end w-full py-2 px-20">
        <div className="">
          <button
            disabled={!(currentStep === 2)}
            className={`become-a-partner-submit-btn ${
              currentStep >= 2 ? "bg-primary-green text-white" : ""
            }`}
            onClick={handleSubmit}
          >
            submit
          </button>
        </div>
      </div>
      <div className="px-4 md:px-20 h-[580px] overflow-y-auto py-5">
        {showStep(currentStep)}
      </div>
    </DashboardLayout>
  );
};

export default PartnerPage;
