import React from "react";
import { ReactComponent as Logo } from "../../../assets/svg/incorpLogo.svg";
import { ReactComponent as Load } from "../../../assets/svg/bigload.svg";

const EmployerPendingReg = () => {
  return (
    <>
      <div className="px-5 py-5 flex justify-between items-center">
        <div className="ml-10">
          <Logo style={{ width: "100px" }} />
        </div>
        <div className="flex text-xs items-center gap-5">
          <div>Setup process</div>
          <div className="text-[#1ACAA6]">0% Completed</div>
        </div>
      </div>

      <div className="flex space-y-3 flex-col items-center justify-center mt-10">
        <div className="animate-spin-2">
          <Load />
        </div>
        <div className="font-semibold">
          Your profile is being Processed and under Review.
        </div>
        <div className="text-xs text-center">
          A mail will be sent with login details after thorough review process.
          <br />
          Thanks for registering.
        </div>
      </div>
    </>
  );
};

export default EmployerPendingReg;
