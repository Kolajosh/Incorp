import React from "react";
import { ReactComponent as Locay } from "../../../../../assets/svg/fluent_location-48-regular.svg";
import Canva from "../../../../../assets/img/Canva.png";
import dayjs from "dayjs";

const TableData = ({ appliedJobs }) => {
  return (
    <div>
      <div className="m-5 flex items-center text-[#00000099] justify-between">
        <div className="">
          <div className="text-sm">Recently Applied</div>
        </div>
        <div className="mr-10">
          <div className="text-sm">View All</div>
        </div>
      </div>

      <div className="m-5">
        <table className="w-full">
          <thead className="text-sm font-semibold bg-[#00000014]">
            <tr className="">
              <th className="py-3 pl-3 text-left">Jobs</th>
              <th className="py-3 text-center">Date Applied</th>
              <th className="py-3 text-center">Stage</th>
              <th className="py-3 text-center">Action</th>
            </tr>
          </thead>
          {/* ... rest of the table body */}
          <tbody className="">
            {appliedJobs?.map((x, index) => (
              <tr className="my-3">
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <div>
                      <img src={Canva} alt="" />
                    </div>
                    <div>
                      <div className="font-semibold">{x?.Title}</div>
                      <div className="flex items-center">
                        <span>
                          <Locay />
                        </span>
                        <span>
                          Ikeja NGN <span>{x?.MaxSalary}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-center py-3">
                  <div>
                    {dayjs(x?.DateApplied).format("DD MMM, YYYY h:mm A")}
                  </div>
                </td>
                <td className="text-center py-3">
                  <div>{x?.CurrentStageInJob}</div>
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
  );
};

export default TableData;
