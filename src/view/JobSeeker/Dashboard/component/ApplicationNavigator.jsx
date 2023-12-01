import React from "react";
import { ReactComponent as All } from "../../../../assets/svg/all.svg";
import { ReactComponent as Cvscan } from "../../../../assets/svg/cvscan.svg";
import { ReactComponent as Persona } from "../../../../assets/svg/personatest.svg";
import { ReactComponent as Ttest } from "../../../../assets/svg/ttest.svg";
import { ReactComponent as Inter } from "../../../../assets/svg/interview1.svg";

const ApplicationNavigator = ({ selectedNav, setSelectedNav }) => {
  return (
    <>
      <div className="mt-5">
        <div className="flex border-b">
          <div
            onClick={() => setSelectedNav("All")}
            className={`flex cursor-pointer px-5 gap-2 items-center pb-3 border-b ${
              selectedNav === "All" && "text-[#1ACAA6] border-b-[#1ACAA6]"
            }`}
          >
            <All
              style={{
                fill: selectedNav === "All" ? "#1ACAA6" : "#00000080", // Set the fill color based on the selected state
                width: "20px", // Set the width and height of the SVG
                height: "20px",
              }}
            />
            All
          </div>
          <div
            onClick={() => setSelectedNav("CvScan")}
            className={`flex cursor-pointer px-5 gap-2 items-center pb-3 border-b ${
              selectedNav === "CvScan" && "text-[#1ACAA6] border-b-[#1ACAA6]"
            }`}
          >
            <Cvscan
              style={{
                stroke: selectedNav === "CvScan" ? "#1ACAA6" : "#00000080", // Set the fill color based on the selected state
                width: "20px", // Set the width and height of the SVG
                height: "20px",
              }}
            />
            CV Scan
          </div>
          <div
            onClick={() => setSelectedNav("PersonalityTest")}
            className={`flex cursor-pointer px-5 gap-2 items-center pb-3 border-b ${
              selectedNav === "PersonalityTest" &&
              "text-[#1ACAA6] border-b-[#1ACAA6]"
            }`}
          >
            <Persona
              style={{
                fill:
                  selectedNav === "PersonalityTest" ? "#1ACAA6" : "#00000080", // Set the fill color based on the selected state
                width: "20px", // Set the width and height of the SVG
                height: "20px",
              }}
            />
            Personality Test
          </div>
          <div
            onClick={() => setSelectedNav("TechTest")}
            className={`flex cursor-pointer px-5 gap-2 items-center pb-3 border-b ${
              selectedNav === "TechTest" && "text-[#1ACAA6] border-b-[#1ACAA6]"
            }`}
          >
            <Ttest
              style={{
                stroke: selectedNav === "TechTest" ? "#1ACAA6" : "#00000080", // Set the fill color based on the selected state
                width: "20px", // Set the width and height of the SVG
                height: "20px",
              }}
            />
            Technical Test
          </div>
          <div
            onClick={() => setSelectedNav("Interview")}
            className={`flex cursor-pointer px-5 gap-2 items-center pb-3 border-b ${
              selectedNav === "Interview" && "text-[#1ACAA6] border-b-[#1ACAA6]"
            }`}
          >
            <Inter
              style={{
                stroke: selectedNav === "Interview" ? "#1ACAA6" : "#00000080", // Set the fill color based on the selected state
                width: "20px", // Set the width and height of the SVG
                height: "20px",
              }}
            />
            Interview
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationNavigator;
