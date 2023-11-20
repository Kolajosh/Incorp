import * as Yup from "yup";

export const employerRegValidationSchema = Yup.object().shape({
  companyName: Yup.string()
    .required("Company Name is required")
    .min(2, "Company Name must be at least 2 characters"),
  registrationNumber: Yup.string()
    .required("Company registration is required")
    .min(2, "Company registration must be at least 2 characters")
    .max(50, "Company registration cannot exceed 50 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  password2: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
