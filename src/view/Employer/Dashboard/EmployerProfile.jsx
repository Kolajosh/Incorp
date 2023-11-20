import React, { useState } from "react";
import { useSelector } from "react-redux";
import { TextInput } from "../../../components/reusables/TextInput";
import { CustomButton } from "../../../components/buttons/CustomButton";
import { ReactComponent as CompanyIcon } from "../../../assets/svg/company-icon.svg";
import EmployerNavigator from "./component/EmployerNavigator";
import EmployerSocial from "./component/EmployerSocial";
import EmployerInfo from "./component/EmployerInfo";
import FoundingInfo from "./component/FoundingInfo";
import EmployerSettings from "./component/EmployerSettings";
import EmployerSidebar from "./component/EmployerSidebar";
import Navbar from "../../JobSeeker/Dashboard/component/Navbar";

const EmployerProfile = () => {
  const userData = useSelector((state) => state?.auth?.data);
  const [selectedMenu, setSelectedMenu] = useState("Home");
  const [selectedNav, setSelectedNav] = useState("Profile");

  return (
    <>
      <div className="grid grid-cols-6">
        <div className="col-span-1">
          <EmployerSidebar
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
          />
        </div>
        <div className="col-span-5 h-screen bg-[#EFF6F5] overflow-scroll">
          <div>
            <Navbar title={selectedMenu} userData={userData} />
            <div className=" mx-5 mt 10 flex items-center gap-5">
              <TextInput name="job" placeHolder="Designer" />
              <TextInput name="location" placeHolder="Nigeria" />
              <CustomButton labelText={"Search"} />
            </div>
          </div>

          <div>
            <EmployerNavigator
              selectedNav={selectedNav}
              setSelectedNav={setSelectedNav}
            />
          </div>

          <div>
            {selectedNav === "Profile" && <EmployerInfo />}
            {selectedNav === "Personal" && <FoundingInfo />}
            {selectedNav === "Social" && <EmployerSocial />}
            {selectedNav === "Settings" && <EmployerSettings />}
          </div>

          {/* footer */}
          <div className="mt-20 mb-5 space-y-3">
            <hr />
            <div className="text-center text-sm">
              2023 © All rights reserved |InCorp Hr Web App. | Designed and
              Developed by the InCorp Team.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployerProfile;
