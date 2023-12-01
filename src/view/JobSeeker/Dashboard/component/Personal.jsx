import React, { useState } from "react";
import SelectField from "../../../../components/reusables/SelectField";
import { TextInput } from "../../../../components/reusables/TextInput";
import { TextArea } from "../../../../components/reusables/TextArea";
import { useFormik } from "formik";
import { CreateProfileApplicant } from "../../../../utils/apiURLs/requests";
import { ToastNotify } from "../../../../components/reusables/helpers/ToastNotify";
import { responseMessageHandler } from "../../../../utils/libs";
import useToggle from "../../../../utils/hooks/useToggle";
import useApiRequest from "../../../../utils/hooks/useApiRequest";
import PageLoader from "../../../../components/PageLoader";
import { useSelector } from "react-redux";

const Personal = () => {
  const userData = useSelector((state) => state?.auth?.data);
  const makeRequest = useApiRequest();
  const [selectedNationality, setNationality] = useState("");
  const [selectedGender, setGender] = useState("");
  const [marital, setMarital] = useState("");
  const [loading, toggleLoading] = useToggle();

  const nationality = [{ label: "Nigerian", value: "Nigerian" }];
  const gender = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];
  const maritalStatus = [
    { label: "Single", value: "Single" },
    { label: "Married", value: "Married" },
  ];

  const handleNationalityChange = (selectedOption) => {
    setNationality(selectedOption);
    // Do any other actions you want with the selected option
  };

  const handleGenderChange = (selectedOption) => {
    setGender(selectedOption);
    // Do any other actions you want with the selected option
  };

  const handleMaritalChange = (selectedOption) => {
    setMarital(selectedOption);
    // Do any other actions you want with the selected option
  };

  const formik = useFormik({
    initialValues: {
      dob: "",
      bio: "",
    },

    onSubmit: async () => {
      toggleLoading();
      const payload = {
        nationality: selectedNationality?.value,
        dateOfBirth: values?.dob,
        gender: selectedGender?.value,
        maritalSatus: marital?.value,
        biography: values?.bio,
        signedInEmail: userData?.email,
      };

      try {
        const response = await makeRequest.post(
          CreateProfileApplicant,
          payload
        );
        toggleLoading();
        if (response?.status === 200) {
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
      {loading && <PageLoader />}
      <div className="m-5">
        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
            <SelectField
              label="Nationality"
              options={nationality}
              setStatus={handleNationalityChange}
              selectedItem={selectedNationality}
            />
            <TextInput
              label="Date of Birth"
              name="dob"
              type="date"
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors?.dob}
              hasError={errors?.dob}
              values={values?.dob}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
            <SelectField
              label="Gender"
              options={gender}
              setStatus={handleGenderChange}
              selectedItem={selectedGender}
            />
            <SelectField
              label="Marital Status"
              options={maritalStatus}
              setStatus={handleMaritalChange}
              selectedItem={marital}
            />
          </div>
          <div className="">
            <TextArea
              label="Biography"
              name="bio"
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors?.bio}
              hasError={errors?.bio}
              values={values?.bio}
            />
          </div>
          <div>
            <button
              onClick={() => handleSubmit()}
              className="px-4 py-2 bg-[#1ACAA6] text-[#fff] rounded-lg"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personal;
