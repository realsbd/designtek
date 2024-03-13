import Link from "next/link";

const PartnerFourthStep = () => {
  return (
    <div className="h-full w-[425px] flex flex-col justify-center items-center gap-5 text-center">
      <h1 className="font-medium text-[25px]">
        You have successfully applied{" "}
      </h1>
      <p className="text-[18px] text-gray-shade-0">
        Thank you for applying to become a partner, our team will review and
        revert within 3 working days.
      </p>
      <Link href="/dashboard/partner/status" className="text-sm text-[#6461FC]">
        Click to view your document status and meeting details
      </Link>
    </div>
  );
};

export default PartnerFourthStep;
