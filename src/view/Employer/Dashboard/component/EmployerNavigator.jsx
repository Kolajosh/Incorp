import React from "react";
import { ReactComponent as Profile } from "../../../../assets/svg/smallprofile.svg";
import { ReactComponent as Personnal } from "../../../../assets/svg/personnal.svg";
import { ReactComponent as Globe } from "../../../../assets/svg/globe.svg";
import { ReactComponent as Settings } from "../../../../assets/svg/smallsettings.svg";

const EmployerNavigator = ({ selectedNav, setSelectedNav }) => {
  return (
    <>
      <div className="mt-5">
        <div className="flex border-b">
          <div
            onClick={() => setSelectedNav("Profile")}
            className={`flex cursor-pointer px-5 gap-2 items-center pb-3 border-b ${
              selectedNav === "Profile" && "text-[#1ACAA6] border-b-[#1ACAA6]"
            }`}
          >
            <Profile
              style={{
                fill: selectedNav === "Profile" ? "#1ACAA6" : "#00000080", // Set the fill color based on the selected state
                width: "20px", // Set the width and height of the SVG
                height: "20px",
              }}
            />
            Company's Info
          </div>
          <div
            onClick={() => setSelectedNav("Personal")}
            className={`flex cursor-pointer px-5 gap-2 items-center pb-3 border-b ${
              selectedNav === "Personal" && "text-[#1ACAA6] border-b-[#1ACAA6]"
            }`}
          >
            <Personnal
              style={{
                fill: selectedNav === "Personal" ? "#1ACAA6" : "#00000080", // Set the fill color based on the selected state
                width: "20px", // Set the width and height of the SVG
                height: "20px",
              }}
            />
            Founding Info
          </div>
          <div
            onClick={() => setSelectedNav("Social")}
            className={`flex cursor-pointer px-5 gap-2 items-center pb-3 border-b ${
              selectedNav === "Social" && "text-[#1ACAA6] border-b-[#1ACAA6]"
            }`}
          >
            <Globe
              style={{
                fill: selectedNav === "Social" ? "#1ACAA6" : "#00000080", // Set the fill color based on the selected state
                width: "20px", // Set the width and height of the SVG
                height: "20px",
              }}
            />
            Social Links
          </div>
          <div
            onClick={() => setSelectedNav("Settings")}
            className={`flex cursor-pointer px-5 gap-2 items-center pb-3 border-b ${
              selectedNav === "Settings" && "text-[#1ACAA6] border-b-[#1ACAA6]"
            }`}
          >
            <Settings
              style={{
                stroke: selectedNav === "Settings" ? "#1ACAA6" : "#00000080", // Set the fill color based on the selected state
                width: "20px", // Set the width and height of the SVG
                height: "20px",
              }}
            />
            Account Settings
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployerNavigator;
