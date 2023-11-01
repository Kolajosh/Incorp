import React from "react";
import { TextInput } from "../../../../components/reusables/TextInput";
import { CustomButton } from "../../../../components/buttons/CustomButton";
import FilterComponent from "./FilterComponent";
import JobCards from "./JobCards";

const JobHome = () => {
  return (
    <>
      <div className="px-5">
        {/* search bar */}
        <div className="flex items-center gap-5">
          <TextInput name="job" placeHolder="Designer" />
          <TextInput name="location" placeHolder="Nigeria" />
          <CustomButton labelText={"Search"} />
        </div>

        <div className="mt-5 grid gap-5 grid-cols-4">
          <div className="col-span-1">
            <FilterComponent />
          </div>
          <div className="col-span-3">
            <JobCards />
          </div>
        </div>
      </div>
    </>
  );
};

export default JobHome;
