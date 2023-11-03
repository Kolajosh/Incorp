import React from "react";
import Img from "../../../assets/img/incorpLoginImg.png";
import { ReactComponent as LinkedIn } from "../../../assets/svg/linkedin.svg";
import { ReactComponent as Google } from "../../../assets/svg/google.svg";
import { ReactComponent as Fb } from "../../../assets/svg/fb.svg";
import { TextInput } from "../../../components/reusables/TextInput";
import { CustomButton } from "../../../components/buttons/CustomButton";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { ToastNotify } from "../../../components/reusables/helpers/ToastNotify";
import { responseMessageHandler } from "../../../utils/libs";
import { loginSchema } from "../../../utils/validationSchema/login.validations";
import { loginUrl } from "../../../utils/apiURLs/requests";
import useApiRequest from "../../../utils/hooks/useApiRequest";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../../Redux/slices/authSlice";
import useToggle from "../../../utils/hooks/useToggle";
import PageLoader from "../../../components/PageLoader";

const Login = () => {
  const navigate = useNavigate();
  const [loading, toggleLoading] = useToggle();
  const makeRequest = useApiRequest();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async () => {
      toggleLoading();
      const payload = {
        email: values?.email,
        password: values?.password,
      };
      try {
        const response = await makeRequest.post(loginUrl, payload);
        toggleLoading();
        if (response?.status === 200) {
          const role = response?.data?.data?.role;
          ToastNotify({
            type: "success",
            message: responseMessageHandler({ response }),
            position: "top-right",
          });
          dispatch(loginSuccess(response?.data?.data));

          console.log(role);

          if (role === "Applicant") {
            navigate("/dashboard/jobseeker");
          }
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

    validationSchema: loginSchema,
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
      {loading && <PageLoader message="Logging in" />}
      {/* image */}
      <div className="md:max-h-screen w-full">
        <img className="object-contain h-screen" src={Img} alt="Incorp" />
      </div>

      {/* login details */}
      <div className="flex flex-col space-y-3 mx-20 items-center justify-center">
        <div className="font-bold">Login</div>
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
            name="email"
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors?.firstName}
            hasError={errors?.firstName}
            values={values?.firstName}
            label="Email"
          />
          <TextInput
            name="password"
            type="password"
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors?.firstName}
            hasError={errors?.firstName}
            values={values?.firstName}
            label="Password"
          />
        </div>
        <div className="w-full">
          <CustomButton
            labelText={"Log In"}
            containerVariant="py-2 px-5 w-full rounded-xl flex justify-center"
            buttonVariant="primary"
            handleClick={() => handleSubmit()}
          />
        </div>
        <div className="text-black font-bold text-sm">Reset Password</div>
        <div className="text-black font-bold text-sm">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register/jobseeker")}
            className="text-[#1ACAA6] cursor-pointer"
          >
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
