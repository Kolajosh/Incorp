import React from "react";
import { ReactComponent as Dashboard } from "../../../../assets/svg/dashboard-icon.svg";
import { ReactComponent as Home } from "../../../../assets/svg/home-icon.svg";
import { ReactComponent as Profile } from "../../../../assets/svg/profile-icon.svg";
import { ReactComponent as App } from "../../../../assets/svg/application-icon.svg";
import { ReactComponent as Message } from "../../../../assets/svg/message-icon.svg";
import { ReactComponent as Overview } from "../../../../assets/svg/overview-icon.svg";
import { ReactComponent as Logout } from "../../../../assets/svg/logout-icon.svg";
import { useDispatch } from "react-redux";
import { logout } from "../../../../Redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const SideBar = ({ selectedMenu, setSelectedMenu }) => {
  const isBelowMd = useMediaQuery({ maxWidth: 768 }); // Set the max width for medium screens

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout);
    navigate("/login");
  };
  return (
    <div className="bg-[#0A6251] w-full h-screen text-white py-5 px-5 flex flex-col justify-between">
      <div>
        <div className="text-xl font-semibold flex items-center gap-3">
          <Dashboard />
          {isBelowMd ? null : "Dashboard"}
        </div>
        <div className="mt-5 space-y-5 text-md">
          <div
            onClick={() => {
              setSelectedMenu("Home");
              navigate("/dashboard/jobseeker");
            }}
            className={`flex cursor-pointer items-center gap-3 ${
              window?.location?.pathname === "/dashboard/jobseeker" &&
              "text-[#1ACAA6] bg-white p-2 rounded-xl"
            }`}
          >
            <Home
              style={{
                fill:
                  window?.location?.pathname === "/dashboard/jobseeker"
                    ? "#1ACAA6"
                    : "#FFFFFF", // Set the fill color based on the selected state
                width: "20px", // Set the width and height of the SVG
                height: "20px",
              }}
            />
            {isBelowMd ? null : "Home"}
          </div>
          <div
            onClick={() => {
              setSelectedMenu("Profile");
              navigate("/dashboard/jobseeker/profile");
            }}
            className={`flex cursor-pointer items-center gap-3 ${
              window?.location?.pathname === "/dashboard/jobseeker/profile" &&
              "text-[#1ACAA6] bg-white p-2 rounded-xl"
            }`}
          >
            <Profile
              style={{
                fill:
                  window?.location?.pathname === "/dashboard/jobseeker/profile"
                    ? "#1ACAA6"
                    : "#FFFFFF", // Set the fill color based on the selected state
                width: "20px", // Set the width and height of the SVG
                height: "20px",
              }}
            />
            {isBelowMd ? null : "Profile"}
          </div>
          <div
            onClick={() => {
              setSelectedMenu("Application");
              navigate("/dashboard/jobseeker/application");
            }}
            className={`flex cursor-pointer items-center gap-3 ${
              window.location.pathname === "/dashboard/jobseeker/application" &&
              "text-[#1ACAA6] bg-white p-2 rounded-xl"
            }`}
          >
            <App
              style={{
                fill:
                  window.location.pathname ===
                  "/dashboard/jobseeker/application"
                    ? "#1ACAA6"
                    : "#FFFFFF", // Set the fill color based on the selected state
                width: "20px", // Set the width and height of the SVG
                height: "20px",
              }}
            />
            {isBelowMd ? null : "Application"}{" "}
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
            {isBelowMd ? null : "Message"}
          </div>
          <div
            onClick={() => {
              setSelectedMenu("Overview");
              navigate("/dashboard/jobseeker/overview");
            }}
            className={`flex cursor-pointer items-center gap-3 ${
              window.location.pathname === "/dashboard/jobseeker/overview" &&
              "text-[#1ACAA6] bg-white p-2 rounded-xl"
            }`}
          >
            <Overview
              style={{
                stroke:
                  window.location.pathname === "/dashboard/jobseeker/overview"
                    ? "#1ACAA6"
                    : "#FFFFFF", // Set the fill color based on the selected state
                width: "20px", // Set the width and height of the SVG
                height: "20px",
              }}
            />
            {isBelowMd ? null : "Overview"}
          </div>
        </div>
      </div>
      <div
        onClick={() => handleLogout()}
        className="flex cursor-pointer items-center gap-3 mt-5 text-md"
      >
        <Logout />
        {isBelowMd ? null : "Log Out"}
      </div>
    </div>
  );
};

export default SideBar;
