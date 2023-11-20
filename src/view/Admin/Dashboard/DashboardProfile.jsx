import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AdminSidebar from "./components/AdminSidebar";
import Navbar from "../../JobSeeker/Dashboard/component/Navbar";
import DashboardHome from "./components/DashboardHome";
import { ReactComponent as JobSuit } from "../../../assets/svg/doublemark.svg";
import { ReactComponent as Book } from "../../../assets/svg/loading.svg";
import { ReactComponent as Locay } from "../../../assets/svg/fluent_location-48-regular.svg";
import Canva from "../../../assets/img/Canva.png";
import useAdminRequests from "./components/hooks/useAdminRequests";
import PageLoader from "../../../components/PageLoader";

const DashboardProfile = () => {
  const userData = useSelector((state) => state?.auth?.data);
  const { firstName, lastName } = userData;
  const [selectedMenu, setSelectedMenu] = useState("Profile");
  const { getAllUnverifiedUsers, unverifiedUsers, verifyUser, loading } =
    useAdminRequests();

  useEffect(() => {
    getAllUnverifiedUsers();
  }, []);

  console.log(unverifiedUsers);

  const verifyRecruiter = (payloadData) => {
    verifyUser(payloadData);
  };

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
            <div className="mt-5 flex justify-between items-center">
              <div className="p-5 flex justify-between items-center w-5/12 rounded-lg bg-[#0A6251]">
                <div>
                  <div className="text-lg text-white font-bold">598</div>
                  <div className="text-sm text-white">Approved Profiles</div>
                </div>
                <div>
                  <JobSuit />
                </div>
              </div>
              <div className="p-5 flex justify-between items-center w-5/12 rounded-lg bg-[#1ACAA6]">
                <div>
                  <div className="text-lg text-white font-bold">
                    {unverifiedUsers?.length}
                  </div>
                  <div className="text-sm text-white">Pending Profiles</div>
                </div>
                <div>
                  <Book />
                </div>
              </div>
            </div>

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
                    <th className="py-3 pl-3 text-left">Companies</th>
                    <th className="py-3 text-center">Status</th>
                    <th className="py-3 text-center">Action</th>
                  </tr>
                </thead>
                {/* ... rest of the table body */}
                <tbody className="">
                  {unverifiedUsers?.map((x, index) => (
                    <tr key={index} className="my-3">
                      <td className="py-3">
                        <div className="ml-3 font-semibold">
                          {x?.companyAddress}
                        </div>
                      </td>
                      <td className="text-center py-3">
                        <div>{!x?.isVerified ? "Pending" : "Approved"}</div>
                      </td>
                      <td className="text-center py-3">
                        <div>
                          {!x?.isVerified && (
                            <button
                              onClick={() => verifyRecruiter(x?.email)}
                              className="px-4 py-2 bg-[#1ACAA6] text-[#fff] rounded-lg"
                            >
                              Approve
                            </button>
                          )}
                          <button className="px-4 py-2 ml-3 bg-red-500 text-[#fff] rounded-lg">
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

export default DashboardProfile;
