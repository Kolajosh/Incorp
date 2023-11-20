import React from "react";
import { TextInput } from "../../../../components/reusables/TextInput";
import { TextArea } from "../../../../components/reusables/TextArea";
import useToggle from "../../../../utils/hooks/useToggle";
import useApiRequest from "../../../../utils/hooks/useApiRequest";
import { useFormik } from "formik";
import { responseMessageHandler } from "../../../../utils/libs";
import { CreateProfile } from "../../../../utils/apiURLs/requests";
import { ToastNotify } from "../../../../components/reusables/helpers/ToastNotify";
import PageLoader from "../../../../components/PageLoader";

const FoundingInfo = () => {
  const [loading, toggleLoading] = useToggle();
  const makeRequest = useApiRequest();

  const formik = useFormik({
    initialValues: {
      organizationType: "",
      companyVision: "",
      industryType: "",
      teamSize: "",
      yearsOfEstablishment: "",
    },

    onSubmit: async () => {
      toggleLoading();
      const payload = {
        // aboutUs: values?.aboutUs,
        organizationType: values?.organizationType,
        industryType: values?.industryType,
        teamSize: Number(values?.teamSize),
        yearsOfEstablishment: Number(values?.yearsOfEstablishment),
        companyVision: values?.companyVision,
        // faceBookLink: "string",
        // twitterLink: "string",
        // linkedInLink: "string",
        // instagramLink: "string",
        // signedInEmail: "string",
      };
      try {
        const response = await makeRequest.post(CreateProfile, payload);
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
            <TextInput
              label="Organization Type"
              name={"organizationType"}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors?.organizationType}
              hasError={errors?.organizationType}
              values={values?.organizationType}
            />
            <TextInput
              label="Industry Type"
              name={"industryType"}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors?.industryType}
              hasError={errors?.industryType}
              values={values?.industryType}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
            <TextInput
              label="Team Size"
              name={"teamSize"}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors?.teamSize}
              hasError={errors?.teamSize}
              values={values?.teamSize}
            />
            <TextInput
              label="Years of Establishment"
              name={"yearsOfEstablishment"}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors?.yearsOfEstablishment}
              hasError={errors?.yearsOfEstablishment}
              values={values?.yearsOfEstablishment}
            />
          </div>
          <div className="">
            <TextArea
              label="Company Vision"
              name={"companyVision"}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors?.companyVision}
              hasError={errors?.companyVision}
              values={values?.companyVision}
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

export default FoundingInfo;
