import React from "react";
import Img from "../../../assets/img/incorpLoginImg.png";
import { ReactComponent as LinkedIn } from "../../../assets/svg/linkedin.svg";
import { ReactComponent as Google } from "../../../assets/svg/google.svg";
import { ReactComponent as Fb } from "../../../assets/svg/fb.svg";
import { TextInput } from "../../../components/reusables/TextInput";
import { CustomButton } from "../../../components/buttons/CustomButton";
import { useNavigate } from "react-router-dom";
import useApiRequest from "../../../utils/hooks/useApiRequest";
import { useFormik } from "formik";
import { ToastNotify } from "../../../components/reusables/helpers/ToastNotify";
import { employerRegistrationUrl } from "../../../utils/apiURLs/requests";
import { responseMessageHandler } from "../../../utils/libs";
import { employerRegValidationSchema } from "../../../utils/validationSchema/employerReg.validations";
import PageLoader from "../../../components/PageLoader";
import useToggle from "../../../utils/hooks/useToggle";

const EmployerRegistration = () => {
  const [loading, toggleLoading] = useToggle();
  const navigate = useNavigate();
  const makeRequest = useApiRequest();
  const formik = useFormik({
    initialValues: {
      email: "",
      companyName: "",
      registrationNumber: "",
      password: "",
      password2: "",
    },

    onSubmit: async () => {
      toggleLoading();
      const payload = {
        companyRegistrationNumber: values?.registrationNumber,
        companyEmail: values?.email,
        companyName: values?.companyName,
        password: values?.password,
      };
      try {
        const response = await makeRequest.post(
          employerRegistrationUrl,
          payload
        );
        toggleLoading();

        if (response?.status === 200) {
          ToastNotify({
            type: "success",
            message: "Registered Successfully, Proceed to Login",
            position: "top-right",
          });
          navigate("/register/employer/pending");
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

    validationSchema: employerRegValidationSchema,
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
    <div className="grid grid-cols-1 md:grid-cols-2">
      {loading && <PageLoader />}
      {/* image */}
      <div className="md:max-h-screen w-full">
        <img className="object-contain h-screen" src={Img} alt="Incorp" />
      </div>

      {/* login details */}
      <div className="flex flex-col space-y-2 mx-20 items-center justify-center">
        <div className="font-bold">Register</div>
        <div className="flex">
          <LinkedIn style={{ width: "50px", height: "50px" }} />
          <Google style={{ width: "50px", height: "50px" }} />
          <Fb style={{ width: "50px", height: "50px" }} />
        </div>
        <div className="text-black font-bold text-lg text-opacity-[50%]">
          Or
        </div>
        <div className="space-y-5 w-full">
          <TextInput
            label="Email"
            name="email"
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors?.email}
            hasError={errors?.email}
            values={values?.email}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
            <TextInput
              label="Company's Name"
              name="companyName"
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors?.companyName}
              hasError={errors?.companyName}
              values={values?.companyName}
            />
            <TextInput
              label="Registration Number"
              name="registrationNumber"
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors?.registrationNumber}
              hasError={errors?.registrationNumber}
              values={values?.registrationNumber}
            />
          </div>
          <TextInput
            label="Password"
            name="password"
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors?.password}
            hasError={errors?.password}
            values={values?.password}
          />
          <TextInput
            label="Re-enter Password"
            name="password2"
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors?.password2}
            hasError={errors?.password2}
            values={values?.password2}
          />
        </div>
        <div className="w-full">
          <CustomButton
            labelText={"Sign Up"}
            containerVariant="py-2 px-5 w-full rounded-xl flex justify-center"
            buttonVariant="primary"
            handleClick={() => handleSubmit()}
          />
        </div>
        {/* <div className="text-black font-bold text-sm ">Reset Password</div> */}
        <div className="text-black font-bold text-sm ">
          Have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-[#1ACAA6] cursor-pointer"
          >
            Log In
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmployerRegistration;
