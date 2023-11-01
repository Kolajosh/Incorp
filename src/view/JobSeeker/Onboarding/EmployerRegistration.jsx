import React from "react";
import Img from "../../../assets/img/incorpLoginImg.png";
import { ReactComponent as LinkedIn } from "../../../assets/svg/linkedin.svg";
import { ReactComponent as Google } from "../../../assets/svg/google.svg";
import { ReactComponent as Fb } from "../../../assets/svg/fb.svg";
import { TextInput } from "../../../components/reusables/TextInput";
import { CustomButton } from "../../../components/buttons/CustomButton";
import { useNavigate } from "react-router-dom";

const EmployerRegistration = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* image */}
      <div className="md:max-h-screen w-full">
        <img className="object-contain h-screen" src={Img} alt="Incorp" />
      </div>

      {/* login details */}
      <div className="flex flex-col space-y-2 mx-20 items-center justify-center">
        <div className="font-bold">Register</div>
        <div className="flex">
          <LinkedIn style={{ width: "50px", height: "50px" }} />
          <Google style={{ width: "50px", height: "50px" }} />
          <Fb style={{ width: "50px", height: "50px" }} />
        </div>
        <div className="text-black font-bold text-lg text-opacity-[50%]">
          Or
        </div>
        <div className="space-y-5 w-full">
          <TextInput label="Email" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
            <TextInput label="Company's Name" />
            <TextInput label="Registration Number" />
          </div>
          <TextInput label="Password" />
          <TextInput label="Re-enter Password" />
        </div>
        <div className="w-full">
          <CustomButton
            labelText={"Log In"}
            containerVariant="py-2 px-5 w-full rounded-xl flex justify-center"
            buttonVariant="primary"
          />
        </div>
        {/* <div className="text-black font-bold text-sm ">Reset Password</div> */}
        <div className="text-black font-bold text-sm ">
          Have an account?{" "}
          <span
            onClick={() => navigate("/")}
            className="text-[#1ACAA6] cursor-pointer"
          >
            Log In
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmployerRegistration;
