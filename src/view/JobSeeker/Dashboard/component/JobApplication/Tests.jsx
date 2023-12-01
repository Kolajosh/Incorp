import React, { useState } from "react";

export const PersonalityTestQuestion = ({ question, onSelectAnswer, isPersonalityTest }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerSelection = (answerId) => {
    setSelectedAnswer(answerId);
    onSelectAnswer(question.QuestionId, answerId);
  };

  return (
    <div className="mb-6">
      <p className="text-lg font-semibold">{question.QuestionValue}</p>
      <div className="mt-3">
        {question.Options.map((option) => (
          <label
            key={option.Id}
            className={`inline-flex items-center cursor-pointer ${
              selectedAnswer === option.Id
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            } py-2 px-4 rounded-md transition-colors duration-300 ease-in-out`}
          >
            <input
              type="radio"
              className="form-radio h-5 w-5"
              name={`question_${question.QuestionId}`}
              value={option.Id}
              onChange={() => handleAnswerSelection(option.Id)}
              checked={selectedAnswer === option.Id}
            />
            <span className="ml-2">
              {isPersonalityTest ? (option.Id === 1 ? "Yes" : "No") : option.Value}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};
