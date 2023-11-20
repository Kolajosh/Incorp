import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AdminSidebar from "./components/AdminSidebar";
import Navbar from "../../JobSeeker/Dashboard/component/Navbar";
import DashboardHome from "./components/DashboardHome";
import useAdminRequests from "./components/hooks/useAdminRequests";

const AdminDashboard = () => {
  const userData = useSelector((state) => state?.auth?.data);
  const [selectedMenu, setSelectedMenu] = useState("Home");
  const { getAllUsers, getAllUnverifiedUsers } = useAdminRequests();

  useEffect(() => {
    getAllUnverifiedUsers();
  }, []);

  return (
    <>
      <div className="grid grid-cols-6">
        <div className="col-span-1">
          <AdminSidebar
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
          />
        </div>
        <div className="col-span-5 h-screen bg-[#EFF6F5] overflow-scroll">
          <div>
            <Navbar title={selectedMenu} userData={userData} />
          </div>
          <div>{selectedMenu === "Home" && <DashboardHome />}</div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
