import React, { useState } from "react";
import { TextInput } from "../../../../../components/reusables/TextInput";
import { useFormik } from "formik";
import SelectField from "../../../../../components/reusables/SelectField";

const JobRole = ({ setJobPayload, setSelectedNav }) => {
  const jobType = [
    { label: "Contract", value: 0 },
    { label: "FullTime", value: 1 },
    { label: "Internship", value: 2 },
  ];

  const [selectedJob, setSelectedJob] = useState("");

  const handleJobChange = (selectedOption) => {
    setSelectedJob(selectedOption);
    // Do any other actions you want with the selected option
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      requirements: "",
    },

    onSubmit: async () => {
      const payload = {
        ...values,
        jobType: selectedJob?.value,
      };

      setJobPayload((prev) => ({ ...prev, ...payload }));
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

  return (
    <>
      <div className="m-5">
        <div className="space-y-5">
          <div>
            <TextInput
              label="Job Title"
              name={"title"}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors?.title}
              hasError={errors?.title}
              values={values?.title}
            />
          </div>
          <div className="grid grid-cols-3 gap-5 items-center">
            <div className="col-span-2">
              <TextInput
                label="Tags"
                name={"tags"}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors?.tags}
                hasError={errors?.tags}
                values={values?.tags}
              />
            </div>
            <div className="col-span-1">
              <TextInput
                label="Job Role"
                name={"role"}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors?.role}
                hasError={errors?.role}
                values={values?.role}
              />
            </div>
          </div>
          <div className="font-bold">Salary</div>
          <div className="grid grid-cols-3 gap-5 items-center">
            <TextInput
              label="Min Salary"
              type="number"
              name={"minSalary"}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors?.minSalary}
              hasError={errors?.minSalary}
              values={values?.minSalary}
            />
            <TextInput
              label="Max Salary"
              type="number"
              name={"maxSalary"}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors?.maxSalary}
              hasError={errors?.maxSalary}
              values={values?.maxSalary}
            />
            <TextInput
              label="Salary Type"
              name={"salaryStructure"}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors?.salaryStructure}
              hasError={errors?.salaryStructure}
              values={values?.salaryStructure}
            />
          </div>
          <div className="font-bold">Advance Information</div>
          <div className="grid grid-cols-3 gap-5 items-center">
            {/* <TextInput label="Education" />
            <TextInput label="Experience" /> */}
            <TextInput
              label="Expiration Date"
              type={"date"}
              name={"expirationDate"}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors?.expirationDate}
              hasError={errors?.expirationDate}
              values={values?.expirationDate}
            />
          </div>
          <div className="font-bold">Location</div>
          <div className="grid grid-cols-3 gap-5 items-center">
            <TextInput
              label="Country"
              name={"country"}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors?.country}
              hasError={errors?.country}
              values={values?.country}
            />
            <TextInput
              label="City"
              name={"city"}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors?.city}
              hasError={errors?.city}
              values={values?.city}
            />
            <SelectField
              label="Job Type"
              options={jobType}
              setStatus={handleJobChange}
              selectedItem={selectedJob}
            />
          </div>
          <div>
            <button
              onClick={() => {
                if (isValid) {
                  handleSubmit();
                  setSelectedNav("Description");
                } else {
                  // Display a message to fill all fields
                  alert("Please fill all fields before proceeding.");
                }
              }}
              className={`px-4 py-2 bg-[#1ACAA6] text-[#fff] rounded-lg ${
                isValid ? "" : "opacity-50 cursor-not-allowed"
              }`}
              disabled={!isValid}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobRole;
