import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AdminSidebar from "./components/AdminSidebar";
import Navbar from "../../JobSeeker/Dashboard/component/Navbar";
import DashboardHome from "./components/DashboardHome";
import Canva from "../../../assets/img/Canva.png";
import useAdminRequests from "./components/hooks/useAdminRequests";
import PageLoader from "../../../components/PageLoader";

const AdminJobs = () => {
  const userData = useSelector((state) => state?.auth?.data);
  const { firstName, lastName } = userData;
  const [selectedMenu, setSelectedMenu] = useState("Users");
  const { loading, getAllUsers, allUsers, deleteUser } = useAdminRequests();

  useEffect(() => {
    getAllUsers();
  }, []);

  console.log(allUsers);

  return (
    <>
      {loading && <PageLoader />}
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
                    <th className="py-3 pl-3 text-left">Users</th>
                    <th className="py-3 pl-3 text-left">Role</th>
                    <th className="py-3 text-center">Status</th>
                    <th className="py-3 text-center">Action</th>
                  </tr>
                </thead>
                {/* ... rest of the table body */}
                <tbody className="">
                  {allUsers?.map((x, index) => (
                    <tr className="my-3">
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <div>
                            <div className="font-semibold">
                              {x?.role === "Recruiter"
                                ? x?.companyAddress
                                : x?.firstName + " " + x?.lastName}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-left py-3">
                        <div>{x?.role}</div>
                      </td>
                      <td className="text-center py-3">
                        <div>
                          {!x?.isVerified ? "Not Approved" : "Approved"}
                        </div>
                      </td>
                      <td className="text-center py-3">
                        <div>
                          <button className="px-4 py-2 bg-[#1ACAA6] mr-5 text-[#fff] rounded-lg">
                            View Details
                          </button>
                          <button
                            onClick={() => deleteUser(x?.email)}
                            className="px-4 py-2 bg-red-400 text-[#fff] rounded-lg"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
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
