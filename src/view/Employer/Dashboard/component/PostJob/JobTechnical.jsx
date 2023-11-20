import { useFormik } from "formik";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import useApiRequest from "../../../../../utils/hooks/useApiRequest";
import { CreateJob } from "../../../../../utils/apiURLs/requests";
import { ToastNotify } from "../../../../../components/reusables/helpers/ToastNotify";
import { responseMessageHandler } from "../../../../../utils/libs";
import useToggle from "../../../../../utils/hooks/useToggle";
import PageLoader from "../../../../../components/PageLoader";
import { useNavigate } from "react-router-dom";

const JobTechnical = ({ setJobPayload, jobPayload }) => {
  const [loading, toggleLoading] = useToggle();
  const navigate = useNavigate();
  const makeRequest = useApiRequest();
  const userData = useSelector((state) => state?.auth?.data);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({
    questionValue: "",
    options: [
      { id: 1, value: "" },
      { id: 2, value: "" },
      { id: 3, value: "" },
      { id: 4, value: "" },
    ],
    correctOptionId: 1,
  });

  const [passMark, setPassMark] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "passMark") {
      setPassMark(value);
    } else {
      setCurrentQuestion((prevQuestion) => ({
        ...prevQuestion,
        [name]: value,
      }));
    }
  };

  const handleOptionChange = (index, value) => {
    setCurrentQuestion((prevQuestion) => {
      const newOptions = [...prevQuestion.options];
      newOptions[index].value = value;
      return {
        ...prevQuestion,
        options: newOptions,
      };
    });
  };

  const handleCorrectOptionChange = (id) => {
    setCurrentQuestion((prevQuestion) => ({
      ...prevQuestion,
      correctOptionId: id,
    }));
  };

  const handleAddQuestion = () => {
    setQuestions((prevQuestions) => [...prevQuestions, currentQuestion]);
    setCurrentQuestion({
      questionValue: "",
      options: [
        { id: 1, value: "" },
        { id: 2, value: "" },
        { id: 3, value: "" },
        { id: 4, value: "" },
      ],
      correctOptionId: 1,
    });
  };

  const handleRemoveQuestion = (index) => {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((_, i) => i !== index)
    );
  };

  const handleClick = async () => {
    toggleLoading();
    const payload = {
      description: jobPayload?.description,
      title: jobPayload?.title,
      tags: jobPayload?.tags,
      role: jobPayload?.role,
      minSalary: Number(jobPayload?.minSalary),
      maxSalary: Number(jobPayload?.maxSalary),
      salaryStructure: 1,
      expirationDate: jobPayload?.expirationDate,
      country: jobPayload?.country,
      city: jobPayload?.city,
      jobType: jobPayload?.jobType,
      jobBenefits: [...jobPayload?.jobBenefits],
      requirements: jobPayload?.requirements,
      signedInEmail: userData?.email,
      stages: [
        {
          stageType: 1,
          stageDuration: 2,
          stageProperties: JSON.stringify({
            ...jobPayload?.properties,
            testDuration: "2:0:0",
          }),
          stageNumber: 1,
        },
        {
          stageType: 2,
          stageDuration: 2,
          stageProperties: JSON.stringify({
            ...jobPayload?.personalityTest,
            testDuration: "2:0:0",
          }),
          stageNumber: 2,
        },
        {
          stageType: 3,
          stageDuration: 2,
          stageProperties: JSON.stringify({
            ...jobPayload?.technicalQuestions,
            testDuration: "2:0:0",
            passMark: passMark,
          }),
          stageNumber: 3,
        },
        // {
        //   stageType: 4,
        //   stageDuration: 2,
        //   stageProperties: "",
        //   stageNumber: 4,
        // },
      ],
    };

    console.log({ ...jobPayload?.technicalQuestions });
    console.log(payload);
    try {
      const response = await makeRequest.post(CreateJob, payload);
      console.log(response);
      toggleLoading();
      if (response?.status === 200) {
        ToastNotify({
          type: "success",
          message: responseMessageHandler({ response }),
          position: "top-right",
        });
        navigate("/dashboard/employer/");
      }
    } catch (error) {
      console.log(error?.response);
      toggleLoading();
      ToastNotify({
        type: "error",
        message: responseMessageHandler({ error }),
        position: "top-right",
      });
    }
  };

  return (
    <>
      {loading && <PageLoader />}
      <div className="m-5">
        <div>
          <label>
            Pass Mark:
            <input
              type="number"
              name="passMark"
              value={passMark}
              onChange={handleInputChange}
              className="rounded-lg ml-5 mb-10"
            />
          </label>
        </div>
        {questions.map((question, index) => (
          <div key={index}>
            <p>{`Question ${index + 1}: ${question.questionValue}`}</p>
            <ul>
              {question.options.map((option) => (
                <li key={option.id}>{`Option ${option.id}: ${option.value} ${
                  question.correctOptionId === option.id ? "(Correct)" : ""
                }`}</li>
              ))}
            </ul>
            <button
              className="rounded-lg px-3 mb-5 py-2 mt-2 bg-red-500 text-white"
              onClick={() => handleRemoveQuestion(index)}
            >
              Remove Question
            </button>
          </div>
        ))}
        <div>
          <label>
            Question:
            <input
              type="text"
              name="questionValue"
              value={currentQuestion.questionValue}
              onChange={handleInputChange}
              className="rounded-lg w-full"
            />
          </label>
        </div>
        <div>
          <label>Options:</label>
          {currentQuestion.options.map((option) => (
            <div key={option.id}>
              <input
                type="text"
                value={option.value}
                onChange={(e) =>
                  handleOptionChange(option.id - 1, e.target.value)
                }
                className="rounded-lg mr-5 mt-3"
              />
              <label>
                Correct
                <input
                  type="radio"
                  name="correctOption"
                  checked={currentQuestion.correctOptionId === option.id}
                  onChange={() => handleCorrectOptionChange(option.id)}
                  className="ml-5"
                />
              </label>
            </div>
          ))}
        </div>
        <button
          className="rounded-lg px-5 py-3 mt-5 bg-[#1ACAA6] text-white"
          onClick={handleAddQuestion}
        >
          Add Question
        </button>

        <div>
          <button
            onClick={() => {
              setJobPayload((prev) => ({
                ...prev,
                technicalQuestions: [...questions],
                passMark,
              }));
              handleClick();
            }}
            className="rounded-lg px-5 py-3 mt-5 bg-[#1ACAA6] text-white"
          >
            Create Job
          </button>
        </div>
      </div>
    </>
  );
};

export default JobTechnical;
