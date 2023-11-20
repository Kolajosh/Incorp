import React from "react";
import { TextArea } from "../../../../../components/reusables/TextArea";
import SelectableList from "../../../../../components/reusables/SelectableList";
import CenterModal from "../../../../../components/Modal/CenterModal";
import SelectField from "../../../../../components/reusables/SelectField";
import KeywordInput from "../../../../../components/reusables/KeywordInput";
import { useFormik } from "formik";
import { useState } from "react";

const JobDescription = ({
  modal,
  toggleModal,
  handleModalClose,
  setJobPayload,
  setSelectedNav,
}) => {
  const [keywords, setKeywords] = useState("");
  const handleSelectionChange = (selectedItems) => {
    // Access the selected items here and perform any necessary actions
    console.log("Selected Items in Parent:", selectedItems);
    setArrayItems(selectedItems);
  };

  const handleKeywordsChange = (updatedKeywords) => {
    // Handle the updated keywords in the parent component
    console.log("Updated Keywords:", updatedKeywords);
    setKeywords(updatedKeywords);
  };

  const [experience, setExperience] = useState(null); // State to manage the selected option
  const [years, setYears] = useState(null); // State to manage the selected option

  const handleExperienceChange = (selectedOption) => {
    setExperience(selectedOption);
    // Do any other actions you want with the selected option
  };

  const handleYearsChange = (selectedOption) => {
    setYears(selectedOption);
    // Do any other actions you want with the selected option
  };

  const experienceLevel = [
    { label: "Junior", value: "Junior" },
    { label: "Intermediate", value: "Intermediate" },
    { label: "Senior", value: "Senior" },
  ];

  const yearsOfExperience = [
    { label: "0-1", value: "0-1" },
    { label: "1-3", value: "1-3" },
    { label: "3-5", value: "3-5" },
    { label: "5-10", value: "5-10" },
  ];

  // const tools = [
  //   { label: "0-1", value: "0-1" },
  //   { label: "1-3", value: "1-3" },
  //   { label: "3-5", value: "3-5" },
  //   { label: "5-10", value: "5-10" },
  // ];

  const [arryItems, setArrayItems] = useState("");
  const formik = useFormik({
    initialValues: {
      description: "",
      requirements: "",
    },

    onSubmit: async () => {
      const payload = {
        ...values,
        jobBenefits: [...arryItems],
        properties: {
          yearOfExperience: years?.value,
          experienceLevel: experience?.value,
          keywords: keywords,
          tools: "",
        },
      };

      setJobPayload((prev) => ({ ...prev, ...payload }));

      console.log(payload);
    },
  });

  const {
    handleSubmit,
    handleChange,
    errors,
    values,
    handleBlur,
    touched,
    isValid,
  } = formik;

  const items = [
    "HMO",
    "Gym Access",
    "Parking Space",
    "Learning Budget",
    "Vacation Time Off",
  ];

  return (
    <>
      <div className="m-5">
        <div className="space-y-5">
          <div>
            <TextArea
              label="Job Description"
              name={"description"}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors?.description}
              hasError={errors?.description}
              values={values?.description}
            />
          </div>
          <div>
            <TextArea
              label="Job Requirements"
              name={"requirements"}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors?.requirements}
              hasError={errors?.requirements}
              values={values?.requirements}
            />
          </div>
          <div>
            <SelectableList
              label="Job Benefits"
              items={items}
              onSelectionChange={handleSelectionChange}
            />
          </div>
          <div>
            <button
              onClick={() => {
                toggleModal(true);
              }}
              className="px-4 py-2 bg-[#1ACAA6] text-[#fff] rounded-lg"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {modal && (
        <CenterModal
          handleClose={() => handleModalClose()}
          title={"CV/Resume Scan"}
        >
          <div className="space-y-5">
            <div className="font-bold">Key Words</div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <SelectField
                options={experienceLevel}
                label={"Experience Level"}
                setStatus={handleExperienceChange}
                selectedItem={experience}
              />
              <SelectField
                options={yearsOfExperience}
                label={"Years of Experience"}
                setStatus={handleYearsChange}
                selectedItem={years}
              />
              {/* <SelectField label={"Tools"} /> */}
            </div>
            <div>
              <KeywordInput onKeywordsChange={handleKeywordsChange} />
            </div>
            <div className="flex justify-evenly">
              <button
                onClick={() => toggleModal(false)}
                className="px-5 py-2 bg-[#1ACAA626] text-[#1ACAA6] rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  toggleModal(false);
                  handleSubmit();
                  setSelectedNav("PTest");
                }}
                className="px-5 py-2 bg-[#1ACAA6] text-[#fff] rounded-lg"
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
