import React from "react";
import { ReactComponent as JobSuit } from "../../../../assets/svg/brief.svg";
import { ReactComponent as Book } from "../../../../assets/svg/bookmarks.svg";
import { ReactComponent as Locay } from "../../../../assets/svg/fluent_location-48-regular.svg";
import Canva from "../../../../assets/img/Canva.png";

const Overview = ({ userData }) => {
  const { firstName, lastName } = userData;
  return (
    <div className="m-5 w-[70vw]">
      <div className="text-lg font-medium text-[#0D3B4D]">
        Hello {firstName} {lastName}
        <br />
        <span className="text-sm text-black font-normal">
          Here is your activities and job applications
        </span>
      </div>

      <div className="mt-5 flex justify-between items-center">
        <div className="p-5 flex justify-between items-center w-5/12 rounded-lg bg-[#0A6251]">
          <div>
            <div className="text-lg text-white font-bold">598</div>
            <div className="text-sm text-white">Applied Jobs</div>
          </div>
          <div>
            <JobSuit />
          </div>
        </div>
        <div className="p-5 flex justify-between items-center w-5/12 rounded-lg bg-[#1ACAA6]">
          <div>
            <div className="text-lg text-white font-bold">59</div>
            <div className="text-sm text-white">Favorite Jobs</div>
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
              <th className="py-3 text-center">Date Applied</th>
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
                    <div className="font-semibold">Senior Product Designer</div>
                    <div className="flex items-center">
                      <span>
                        <Locay />
                      </span>
                      <span>Ikeja NGN 500K</span>
                    </div>
                  </div>
                </div>
              </td>
              <td className="text-center py-3">
                <div>Oct 20, 2023 19:20</div>
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
  );
};

export default Overview;
