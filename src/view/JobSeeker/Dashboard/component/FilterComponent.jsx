import React, { useState } from "react";
import { TextInput } from "../../../../components/reusables/TextInput";
import ToggleButton from "../../../../components/reusables/ToggleButton";
import CheckedList from "../../../../components/reusables/CheckedList";
import { experience, workTypes } from "./constants";

const FilterComponent = () => {
  const [mode, setMode] = useState(false);

  const handleToggleChange = (value) => {
    setMode(value);
  };

  const [selectedItem, setSelectedItem] = useState("");
  const [experienceItem, setExperienceItem] = useState("");

  const handleJobTypeSelect = (item) => {
    setSelectedItem(item);
  };

  const handleExperienceSelect = (item) => {
    setExperienceItem(item);
  };

  return (
    <>
      <div className="mb-3 text-sm font-medium">Filter</div>
      <div className="bg-white w-full h-auto px-3 py-5 mb-5 rounded-xl">
        <div className="space-y-3">
          <div className="">
            <TextInput label="Location" />
            <hr className="mt-3" />
          </div>
          <div className="">
            <TextInput label="Show By" />
            <hr className="mt-3" />
          </div>
          <div className="">
            <ToggleButton label="Remote Worker" onChange={handleToggleChange} />
            <hr className="mt-3" />
          </div>
          <div className="">
            <CheckedList
              label="Work Types"
              items={workTypes}
              selected={selectedItem}
              onSelect={handleJobTypeSelect}
            />
            <hr className="mt-3" />
          </div>
          <div className="">
            <CheckedList
              label="Experience"
              items={experience}
              selected={experienceItem}
              onSelect={handleExperienceSelect}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterComponent;
