import React from "react";
import { ReactComponent as Logo } from "../../../../assets/svg/incorpLogo.svg";
import { ReactComponent as Fb } from "../../../../assets/svg/ri_facebook-fill.svg";
import { ReactComponent as Tw } from "../../../../assets/svg/ri_twitter-fill.svg";
import { ReactComponent as Ln } from "../../../../assets/svg/ri_linkedin-fill.svg";
import { ReactComponent as Ig } from "../../../../assets/svg/ri_instagram-line.svg";

const Footer = () => {
  return (
    <>
      <div className="bg-black py-20 text-white">
        <div className="mx-10 grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-5">
            <Logo />
            <div className="text-sm">
              We are an Hr and Recruitment Company offering cutting-edge
              solutions to the Companies, Personal Recruiters and Job Seekers.
              Our expertise includes reviewing Resumes, Creating Personalized
              and Technical tests that fits the job Positions and Recruiters
              requirements.
            </div>
            <div className="flex gap-5">
              <Fb />
              <Tw />
              <Ig />
              <Ln />
            </div>
          </div>

          <div className="flex justify-evenly">
            <div className="space-y-3">
              <div className="font-bold text-xl">Company</div>
              <div>About Us</div>
              <div>Our Services</div>
              <div>Categories</div>
              <div>Career</div>
              <div>Partner</div>
            </div>

            <div className="space-y-3">
              <div className="font-bold text-xl">Get in Touch</div>
              <div>About Us</div>
              <div>Our Services</div>
              <div>Categories</div>
              <div>Career</div>
              <div>Partner</div>
            </div>
          </div>
        </div>

        <div className="mx-20 mt-20 mb-10">
          <hr />
        </div>

        <div className="font-bold text-center">
          2023 © All rights reserved |InCorp Hr Web App. | Designed and
          Developed by the InCorp Team.
        </div>
      </div>
    </>
  );
};

export default Footer;
