import React, { useState } from "react";
import { useSelector } from "react-redux";
import SideBar from "./component/SideBar";
import Navbar from "./component/Navbar";
import { TextInput } from "../../../components/reusables/TextInput";
import { CustomButton } from "../../../components/buttons/CustomButton";
import { ReactComponent as CompanyIcon } from "../../../assets/svg/company-icon.svg";
import ApplicationNavigator from "./component/ApplicationNavigator";
import TableData from "./component/JobApplication/TableData";

const JobApplication = () => {
  const userData = useSelector((state) => state?.auth?.data);
  const [selectedMenu, setSelectedMenu] = useState("Home");
  const [selectedNav, setSelectedNav] = useState("All");

  return (
    <>
      <div className="grid grid-cols-6">
        <div className="col-span-1">
          <SideBar
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
            <ApplicationNavigator
              selectedNav={selectedNav}
              setSelectedNav={setSelectedNav}
            />
          </div>

          <div>
            <TableData />
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

export default JobApplication;
