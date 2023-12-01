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
import CenterModal from "../../../components/Modal/CenterModal";

const EmployerPostJob = () => {
  const userData = useSelector((state) => state?.auth?.data);
  const [selectedMenu, setSelectedMenu] = useState("Post");
  const [selectedNav, setSelectedNav] = useState("JobRole");
  const [modal, toggleModal] = useState(false);
  const [jobPayload, setJobPayload] = useState("");
  const [newModal, toggleNewModal] = useState(true);

  const [selectedTests, setSelectedTests] = useState([]);
  const [selectedTestTypes, setSelectedTestTypes] = useState([]);
  const [newTest, setNewTest] = useState("");
  const [newTestType, setNewTestType] = useState("");

  const addTest = () => {
    console.log("Adding test:", newTestType);
    if (newTestType.trim() !== "") {
      setSelectedTests((prevTests) => [
        ...prevTests,
        `Test ${prevTests.length + 1}`,
      ]);
      setSelectedTestTypes((prevTestTypes) => [...prevTestTypes, newTestType]);
      setNewTestType("");
    }
    console.log("Selected Tests:", selectedTests);
    console.log("Selected Test Types:", selectedTestTypes);
  };

  const removeTest = (index) => {
    setSelectedTests((prevTests) => [
      ...prevTests.slice(0, index),
      ...prevTests.slice(index + 1),
    ]);
    setSelectedTestTypes((prevTestTypes) => [
      ...prevTestTypes.slice(0, index),
      ...prevTestTypes.slice(index + 1),
    ]);
  };

  const moveTestUp = (index) => {
    if (index > 0) {
      const updatedTests = [...selectedTests];
      [updatedTests[index - 1], updatedTests[index]] = [
        updatedTests[index],
        updatedTests[index - 1],
      ];
      setSelectedTests(updatedTests);

      const updatedTestTypes = [...selectedTestTypes];
      [updatedTestTypes[index - 1], updatedTestTypes[index]] = [
        updatedTestTypes[index],
        updatedTestTypes[index - 1],
      ];
      setSelectedTestTypes(updatedTestTypes);
    }
  };

  const moveTestDown = (index) => {
    if (index < selectedTests.length - 1) {
      const updatedTests = [...selectedTests];
      [updatedTests[index], updatedTests[index + 1]] = [
        updatedTests[index + 1],
        updatedTests[index],
      ];
      setSelectedTests(updatedTests);

      const updatedTestTypes = [...selectedTestTypes];
      [updatedTestTypes[index], updatedTestTypes[index + 1]] = [
        updatedTestTypes[index + 1],
        updatedTestTypes[index],
      ];
      setSelectedTestTypes(updatedTestTypes);
    }
  };

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
            <div className="mx-5 mt-10 flex items-center gap-5">
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

      {newModal && (
        <CenterModal title="Post Job" handleClose={() => toggleNewModal(false)}>
          <div className="p-5 border rounded-md">
            <div className="font-semibold text-lg mb-3">
              Assessment Placement
            </div>
            <div className="mb-3">
              Arrange tests in regards to the company’s requirement and
              policies.
            </div>
            <ul className="mt-5 space-y-3">
              <li className="list-disc ml-5">CV Scanning</li>
              {selectedTestTypes.map((test, index) => (
                <li
                  key={index}
                  className="list-disc ml-5 flex items-center space-x-2"
                >
                  <span>{test}</span>
                  {/* <span>Test Type: {selectedTestTypes[index]}</span> */}
                  <button
                    onClick={() => removeTest(index)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                  <button onClick={() => moveTestUp(index)}>Move Up</button>
                  <button onClick={() => moveTestDown(index)}>Move Down</button>
                </li>
              ))}
              <li className="flex items-center space-x-2">
                <select
                  value={newTestType}
                  onChange={(e) => setNewTestType(e.target.value)}
                  className="border px-2 py-1 rounded-md"
                >
                  <option value="">Select Test Type</option>
                  <option value="Personality">Personality</option>
                  <option value="Technical">Technical</option>
                </select>
                <button
                  onClick={() => addTest()}
                  className="bg-green-500 text-white px-2 py-1 rounded-md"
                >
                  Add Test
                </button>
              </li>
              <li className="list-disc ml-5">Interview</li>
            </ul>
            <div>
              <button
                onClick={() => toggleNewModal(false)}
                className="bg-green-500 text-white px-2 py-4 mt-5 rounded-md"
              >
                Apply Changes
              </button>
            </div>
          </div>
        </CenterModal>
      )}
    </>
  );
};

export default EmployerPostJob;
