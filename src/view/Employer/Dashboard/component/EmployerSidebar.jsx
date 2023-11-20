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

const EmployerSidebar = ({ selectedMenu, setSelectedMenu }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout);
    navigate("/login");
  };
  console.log(window?.location?.pathname);
  return (
    <div className="bg-[#0A6251] w-full h-screen text-white py-5 px-5 flex flex-col justify-between">
      <div>
        <div className="text-xl font-semibold flex items-center gap-3">
          <Dashboard />
          Dashboard
        </div>
        <div className="mt-5 space-y-5 text-md">
          <div
            onClick={() => {
              setSelectedMenu("Home");
              navigate("/dashboard/employer");
            }}
            className={`flex cursor-pointer items-center gap-3 ${
              window?.location?.pathname === "/dashboard/employer" &&
              "text-[#1ACAA6] bg-white p-2 rounded-xl"
            }`}
          >
            <Home
              style={{
                fill:
                  window?.location?.pathname === "/dashboard/employer"
                    ? "#1ACAA6"
                    : "#FFFFFF", // Set the fill color based on the selected state
                width: "20px", // Set the width and height of the SVG
                height: "20px",
              }}
            />
            Jobs
          </div>
          <div
            onClick={() => {
              setSelectedMenu("Profile");
              navigate("/dashboard/employer/profile");
            }}
            className={`flex cursor-pointer items-center gap-3 ${
              window?.location?.pathname === "/dashboard/employer/profile" &&
              "text-[#1ACAA6] bg-white p-2 rounded-xl"
            }`}
          >
            <Profile
              style={{
                fill:
                  window?.location?.pathname === "/dashboard/employer/profile"
                    ? "#1ACAA6"
                    : "#FFFFFF", // Set the fill color based on the selected state
                width: "20px", // Set the width and height of the SVG
                height: "20px",
              }}
            />
            Profile
          </div>
          <div
            onClick={() => {
              setSelectedMenu("Application");
              navigate("/dashboard/employer/application");
            }}
            className={`flex cursor-pointer items-center gap-3 ${
              window.location.pathname === "/dashboard/employer/application" &&
              "text-[#1ACAA6] bg-white p-2 rounded-xl"
            }`}
          >
            <App
              style={{
                fill:
                  window.location.pathname === "/dashboard/employer/application"
                    ? "#1ACAA6"
                    : "#FFFFFF", // Set the fill color based on the selected state
                width: "20px", // Set the width and height of the SVG
                height: "20px",
              }}
            />
            Application
          </div>
          <div
            onClick={() => {setSelectedMenu("Post")
            navigate("/dashboard/employer/post")
        }}
            className={`flex cursor-pointer items-center gap-3 ${
              selectedMenu === "Post" &&
              "text-[#1ACAA6] bg-white p-2 rounded-xl"
            }`}
          >
            <Message
              style={{
                stroke: selectedMenu === "Post" ? "#1ACAA6" : "#FFFFFF", // Set the fill color based on the selected state
                width: "20px", // Set the width and height of the SVG
                height: "20px",
              }}
            />
            Post a Job
          </div>
          <div
            onClick={() => {
              setSelectedMenu("Overview");
              navigate("/dashboard/employer/overview");
            }}
            className={`flex cursor-pointer items-center gap-3 ${
              window.location.pathname === "/dashboard/employer/overview" &&
              "text-[#1ACAA6] bg-white p-2 rounded-xl"
            }`}
          >
            <Overview
              style={{
                stroke:
                  window.location.pathname === "/dashboard/employer/overview"
                    ? "#1ACAA6"
                    : "#FFFFFF", // Set the fill color based on the selected state
                width: "20px", // Set the width and height of the SVG
                height: "20px",
              }}
            />
            Overview
          </div>
        </div>
      </div>
      <div
        onClick={() => handleLogout()}
        className="flex cursor-pointer items-center gap-3 mt-5 text-md"
      >
        <Logout />
        Log Out
      </div>
    </div>
  );
};

export default EmployerSidebar;
