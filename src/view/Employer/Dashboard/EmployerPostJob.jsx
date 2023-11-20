import React, { useState } from "react";
import { useSelector } from "react-redux";
import { TextInput } from "../../../components/reusables/TextInput";
import { CustomButton } from "../../../components/buttons/CustomButton";
import EmployerSidebar from "./component/EmployerSidebar";
import Navbar from "../../JobSeeker/Dashboard/component/Navbar";
import PostJobNav from "./component/PostJobNav";
import JobRole from "./component/PostJob/JobRole";
import JobDescription from "./component/PostJob/JobDescription";
import JobPersonality from "./component/PostJob/JobPersonality";
import { useFormik } from "formik";
import JobTechnical from "./component/PostJob/JobTechnical";

const EmployerPostJob = () => {
  const userData = useSelector((state) => state?.auth?.data);
  const [selectedMenu, setSelectedMenu] = useState("Post");
  const [selectedNav, setSelectedNav] = useState("JobRole");
  const [modal, toggleModal] = useState(false);
  const [jobPayload, setJobPayload] = useState("");

  console.log(jobPayload);

  const handleModal = () => {
    toggleModal(false);
  };

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
            <PostJobNav
              selectedNav={selectedNav}
              setSelectedNav={setSelectedNav}
              modal={modal}
            />
          </div>

          <div>
            {selectedNav === "JobRole" && (
              <JobRole
                setJobPayload={setJobPayload}
                setSelectedNav={setSelectedNav}
              />
            )}
            {selectedNav === "Description" && (
              <JobDescription
                modal={modal}
                toggleModal={toggleModal}
                handleModalClose={handleModal}
                setJobPayload={setJobPayload}
                setSelectedNav={setSelectedNav}
              />
            )}
            {selectedNav === "PTest" && (
              <JobPersonality
                setJobPayload={setJobPayload}
                setSelectedNav={setSelectedNav}
              />
            )}
            {selectedNav === "TTest" && (
              <JobTechnical
                setJobPayload={setJobPayload}
                setSelectedNav={setSelectedNav}
                jobPayload={jobPayload}
              />
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

export default EmployerPostJob;
