import React, { useState } from "react";
import { useSelector } from "react-redux";
import SideBar from "./component/SideBar";
import Navbar from "./component/Navbar";
import { TextInput } from "../../../components/reusables/TextInput";
import { CustomButton } from "../../../components/buttons/CustomButton";
import { ReactComponent as CompanyIcon } from "../../../assets/svg/company-icon.svg";
import ApplicationNavigator from "./component/ApplicationNavigator";
import TableData from "./component/JobApplication/TableData";
import useJobseekerRequests from "./hooks/useJobseekerRequests";
import { useEffect } from "react";
import CvScan from "./component/JobApplication/CvScan";
import PersonalityTests from "./component/JobApplication/PersonalityTests";
import TechnicalTests from "./component/JobApplication/TechnicalTests";

const JobApplication = () => {
  const userData = useSelector((state) => state?.auth?.data);
  // const appliedJobs = JSON.parse(userData?.jobs);
  const [selectedMenu, setSelectedMenu] = useState("Application");
  const [selectedNav, setSelectedNav] = useState("All");
  const { getAppliedJobs, appliedJobs } = useJobseekerRequests();

  useEffect(() => {
    getAppliedJobs();
  }, []);

  console.log(appliedJobs);

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
          </div>

          <div>
            <ApplicationNavigator
              selectedNav={selectedNav}
              setSelectedNav={setSelectedNav}
            />
          </div>

          <div>
            {selectedNav === "All" && <TableData appliedJobs={appliedJobs} />}
            {selectedNav === "CvScan" && <CvScan appliedJobs={appliedJobs} />}
            {selectedNav === "PersonalityTest" && (
              <PersonalityTests appliedJobs={appliedJobs} />
            )}
            {selectedNav === "TechTest" && (
              <TechnicalTests appliedJobs={appliedJobs} />
            )}
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
