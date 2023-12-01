import React from "react";
import { TextInput } from "../../../../../components/reusables/TextInput";
import CheckedList from "../../../../../components/reusables/CheckedList";
import { useState } from "react";

const JobPersonality = ({ setJobPayload, setSelectedNav }) => {
  const item = [
    { value: "INFJ", label: "INFJ (Counselor)" },
    { value: "ENTJ", label: "ENTJ (Commander)" },
    { value: "ESFJ", label: "ESFJ (Provider)" },
    { value: "INTJ", label: "INTJ (Mastermind)" },
    { value: "ENTP", label: "ENTP (Visionary)" },
    { value: "ESTJ", label: "ESTJ (Overseer)" },
    { value: "ENFJ", label: "ENFJ (Teacher)" },
    { value: "ISTJ", label: "ISTJ (Inspector)" },
    { value: "INTP", label: "INTP (Architect)" },
    { value: "ISFJ", label: "ISFJ (Protector)" },
    { value: "ESTP", label: "ESTP (Dynamo)" },
    { value: "ESFP", label: "ESFP (Performer)" },
    { value: "ISFP", label: "ISFP (Composer)" },
    { value: "ISTP", label: "ISTP (Craftsman)" },
    { value: "ENFP", label: "ENFP (Champion)" },
    { value: "INFP", label: "INFP (Healer)" },
  ];
  

  const [selectedItem, setSelectedItem] = useState("");

  const handlePersonalityTypeSelect = (item) => {
    setSelectedItem(item);
  };

  const handleClick = () => {
    setJobPayload((prev) => ({
      ...prev,
      preferredPersonalityTypes: [...selectedItem],
    }));
    setSelectedNav("TTest");
  };

  return (
    <>
      <div className="m-5">
        <div className="space-y-5">
          <div className="font-bold">
            Myers Briggs Personality Type Indicator
          </div>
          <div className="text-black text-opacity-[50%]">
            Using the Myers Briggs personality method, choose the personality
            type you think fits the job role or what the company needs.
          </div>
          <div>
            <CheckedList
              label="Personality Type"
              items={item}
              onSelect={handlePersonalityTypeSelect}
              selected={selectedItem}
              multiSelect={true}
            />
          </div>
          <div>
            <button
              onClick={() => {
                handleClick();
              }}
              className="px-5 py-2 bg-[#1ACAA6] text-[#fff] rounded-lg"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobPersonality;
