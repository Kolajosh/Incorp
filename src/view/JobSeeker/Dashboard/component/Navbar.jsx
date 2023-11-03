import React from "react";
import { ReactComponent as Bell } from "../../../../assets/svg/bell-icon.svg";

const Navbar = ({ title, userData }) => {
  const { firstName, lastName } = userData;
  return (
    <>
      <div className="px-5 py-5 flex justify-between items-center">
        <div>{title}</div>
        <div className="flex items-center gap-5">
          <div>
            <Bell />
          </div>
          {/* <div>
            <div className=" bg-gray-500 rounded-full">A</div>
          </div> */}
          <div>
            {firstName} {lastName}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
