import React from "react";
import { ReactComponent as Dashboard } from "../../../../assets/svg/dashboard-icon.svg";
import { ReactComponent as Home } from "../../../../assets/svg/home-icon.svg";
import { ReactComponent as Profile } from "../../../../assets/svg/profile-icon.svg";
import { ReactComponent as App } from "../../../../assets/svg/application-icon.svg";
import { ReactComponent as Message } from "../../../../assets/svg/message-icon.svg";
import { ReactComponent as Overview } from "../../../../assets/svg/overview-icon.svg";
import { ReactComponent as Logout } from "../../../../assets/svg/logout-icon.svg";

const SideBar = ({ selectedMenu, setSelectedMenu }) => {
  return (
    <div className="bg-[#0A6251] w-full h-screen text-white py-5 px-5 flex flex-col justify-between">
      <div>
        <div className="text-xl font-semibold flex items-center gap-3">
          <Dashboard />
          Dashboard
        </div>
        <div className="mt-5 space-y-5 text-md">
          <div
            onClick={() => setSelectedMenu("Home")}
            className={`flex cursor-pointer items-center gap-3 ${
              selectedMenu === "Home" &&
              "text-[#1ACAA6] bg-white p-2 rounded-xl"
            }`}
          >
            <Home
              style={{
                fill: selectedMenu === "Home" ? "#1ACAA6" : "#FFFFFF", // Set the fill color based on the selected state
                width: "20px", // Set the width and height of the SVG
                height: "20px",
              }}
            />
            Home
          </div>
          <div
            onClick={() => setSelectedMenu("Profile")}
            className={`flex cursor-pointer items-center gap-3 ${
              selectedMenu === "Profile" &&
              "text-[#1ACAA6] bg-white p-2 rounded-xl"
            }`}
          >
            <Profile
              style={{
                fill: selectedMenu === "Profile" ? "#1ACAA6" : "#FFFFFF", // Set the fill color based on the selected state
                width: "20px", // Set the width and height of the SVG
                height: "20px",
              }}
            />
            Profile
          </div>
          <div
            onClick={() => setSelectedMenu("Application")}
            className={`flex cursor-pointer items-center gap-3 ${
              selectedMenu === "Application" &&
              "text-[#1ACAA6] bg-white p-2 rounded-xl"
            }`}
          >
            <App
              style={{
                fill: selectedMenu === "Application" ? "#1ACAA6" : "#FFFFFF", // Set the fill color based on the selected state
                width: "20px", // Set the width and height of the SVG
                height: "20px",
              }}
            />
            Application
          </div>
          <div
            onClick={() => setSelectedMenu("Messages")}
            className={`flex cursor-pointer items-center gap-3 ${
              selectedMenu === "Messages" &&
              "text-[#1ACAA6] bg-white p-2 rounded-xl"
            }`}
          >
            <Message
              style={{
                stroke: selectedMenu === "Messages" ? "#1ACAA6" : "#FFFFFF", // Set the fill color based on the selected state
                width: "20px", // Set the width and height of the SVG
                height: "20px",
              }}
            />
            Messages
          </div>
          <div
            onClick={() => setSelectedMenu("Overview")}
            className={`flex cursor-pointer items-center gap-3 ${
              selectedMenu === "Overview" &&
              "text-[#1ACAA6] bg-white p-2 rounded-xl"
            }`}
          >
            <Overview
              style={{
                stroke: selectedMenu === "Overview" ? "#1ACAA6" : "#FFFFFF", // Set the fill color based on the selected state
                width: "20px", // Set the width and height of the SVG
                height: "20px",
              }}
            />
            Overview
          </div>
        </div>
      </div>
      <div className="flex cursor-pointer items-center gap-3 mt-5 text-md">
        <Logout />
        Log Out
      </div>
    </div>
  );
};

export default SideBar;
