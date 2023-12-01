import React, { useState } from "react";
import { ReactComponent as Locay } from "../../../../../assets/svg/fluent_location-48-regular.svg";
import NigerianCurrencyFormatter from "../../../../../components/reusables/NigerianCurrencyFormat";
import dayjs from "dayjs";
import CenterModal from "../../../../../components/Modal/CenterModal";
import useApiRequest from "../../../../../utils/hooks/useApiRequest";
import {
  GetQuestions,
  SubmitQuestions,
} from "../../../../../utils/apiURLs/requests";
import { PersonalityTestQuestion } from "./Tests";
import PageLoader from "../../../../../components/PageLoader";
import useToggle from "../../../../../utils/hooks/useToggle";
import { responseMessageHandler } from "../../../../../utils/libs";
import { ToastNotify } from "../../../../../components/reusables/helpers/ToastNotify";
import { useSelector } from "react-redux";

const PersonalityTests = ({ appliedJobs }) => {
  const userData = useSelector((state) => state?.auth?.data);
  const makeRequest = useApiRequest();
  const [loading, toggleLoading] = useToggle();
  const [questions, setQuestions] = useState();
  const [modal, toggleModal] = useState(false);
  const [samplePayload, setSamplePayload] = useState({});

  const [answers, setAnswers] = useState([]);

  const handleAnswerSelect = (questionId, answerId) => {
    const updatedAnswers = answers?.filter((ans) => ans.key !== questionId);
    setAnswers([...updatedAnswers, { key: questionId, value: answerId }]);
  };

  const handleQuestionsSubmit = async ({ submitPayload }) => {
    toggleLoading();

    // Handle the submitted answers
    console.log("Submitted Answers:", answers);
    const payload = {
      ...submitPayload?.testPayload,
      questionOptions: [...answers],
      signedInEmail: userData?.email,
    };

    try {
      const response = await makeRequest.post(SubmitQuestions, payload);
      toggleLoading();

      if (response?.data?.actionMessage === "Success") {
        ToastNotify({
          type: "success",
          message: responseMessageHandler({ response }),
          position: "top-right",
        });
      }
    } catch (error) {
      toggleLoading();
      ToastNotify({
        type: "error",
        message: responseMessageHandler({ error }),
        position: "top-right",
      });
    }
  };

  const getPersonalityQuestion = async ({ testPayload }) => {
    toggleLoading();
    console.log(testPayload);
    const payload = { ...testPayload };
    try {
      const response = await makeRequest.post(GetQuestions, payload);
      toggleLoading();
      if (response?.data?.actionMessage === "Success") {
        setQuestions(response?.data?.data);
      }
    } catch (error) {
      toggleLoading();
      console.log(error);
    }
  };

  return (
    <div>
      {loading && <PageLoader />}
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
              <th className="py-3 text-center">Status</th>
              <th className="py-3 text-center">Action</th>
            </tr>
          </thead>
          {/* ... rest of the table body */}
          <tbody className="">
            {appliedJobs?.map((x, index) => (
              <tr key={x?.currentStageId} className="my-3">
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    {/* <div>
                          <img src={Canva} alt="" />
                        </div> */}
                    <div>
                      <div className="font-semibold">{x?.title}</div>
                      <div className="flex items-center">
                        <span>
                          <Locay />
                        </span>
                        <span>
                          Ikeja NGN{" "}
                          <span>
                            {
                              <NigerianCurrencyFormatter
                                number={x?.maxSalary}
                              />
                            }
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-center py-3">
                  <div>
                    {dayjs(x?.dateApplied).format("DD MMM, YYYY h:mm A")}
                  </div>
                </td>
                <td className="text-center py-3">
                  <div>
                    {x?.jobStageStatus === 0
                      ? "Pending"
                      : x?.jobStageStatus === 1
                      ? "Passed"
                      : "Failed"}
                  </div>
                </td>
                <td className="text-center py-3">
                  <div>
                    {x?.currentStageInJob === 2 && x?.jobStageStatus === 0 && (
                      <button
                        onClick={async () => {
                          await getPersonalityQuestion({
                            testPayload: {
                              jobPosterEmail: x?.jobPosterEmail,
                              jobId: x?.jobId,
                              stageId: x?.currentStageId,
                            },
                          });
                          setSamplePayload({
                            testPayload: {
                              jobPosterEmail: x?.jobPosterEmail,
                              jobId: x?.jobId,
                              stageId: x?.currentStageId,
                            },
                          });
                          toggleModal(true);
                        }}
                        className="px-4 py-2 bg-[#1ACAA6] text-[#fff] rounded-lg"
                      >
                        Start Test
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modal && (
        <CenterModal
          title="Personality Test"
          handleClose={() => toggleModal(false)}
        >
          <div>
            {JSON?.parse(questions?.stageInfo).map((question) => (
              <PersonalityTestQuestion
                key={question?.QuestionId}
                question={question}
                isPersonalityTest={true}
                onSelectAnswer={handleAnswerSelect}
              />
            ))}
            <div>
              <button
                onClick={() =>
                  handleQuestionsSubmit({
                    submitPayload: {
                      ...samplePayload,
                    },
                  })
                }
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 ease-in-out"
              >
                Submit
              </button>
            </div>
          </div>
        </CenterModal>
      )}
    </div>
  );
};

export default PersonalityTests;
