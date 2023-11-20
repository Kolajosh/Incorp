import React, { useState } from "react";
import { ReactComponent as JobSuit } from "../../../assets/svg/doublemark.svg";
import { ReactComponent as Book } from "../../../assets/svg/loading.svg";
import { useSelector } from "react-redux";
import Canva from "../../../assets/img/Canva.png";
import EmployerSidebar from "./component/EmployerSidebar";
import Navbar from "../../JobSeeker/Dashboard/component/Navbar";

const EmployerDashboard = () => {
  const userData = useSelector((state) => state?.auth?.data);
  const [selectedMenu, setSelectedMenu] = useState("Home");

  const jobs = JSON?.parse(userData?.jobs);
  console.log(JSON?.parse(userData?.jobs));

  return (
    <>
      <div className="grid grid-cols-6">
        <div className="col-span-1">
          <EmployerSidebar
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
          />
        </div>
        <div className="col-span-5 h-screen bg-[#EFF6F5] overflow-scroll">
          <div>
            <Navbar title={selectedMenu} userData={userData} />
          </div>
          <div>
            <div className="m-5 w-[70vw]">
              <div className="mt-5 flex justify-between items-center">
                <div className="p-5 flex justify-between items-center w-5/12 rounded-lg bg-[#0A6251]">
                  <div>
                    <div className="text-lg text-white font-bold">
                      {jobs?.length}
                    </div>
                    <div className="text-sm text-white">Active Jobs</div>
                  </div>
                  <div>
                    <JobSuit />
                  </div>
                </div>
                <div className="p-5 flex justify-between items-center w-5/12 rounded-lg bg-[#1ACAA6]">
                  <div>
                    <div className="text-lg text-white font-bold">0</div>
                    <div className="text-sm text-white">Non-active Jobs</div>
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
                      <th className="py-3 pl-3 text-left">Jobs</th>
                      <th className="py-3 text-center">Status</th>
                      <th className="py-3 text-center">Action</th>
                    </tr>
                  </thead>
                  {/* ... rest of the table body */}
                  <tbody className="">
                    {jobs?.map((x, index) => (
                      <tr key={x?.Id} className="my-3">
                        <td className="py-3">
                          <div className="flex items-center gap-2">
                            {/* <div>
                              <img src={Canva} alt="" />
                            </div> */}
                            <div>
                              <div className="font-semibold">{x?.Title}</div>
                            </div>
                          </div>
                        </td>
                        <td className="text-center py-3">
                          <div>{x?.Status}</div>
                        </td>
                        <td className="text-center py-3">
                          <div>
                            <button className="px-4 py-2 bg-[#1ACAA6] text-[#fff] rounded-lg">
                              View Details
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
      </div>
    </>
  );
};

export default EmployerDashboard;
