import React from "react";
import { ReactComponent as Logo } from "../../../assets/svg/incorpLogo.svg";
import { ReactComponent as Test } from "../../../assets/svg/test.svg";
import { ReactComponent as CV } from "../../../assets/svg/cv.svg";
import { ReactComponent as Technical } from "../../../assets/svg/technical.svg";
import { ReactComponent as Interview } from "../../../assets/svg/interview.svg";
import { ReactComponent as Create } from "../../../assets/svg/createAcc.svg";
import { ReactComponent as Profile } from "../../../assets/svg/profile.svg";
import { ReactComponent as Job } from "../../../assets/svg/job.svg";
import { ReactComponent as Flow } from "../../../assets/svg/flowarrowbold.svg";
import navblob from "../../../assets/img/navblob.png";
import hero from "../../../assets/img/hero1.png";
import SearchInput from "../../../components/reusables/SearchInput";
import img1 from "../../../assets/img/img1.png";
import img2 from "../../../assets/img/1.png";
import img3 from "../../../assets/img/2.png";
import img4 from "../../../assets/img/3.png";
import trusted from "../../../assets/img/trustedCompanies.png";
import Footer from "./component/Footer";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative">
        <div className="flex relative justify-between">
          <div className="ml-10">
            <Logo style={{ width: "100px" }} />
          </div>
          <div className="relative">
            <img className="h-[75vh] object-contain" src={navblob} alt="nav" />
            <div className="absolute w-full mt-5 flex items-center justify-evenly top-0 right-0">
              <div className="cursor-pointer">Home</div>
              <div className="cursor-pointer">Categories</div>
              <div className="cursor-pointer">About Us</div>
              <div className="cursor-pointer">Contact</div>
              <div
                onClick={() => navigate("/register/jobseeker")}
                className="cursor-pointer py-4 px-5 font-bold text-[#1ACAA6] bg-white rounded-lg"
              >
                Register
              </div>
              <div
                onClick={() => navigate("/login")}
                className="cursor-pointer py-4 px-5 font-bold text-[#1ACAA6] bg-white rounded-lg"
              >
                Login
              </div>
            </div>
            <div className="absolute top-24 left-72">
              <img className="h-[90vh] object-contain" src={hero} alt="nav" />
            </div>
          </div>
        </div>
        <div className="ml-10 absolute -bottom-5 space-y-5">
          <div className="text-4xl mb-5 font-bold">Search, Find & Apply</div>
          <div className="text-md ">
            Search for jobs based on your skills and expertise, apply within
            your <br />
            experience level to have high chances of being recruited
          </div>
          <div className="">
            <SearchInput />
          </div>
        </div>
      </div>
      <div className="mt-60 mb-10 mx-20">
        <div className="flex justify-evenly">
          <div
            className="p-5"
            style={{
              borderRadius: "10px",
              background: "#FFF",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <CV style={{ width: "100px", height: "120px" }} />
            <div className="text-center font-bold">CV Review</div>
          </div>
          <div
            className="p-5"
            style={{
              borderRadius: "10px",
              background: "#FFF",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Test style={{ width: "100px", height: "120px" }} />
            <div className="text-center font-bold">
              Personalized <br /> Tests
            </div>
          </div>
          <div
            className="p-5"
            style={{
              borderRadius: "10px",
              background: "#FFF",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Technical style={{ width: "100px", height: "120px" }} />
            <div className="text-center font-bold">
              Technical <br /> Tests
            </div>
          </div>
          <div
            className="p-5"
            style={{
              borderRadius: "10px",
              background: "#FFF",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Interview style={{ width: "100px", height: "120px" }} />
            <div className="text-center font-bold">Interview</div>
          </div>
        </div>
      </div>

      {/* section */}
      <div className="mx-10 mt-20 flex gap-10 items-center">
        <div>
          <img src={img1} alt="" className="" />
        </div>
        <div>
          <div className="text-3xl mb-5 font-bold">
            Find Million Of Jobs and Achieve <br /> Growth and Work Success.
          </div>
          <div className="text-md ">
            There thousands of job uploaded daily on different skills and level
            <br /> with different companies offering excellent salary range.
          </div>
        </div>
      </div>

      {/* section */}
      <div className="mt-20 mb-20 mx-10">
        <div
          className="px-10 py-5"
          style={{
            borderRadius: "10px",
            background: "#FFF",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">
              Explore by choosing a category
            </div>
            <div>
              <select
                className="px-10 py-3 bg-[#1ACAA6] text-white font-semibold"
                name=""
                id=""
              >
                <option value="Designer">Designer</option>
                <option value="Finance"></option>
              </select>
            </div>
          </div>

          <div className="flex my-10 justify-between">
            <div className="relative">
              <img src={img2} alt="" />
              <div className="absolute bottom-0 w-full p-5 text-center bg-[#182838] bg-opacity-[70%] text-white text-lg font-semibold rounded-b-xl">
                Brand Designer
              </div>
            </div>
            <div className="relative">
              <img src={img3} alt="" />
              <div className="absolute bottom-0 w-full p-5 text-center bg-[#182838] bg-opacity-[70%] text-white text-lg font-semibold rounded-b-xl">
                UI/UX Designer
              </div>
            </div>
            <div className="relative">
              <img src={img4} alt="" />
              <div className="absolute bottom-0 w-full p-5 text-center bg-[#182838] bg-opacity-[70%] text-white text-lg font-semibold rounded-b-xl">
                Graphics Designer
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section */}
      <div className="text-center my-20 space-y-10 mx-10">
        <div className="text-lg font-bold">How it Works?</div>
        <div className="flex justify-evenly items-center">
          <div className="flex flex-col items-center gap-5">
            <Create />
            <div className="font-semibold text-lg text-center">
              Create an Account
            </div>
          </div>
          <Flow />
          <div className="flex flex-col items-center gap-5">
            <Profile />
            <div className="font-semibold text-lg text-center">
              Complete your Profile
            </div>
          </div>
          <Flow />
          <div className="flex flex-col items-center gap-5">
            <Job />
            <div className="font-semibold text-lg text-center">
              Apply for a Job
            </div>
          </div>
        </div>
      </div>

      {/* section */}
      <div className="flex items-center justify-between mx-10 mb-20">
        <div>
          <div className="font-semibold text-xl">
            We are Trusted by 100+ Companies
          </div>
          <div className="font-normal text-md">
            We have 100+ companies which include high rank companies <br /> and
            leveling start-ups as recruiters.
          </div>
        </div>
        <div>
          <img src={trusted} alt="" />
        </div>
      </div>

      {/* section */}
      <div className="mb-20">
        <div className="text-center">
          <div className="font-semibold text-xl">Our Newsletter</div>
          <div className="font-normal text-md mt-5">
            Subscribe to our newsletter and get mails regarding job roles,
            application level, recruiters <br /> and events that are about to
            happen. This is an opportunity to always be in the loop.
          </div>
          <div className="flex justify-center mt-10">
            <SearchInput placeholder="Email" buttonText="Subscribe" />
          </div>
        </div>
      </div>

      {/* footer */}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
