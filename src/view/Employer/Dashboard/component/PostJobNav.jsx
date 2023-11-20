import React from "react";
import { ReactComponent as Menu } from "../../../../assets/svg/menu.svg";
import { ReactComponent as Personnal } from "../../../../assets/svg/personnal.svg";
import { ReactComponent as CVScan } from "../../../../assets/svg/cvscan.svg";
import { ReactComponent as PTest } from "../../../../assets/svg/personatest.svg";
import { ReactComponent as TTest } from "../../../../assets/svg/ph_brain.svg";

const PostJobNav = ({ selectedNav, setSelectedNav, modal }) => {
  return (
    <>
      <div className="mt-5">
        <div className="flex border-b">
          <div
            onClick={() => setSelectedNav("JobRole")}
            className={`flex cursor-pointer px-5 gap-2 items-center pb-3 border-b ${
              selectedNav === "JobRole" && "text-[#1ACAA6] border-b-[#1ACAA6]"
            }`}
          >
            <Menu
              style={{
                fill: selectedNav === "JobRole" ? "#1ACAA6" : "#00000080", // Set the fill color based on the selected state
                width: "20px", // Set the width and height of the SVG
                height: "20px",
              }}
            />
            Job Role
          </div>
          <div
            onClick={() => setSelectedNav("Description")}
            className={`flex cursor-pointer px-5 gap-2 items-center pb-3 border-b ${
              selectedNav === "Description" &&
              "text-[#1ACAA6] border-b-[#1ACAA6]"
            }`}
          >
            <Menu
              style={{
                fill: selectedNav === "Description" ? "#1ACAA6" : "#00000080", // Set the fill color based on the selected state
                width: "20px", // Set the width and height of the SVG
                height: "20px",
              }}
            />
            Description
          </div>
          <div
            onClick={() => setSelectedNav("CVScan")}
            className={`flex cursor-pointer px-5 gap-2 items-center pb-3 border-b ${
              modal === true && "text-[#1ACAA6] border-b-[#1ACAA6]"
            }`}
          >
            <CVScan
              style={{
                stroke: modal === true ? "#1ACAA6" : "#00000080", // Set the fill color based on the selected state
                width: "20px", // Set the width and height of the SVG
                height: "20px",
              }}
            />
            CV Scan
          </div>
          <div
            onClick={() => setSelectedNav("PTest")}
            className={`flex cursor-pointer px-5 gap-2 items-center pb-3 border-b ${
              selectedNav === "PTest" && "text-[#1ACAA6] border-b-[#1ACAA6]"
            }`}
          >
            <PTest
              style={{
                stroke: selectedNav === "PTest" ? "#1ACAA6" : "#00000080", // Set the fill color based on the selected state
                width: "20px", // Set the width and height of the SVG
                height: "20px",
              }}
            />
            Personality Test
          </div>
          <div
            onClick={() => setSelectedNav("TTest")}
            className={`flex cursor-pointer px-5 gap-2 items-center pb-3 border-b ${
              selectedNav === "TTest" && "text-[#1ACAA6] border-b-[#1ACAA6]"
            }`}
          >
            <TTest
              style={{
                stroke: selectedNav === "TTest" ? "#1ACAA6" : "#00000080", // Set the fill color based on the selected state
                width: "20px", // Set the width and height of the SVG
                height: "20px",
              }}
            />
            Technical Test
          </div>
        </div>
      </div>
    </>
  );
};

export default PostJobNav;
