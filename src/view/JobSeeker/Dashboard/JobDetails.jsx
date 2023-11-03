import React, { useState } from "react";
import { useSelector } from "react-redux";
import SideBar from "./component/SideBar";
import Navbar from "./component/Navbar";
import { TextInput } from "../../../components/reusables/TextInput";
import { CustomButton } from "../../../components/buttons/CustomButton";
import { ReactComponent as CompanyIcon } from "../../../assets/svg/company-icon.svg";
import JobDescription from "./component/JobDescription";

const JobDetails = () => {
  const userData = useSelector((state) => state?.auth?.data);
  const [selectedMenu, setSelectedMenu] = useState("Home");

  return (
    <>
      <div className="grid grid-cols-6">
        <div className="col-span-1">
          <SideBar
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
          />
        </div>
        <div className="col-span-5 h-screen bg-[#EFF6F5] overflow-scroll">
          <div>
            <Navbar title={selectedMenu} userData={userData} />
            <div className=" mx-5 mt 10 flex items-center gap-5">
              <TextInput name="job" placeHolder="Designer" />
              <TextInput name="location" placeHolder="Nigeria" />
              <CustomButton labelText={"Search"} />
            </div>
          </div>
          <div className="text-md mx-5 mt-10 font-medium">Job Details</div>
          <div className="grid grid-cols-2">
            <div className="mx-5 mt-5">
              <div className="flex gap-2 items-center">
                <div>
                  <CompanyIcon style={{ width: "150px", height: "150px" }} />
                </div>
                <div>
                  <div className="font-semibold text-lg">
                    Senior UX Designer
                  </div>
                  <div>
                    Kuda{" "}
                    <span className="text-xs p-1 bg-green-500 rounded-sm text-white">
                      Full Time
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-gray-600">
                <div className="text-md text-black font-medium">
                  Job Description
                </div>
                <div className=" mt-5">
                  Velstar is a Shopify Plus agency, and we partner with brands
                  to help them grow, we also do the same with our people!
                  <br /> <br />
                  Here at Velstar, we don't just make websites, we create
                  exceptional digital experiences that consumers love. Our team
                  of designers, developers, strategists, and creators work
                  together to push brands to the next level. From Platform
                  Migration, User Experience & User Interface Design, to Digital
                  Marketing, we have a proven track record in delivering
                  outstanding eCommerce solutions and driving sales for our
                  clients. <br /> <br />
                  The role will involve translating project specifications into
                  clean, test-driven, easily maintainable code. You will work
                  with the Project and Development teams as well as with the
                  Technical Director, adhering closely to project plans and
                  delivering work that meets functional & non-functional
                  requirements. You will have the opportunity to create new,
                  innovative, secure and scalable features for our clients on
                  the Shopify platform <br /> <br />
                  Want to work with us? You're in good company!
                </div>
                <div className="text-md text-black font-medium my-5">
                  Requirements
                </div>
                <div>
                  <ul className="list-disc ml-5">
                    <li>
                      Great troubleshooting and analytical skills combined with
                      the desire to tackle challenges head-on
                    </li>
                    <li>
                      3+ years of experience in back-end development working
                      either with multiple smaller projects simultaneously or
                      large-scale applications
                    </li>
                    <li>
                      Experience with HTML, JavaScript, CSS, PHP, Symphony
                      and/or Laravel Working regularly with APIs and Web
                      Services (REST, GrapthQL, SOAP, etc)
                    </li>
                    <li>
                      Have experience/awareness in Agile application
                      development, commercial off-the-shelf software,
                      middleware, servers and storage, and database management.
                    </li>
                    <li>
                      Familiarity with version control and project management
                      systems (e.g., Github, Jira)
                    </li>
                    <li>
                      Great troubleshooting and analytical skills combined with
                      the desire to tackle challenges head-on
                    </li>
                    <li>
                      Ambitious and hungry to grow your career in a fast-growing
                      agency
                    </li>
                  </ul>
                </div>
                <div className="text-md text-black font-medium my-5">
                  Desirable
                </div>
                <div>
                  <ul className="list-disc ml-5">
                    <li>
                      Working knowledge of eCommerce platforms, ideally Shopify
                      but also others e.g. Magento, WooCommerce, Visualsoft to
                      enable seamless migrations.
                    </li>
                    <li>Working knowledge of payment gateways</li>
                    <li>API platform experience / Building restful APIs</li>
                  </ul>
                </div>
                <div className="text-md text-black font-medium my-5">
                  Benefits
                </div>
                <div>
                  <ul className="list-disc ml-5">
                    <li>
                      Early finish on Fridays for our end of week catch up (4:30
                      finish, and drink of your choice from the bar)
                    </li>
                    <li>
                      28 days holiday (including bank holidays) rising by 1 day
                      per year PLUS an additional day off on your birthday
                    </li>
                    <li>Generous annual bonus.</li>
                    <li>
                      Healthcare package Paid community days to volunteer for a
                      charity of your choice
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd half */}
            <div className="mx-5 mt-10">
              <JobDescription />
            </div>
          </div>

          <div className="mt-20 mb-5 space-y-3">
            <hr />

            <div className="text-center text-sm">
              2023 © All rights reserved |InCorp Hr Web App. | Designed and
              Developed by the InCorp Team.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
