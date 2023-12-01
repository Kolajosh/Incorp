import React from "react";
import { SocialInput } from "../../../../components/reusables/SocialInput";
import { ToastNotify } from "../../../../components/reusables/helpers/ToastNotify";
import { useSelector } from "react-redux";
import useApiRequest from "../../../../utils/hooks/useApiRequest";
import { CreateProfile } from "../../../../utils/apiURLs/requests";
import { useFormik } from "formik";
import useToggle from "../../../../utils/hooks/useToggle";
import { responseMessageHandler } from "../../../../utils/libs";
import PageLoader from "../../../../components/PageLoader";

const EmployerSocial = () => {
  const userData = useSelector((state) => state?.auth?.data);
  const makeRequest = useApiRequest();
  const [loading, toggleLoading] = useToggle();

  const formik = useFormik({
    initialValues: {
      facebook: "",
      twitter: "",
      instagram: "",
      linkedin: "",
    },

    onSubmit: async () => {
      toggleLoading();
      const payload = {
        faceBookLink: values?.facebook,
        twitterLink: values?.twitter,
        linkedInLink: values?.linkedin,
        instagramLink: values?.instagram,
        signedInEmail: userData?.email,
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
    <div className="m-5">
      {loading && <PageLoader />}
      <div className="space-y-5">
        <SocialInput
          label="Facebook"
          iconType="facebook"
          showSocialIcons={true}
          placeHolder=""
          name="facebook"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors?.facebook}
          hasError={errors?.facebook}
          values={values?.facebook}
        />
        <SocialInput
          label="Twitter"
          iconType="twitter"
          showSocialIcons={true}
          placeHolder=""
          name="twitter"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors?.twitter}
          hasError={errors?.twitter}
          values={values?.twitter}
        />
        <SocialInput
          label="Instagram"
          iconType="instagram"
          showSocialIcons={true}
          placeHolder=""
          name="instagram"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors?.instagram}
          hasError={errors?.instagram}
          values={values?.instagram}
        />
        <SocialInput
          label="Linkedin"
          iconType="linkedin"
          showSocialIcons={true}
          placeHolder=""
          name="linkedin"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors?.linkedin}
          hasError={errors?.linkedin}
          values={values?.linkedin}
        />
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
  );
};

export default EmployerSocial;
