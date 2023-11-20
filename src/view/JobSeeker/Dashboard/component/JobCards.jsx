import React from "react";
import { ReactComponent as CompanyIcon } from "../../../../assets/svg/company-icon.svg";
import { ReactComponent as Bookmark } from "../../../../assets/svg/fluent_bookmark-32-regular.svg";
import { ReactComponent as Locay } from "../../../../assets/svg/fluent_location-48-regular.svg";
import { ReactComponent as People } from "../../../../assets/svg/fluent_people-20-regular.svg";
import { jobCardDetails } from "./constants";
import { useNavigate } from "react-router-dom";

const JobCards = ({ jobs }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mb-8"></div>
      <div className="grid grid-cols-3 gap-5">
        {jobs?.map((x) => (
          <div
            onClick={() =>
              navigate(`/dashboard/jobseeker/job-details/${x?.id}`, {
                state: { jobDetails: x },
              })
            }
            className="bg-white cursor-pointer rounded-xl p-3"
          >
            <div className="flex items-center gap-5">
              {/* <div>
                <CompanyIcon />
              </div> */}
              <div>
                <div>{x?.title}</div>
                <div>Panda LTD</div>
              </div>
            </div>
            <div className="text-sm">{x?.description}</div>
            <div className="text-sm flex justify-between mt-5 items-center">
              <div className="flex items-center gap-3">
                <span>
                  <People />
                </span>
                <span>20</span>
              </div>
              <div className="flex items-center gap-3">
                <span>
                  <Locay />
                </span>
                <span>{x?.country}</span>
              </div>
              <div>
                <span>
                  <Bookmark />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default JobCards;
