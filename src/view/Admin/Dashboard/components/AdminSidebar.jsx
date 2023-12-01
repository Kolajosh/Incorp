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

const AdminSidebar = ({ selectedMenu, setSelectedMenu }) => {
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
              navigate("/dashboard/admin");
            }}
            className={`flex cursor-pointer items-center gap-3 ${
              window?.location?.pathname === "/dashboard/admin" &&
              "text-[#1ACAA6] bg-white p-2 rounded-xl"
            }`}
          >
            <Home
              style={{
                fill:
                  window?.location?.pathname === "/dashboard/admin"
                    ? "#1ACAA6"
                    : "#FFFFFF", // Set the fill color based on the selected state
                width: "20px", // Set the width and height of the SVG
                height: "20px",
              }}
            />
            Home
          </div>
          <div
            onClick={() => {
              setSelectedMenu("Profiles");
              navigate("/dashboard/admin/profile");
            }}
            className={`flex cursor-pointer items-center gap-3 ${
              window?.location?.pathname === "/dashboard/admin/profile" &&
              "text-[#1ACAA6] bg-white p-2 rounded-xl"
            }`}
          >
            <Profile
              style={{
                fill:
                  window?.location?.pathname === "/dashboard/admin/profile"
                    ? "#1ACAA6"
                    : "#FFFFFF", // Set the fill color based on the selected state
                width: "20px", // Set the width and height of the SVG
                height: "20px",
              }}
            />
            Company Profiles
          </div>
          <div
            onClick={() => {
              setSelectedMenu("Users");
              navigate("/dashboard/admin/users");
            }}
            className={`flex cursor-pointer items-center gap-3 ${
              window.location.pathname === "/dashboard/admin/users" &&
              "text-[#1ACAA6] bg-white p-2 rounded-xl"
            }`}
          >
            <App
              style={{
                fill:
                  window.location.pathname === "/dashboard/admin/users"
                    ? "#1ACAA6"
                    : "#FFFFFF", // Set the fill color based on the selected state
                width: "20px", // Set the width and height of the SVG
                height: "20px",
              }}
            />
            Users
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
            onClick={() => {
              setSelectedMenu("Overview");
              navigate("/dashboard/admin/overview");
            }}
            className={`flex cursor-pointer items-center gap-3 ${
              window.location.pathname === "/dashboard/admin/overview" &&
              "text-[#1ACAA6] bg-white p-2 rounded-xl"
            }`}
          >
            <Overview
              style={{
                stroke:
                  window.location.pathname === "/dashboard/admin/overview"
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

export default AdminSidebar;
