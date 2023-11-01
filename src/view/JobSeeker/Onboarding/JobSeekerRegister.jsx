import React from "react";
import Img from "../../../assets/img/incorpLoginImg.png";
import { ReactComponent as LinkedIn } from "../../../assets/svg/linkedin.svg";
import { ReactComponent as Google } from "../../../assets/svg/google.svg";
import { ReactComponent as Fb } from "../../../assets/svg/fb.svg";
import { TextInput } from "../../../components/reusables/TextInput";
import { CustomButton } from "../../../components/buttons/CustomButton";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { jobSeekerRegvalidationSchema } from "../../../utils/validationSchema/jobseekerReg.validations";
import useApiRequest from "../../../utils/hooks/useApiRequest";
import { jobSeekerRegistrationUrl } from "../../../utils/apiURLs/requests";
import { ToastNotify } from "../../../components/reusables/helpers/ToastNotify";
import { responseMessageHandler } from "../../../utils/libs";

const JobSeekerRegister = () => {
  const navigate = useNavigate();
  const makeRequest = useApiRequest();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      password2: "",
    },

    onSubmit: async () => {
      console.log(values);
      const payload = {
        firstName: values?.firstName,
        lastName: values?.lastName,
        email: values?.email,
        password: values?.password,
      };
      try {
        const response = await makeRequest.post(
          jobSeekerRegistrationUrl,
          payload
        );
        if (response?.status === 200) {
          ToastNotify({
            type: "success",
            message: responseMessageHandler({ response }),
            position: "top-right",
          });
        }
      } catch (error) {
        ToastNotify({
          type: "error",
          message: responseMessageHandler({ error }),
          position: "top-right",
        });
      }
    },

    validationSchema: jobSeekerRegvalidationSchema,
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
      {/* image */}
      <div className="md:max-h-screen w-full">
        <img className="object-contain h-full" src={Img} alt="Incorp" />
      </div>

      {/* login details */}
      <div className="flex flex-col space-y-3 mx-20 items-center justify-center">
        <div className="font-bold">Sign Up</div>
        <div className="flex">
          <LinkedIn style={{ width: "50px", height: "50px" }} />
          <Google style={{ width: "50px", height: "50px" }} />
          <Fb style={{ width: "50px", height: "50px" }} />
        </div>
        <div className="text-black font-bold text-lg text-opacity-[50%]">
          Or
        </div>
        <div className="space-y-3 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
            <TextInput
              name="firstName"
              handleChange={handleChange}
              handleBlur={handleBlur}
              label="First Name"
              error={errors?.firstName}
              hasError={errors?.firstName}
              values={values?.firstName}
            />
            <TextInput
              name="lastName"
              handleChange={handleChange}
              handleBlur={handleBlur}
              label="Last Name"
              error={errors?.lastName}
              hasError={errors?.lastName}
              values={values?.lastName}
            />
          </div>
          <TextInput
            name="email"
            handleChange={handleChange}
            handleBlur={handleBlur}
            label="Email"
            error={errors?.email}
            hasError={errors?.email}
            values={values?.email}
          />
          <TextInput
            name="password"
            type="password"
            handleChange={handleChange}
            handleBlur={handleBlur}
            label="Password"
            error={errors?.password}
            hasError={errors?.password}
            values={values?.password}
          />
          <TextInput
            name="password2"
            type="password"
            handleChange={handleChange}
            handleBlur={handleBlur}
            label="Re-enter Password"
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
        <div className="text-black font-bold text-sm ">Reset Password</div>
        <div className="text-black font-bold text-sm ">
          Have an account?{" "}
          <span
            onClick={() => navigate("/")}
            className="text-[#1ACAA6] cursor-pointer"
          >
            Log In
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerRegister;
