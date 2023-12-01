import React, { useState } from "react";
import { ReactComponent as Bookmark } from "../../../../assets/svg/fluent_bookmark-32-regular.svg";
import { ReactComponent as Map } from "../../../../assets/svg/MapTrifold.svg";
import { ReactComponent as Calendar } from "../../../../assets/svg/CalendarBlank.svg";
import { ReactComponent as Timer } from "../../../../assets/svg/Timer.svg";
import { ReactComponent as Stack } from "../../../../assets/svg/Stack.svg";
import { ReactComponent as Wallet } from "../../../../assets/svg/Wallet.svg";
import { ReactComponent as Brief } from "../../../../assets/svg/briefcase.svg";
import CenterModal from "../../../../components/Modal/CenterModal";
import SelectField from "../../../../components/reusables/SelectField";
import DragDrop from "../../../../components/DnD/DragDrop";
import { CustomButton } from "../../../../components/buttons/CustomButton";
import dayjs from "dayjs";
import useApiRequest from "../../../../utils/hooks/useApiRequest";
import { useSelector } from "react-redux";
import { ApplyJob, UploadDoc } from "../../../../utils/apiURLs/requests";
import { ToastNotify } from "../../../../components/reusables/helpers/ToastNotify";
import { responseMessageHandler } from "../../../../utils/libs";
import useToggle from "../../../../utils/hooks/useToggle";
import PageLoader from "../../../../components/PageLoader";
import NigerianCurrencyFormatter from "../../../../components/reusables/NigerianCurrencyFormat";

const JobDescription = ({ jobDetails }) => {
  const userData = useSelector((state) => state?.auth?.data);
  const makeRequest = useApiRequest();
  const [loading, toggleLoading] = useToggle();

  const [file, setFile] = useState("");
  const [modal, toggleModal] = useState(false);

  const cvs = [
    { value: "Cv1", label: "Cv1" },
    { value: "Cv2", label: "Cv2" },
    { value: "Cv3", label: "Cv3" },
  ];

  const handleApplyJob = async () => {
    toggleLoading();
    const payload = {
      jobPosterEmail: jobDetails?.jobPosterEmail,
      jobId: jobDetails?.id,
      signedInEmail: userData?.email,
    };

    try {
      const response = await makeRequest.post(ApplyJob, payload);
      toggleLoading();
      if (response?.status === 200) {
        ToastNotify({
          type: "success",
          message: "Applied",
          position: "top-right",
        });
      }
    } catch (error) {
      toggleLoading();
      ToastNotify({
        type: "error",
        message: "Can't Apply for job",
        position: "top-right",
      });
    }
  };

  const handleUpload = async () => {
    toggleLoading();

    const formData = new FormData();
    formData.append("UploadedFile", file);

    // Append other necessary fields to the FormData
    formData.append("FileType", "1");
    formData.append("SignedInEmail", userData?.email);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const response = await makeRequest.post(UploadDoc, formData, config);
      console.log(response);
      toggleLoading();

      if (response?.status === 200) {
        ToastNotify({
          type: "success",
          message: "Upload success, applying for job...",
          position: "top-right",
        });
        handleApplyJob();
      }
    } catch (error) {
      toggleLoading();
      ToastNotify({
        type: "error",
        message: "An error occurred, try again",
        position: "top-right",
      });
    }
  };

  return (
    <>
      {loading && <PageLoader />}
      <div className="flex justify-end gap-5">
        <div className="p-5 rounded-lg bg-[#DDEFEC]">
          <Bookmark
            style={{
              stroke: "#1ACAA6",
            }}
          />
        </div>
        <div>
          <button
            onClick={() => toggleModal(true)}
            className="p-5 rounded-lg bg-[#1ACAA6] text-white"
          >
            Apply Now →
          </button>
        </div>
      </div>

      <div className="flex justify-end items-center mt-10">
        <div className="p-5 border-2 rounded-lg w-10/12 bg-white border-[#E7F0FA] flex items-center gap-10 justify-between">
          <div className="text-center space-y-3 ">
            <div className="text-lg font-semibold">Salary (Naira)</div>
            <div className="text-xl font-semibold">
              {<NigerianCurrencyFormatter number={jobDetails?.minSalary} />} -{" "}
              {<NigerianCurrencyFormatter number={jobDetails?.maxSalary} />}
            </div>
            <div className="text-lg">{jobDetails?.salaryStructure}</div>
          </div>
          <div className="text-center space-y-3">
            <div className="flex justify-center">
              <Map />
            </div>
            <div className="text-xl font-semibold">Job Location</div>
            <div className="text-lg">{jobDetails?.country}</div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex justify-end items-center">
          <div className="p-5 border-2 rounded-lg w-10/12 bg-white border-[#E7F0FA]">
            <div className="my-5 font-semibold text-lg">Job Overview</div>
            <div className="grid grid-cols-3 gap-10">
              <div className="text-center space-y-2 ">
                <Calendar />
                <div className="text-md font-medium text-left">Job Posted</div>
                <div className="text-lg text-left">
                  {dayjs(jobDetails?.dateCreated).format("DD MMM, YYYY")}
                </div>
              </div>

              <div className="text-center space-y-2 ">
                <Timer />
                <div className="text-md font-medium text-left">
                  Job Expire In
                </div>
                <div className="text-lg text-left">
                  {dayjs(jobDetails?.expirationDate).format("DD MMM, YYYY")}
                </div>
              </div>

              <div className="text-center space-y-2 ">
                <Stack />
                <div className="text-md font-medium text-left">Job Level</div>
                <div className="text-lg text-left">Senior Level</div>
              </div>

              <div className="text-center space-y-2 ">
                <Wallet />
                <div className="text-md font-medium text-left">Experience</div>
                <div className="text-lg text-left">3-5 years</div>
              </div>

              <div className="text-center space-y-2 ">
                <Brief />
                <div className="text-md font-medium text-left">Education</div>
                <div className="text-lg text-left">Certification</div>
              </div>
            </div>

            <div className="mt-10">
              <hr />
              <div className="my-4">
                <p className="font-semibold text-lg">Share this Job:</p>
              </div>
              <div className="flex gap-1">
                <div className="text-[#0A65CC] text-xs rounded-lg px-2 py-2 bg-[#E7F0FA]">
                  🔗Copy Links
                </div>
                <div className="text-[#0A65CC] text-xs rounded-lg px-2 py-2 bg-[#E7F0FA]">
                  Linkedin
                </div>
                <div className="text-[#0A65CC] text-xs rounded-lg px-2 py-2 bg-[#E7F0FA]">
                  Facebook
                </div>
                <div className="text-[#0A65CC] text-xs rounded-lg px-2 py-2 bg-[#E7F0FA]">
                  Twitter
                </div>
                <div className="text-[#0A65CC] text-xs rounded-lg px-2 py-2 bg-[#E7F0FA]">
                  Mail
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modal && (
        <CenterModal
          handleClose={() => toggleModal(false)}
          title={"Apply: UI/UX Designer"}
        >
          <div className="space-y-5">
            {/* <div>
              <SelectField options={cvs} />
            </div> */}
            {/* <div>Or</div> */}
            <div>
              <DragDrop
                onFileSelect={setFile}
                accept={[
                  ".doc",
                  ".docx",
                  "application/msword",
                  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                ]}
              />
            </div>
            <div className="flex justify-between">
              <button className="p-5 bg-[#1ACAA626] text-[#1ACAA6] rounded-lg">
                Cancel
              </button>
              <button
                onClick={() => handleUpload()}
                className="p-5 bg-[#1ACAA6] text-[#fff] rounded-lg"
              >
                Apply
              </button>
            </div>
          </div>
        </CenterModal>
      )}
    </>
  );
};

export default JobDescription;
