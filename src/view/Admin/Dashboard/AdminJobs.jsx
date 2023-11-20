import React, { useState } from "react";
import { useSelector } from "react-redux";
import AdminSidebar from "./components/AdminSidebar";
import Navbar from "../../JobSeeker/Dashboard/component/Navbar";
import DashboardHome from "./components/DashboardHome";
import Canva from "../../../assets/img/Canva.png";

const AdminJobs = () => {
  const userData = useSelector((state) => state?.auth?.data);
  const { firstName, lastName } = userData;
  const [selectedMenu, setSelectedMenu] = useState("Home");

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
          <div className="m-5 w-[70vw]">
            <div className="mt-5 flex items-center text-[#00000099] justify-between">
              <div className="">
                <div className="text-sm">Recently Applied</div>
              </div>
              <div className="mr-10">
                <div className="text-sm">View All</div>
              </div>
            </div>

            <div className="mt-5">
              <table className="w-full">
                <thead className="text-sm font-semibold bg-[#00000014]">
                  <tr className="">
                    <th className="py-3 pl-3 text-left">Jobs</th>
                    <th className="py-3 text-center">Status</th>
                    <th className="py-3 text-center">Action</th>
                  </tr>
                </thead>
                {/* ... rest of the table body */}
                <tbody className="">
                  <tr className="my-3">
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <div>
                          <img src={Canva} alt="" />
                        </div>
                        <div>
                          <div className="font-semibold">Canva</div>
                        </div>
                      </div>
                    </td>
                    <td className="text-center py-3">
                      <div>Approved</div>
                    </td>
                    <td className="text-center py-3">
                      <div>
                        <button className="px-4 py-2 bg-[#1ACAA6] text-[#fff] rounded-lg">
                          View Details
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminJobs;
