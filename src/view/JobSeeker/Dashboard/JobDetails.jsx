import React, { useState } from "react";
import { useSelector } from "react-redux";
import SideBar from "./component/SideBar";
import Navbar from "./component/Navbar";
import { TextInput } from "../../../components/reusables/TextInput";
import { CustomButton } from "../../../components/buttons/CustomButton";
import { ReactComponent as CompanyIcon } from "../../../assets/svg/company-icon.svg";
import JobDescription from "./component/JobDescription";
import { useLocation } from "react-router-dom";

const JobDetails = () => {
  const userData = useSelector((state) => state?.auth?.data);
  const [selectedMenu, setSelectedMenu] = useState("Home");
  const location = useLocation();
  const {
    state: { jobDetails },
  } = location;
  console.log(location);
  console.log(jobDetails);

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
          <div className="text-md mx-5 mt-10 font-medium">Job Details</div>
          <div className="grid grid-cols-2">
            <div className="mx-5 mt-5">
              <div className="flex gap-2 items-center">
                <div>
                  <CompanyIcon style={{ width: "150px", height: "150px" }} />
                </div>
                <div>
                  <div className="font-semibold text-lg">
                    {jobDetails?.title}
                  </div>
                  <div>
                    {jobDetails?.companyName}{" "}
                    <span className="text-xs p-1 bg-green-500 rounded-sm text-white">
                      Full Time
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-gray-600">
                <div className="text-md text-black font-medium">
                  Job Description
                </div>
                <div className=" mt-5">{jobDetails?.description}</div>
                <div className="text-md text-black font-medium my-5">
                  Requirements
                </div>
                <div>{jobDetails?.requirements}</div>
                <div className="text-md text-black font-medium my-5">
                  Benefits
                </div>
                <div>
                  <ul className="list-disc ml-5">
                    {jobDetails?.jobBenefits?.map((x) => (
                      <li>{x}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd half */}
            <div className="mx-5 mt-10">
              <JobDescription jobDetails={jobDetails} />
            </div>
          </div>

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

export default JobDetails;
