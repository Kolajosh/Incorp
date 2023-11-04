import React from "react";
import SelectField from "../../../../components/reusables/SelectField";
import { TextInput } from "../../../../components/reusables/TextInput";
import { TextArea } from "../../../../components/reusables/TextArea";

const Personal = () => {
  return (
    <>
      <div className="m-5">
        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
            <SelectField label="Nationality" />
            <SelectField label="Date of Birth" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
            <SelectField label="Gender" />
            <SelectField label="Marital Status" />
          </div>
          <div className="">
            <TextArea label="Biography" />
          </div>
          <div>
            <button className="px-4 py-2 bg-[#1ACAA6] text-[#fff] rounded-lg">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personal;
