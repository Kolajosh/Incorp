import React from "react";
import { ReactComponent as Job1 } from "../../../../assets/svg/job1.svg";
import { ReactComponent as Job2 } from "../../../../assets/svg/job2.svg";
import { ReactComponent as Job3 } from "../../../../assets/svg/job3.svg";
import { ReactComponent as Job4 } from "../../../../assets/svg/job4.svg";
import { ReactComponent as Job5 } from "../../../../assets/svg/job5.svg";
import { DashboardCard } from "./DashboardCard";

const DashboardHome = () => {
  return (
    <>
      <div className="m-5">
        <div className="flex gap-3 justify-between items-center">
          <DashboardCard icon={<Job1 />} title="All Jobs" value="400" />
          <DashboardCard icon={<Job2 />} title="Open Jobs" value="4520" />
          <DashboardCard icon={<Job3 />} title="Success" value="1000" />
          <DashboardCard icon={<Job4 />} title="Company" value="1000" />
          <DashboardCard icon={<Job5 />} title="User" value="1.2M" />
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
