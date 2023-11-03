import React, { useState } from "react";
import SideBar from "./component/SideBar";
import Navbar from "./component/Navbar";
import JobHome from "./component/JobHome";
import { useSelector } from "react-redux";

const JobSeekerDashboard = () => {
  const userData = useSelector((state) => state?.auth?.data);
  const [selectedMenu, setSelectedMenu] = useState("Home");

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
          </div>
          <div>
            <JobHome />
          </div>
        </div>
      </div>
    </>
  );
};

export default JobSeekerDashboard;
