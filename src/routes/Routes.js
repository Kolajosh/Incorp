import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../view/JobSeeker/Login/Login";
import JobSeekerRegister from "../view/JobSeeker/Onboarding/JobSeekerRegister";
import EmployerRegistration from "../view/JobSeeker/Onboarding/EmployerRegistration";
import LandingPage from "../view/JobSeeker/LandingPage/LandingPage";
import JobSeekerDashboard from "../view/JobSeeker/Dashboard/JobSeekerDashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register/jobseeker" element={<JobSeekerRegister />} />
      <Route path="/register/employer" element={<EmployerRegistration />} />
      <Route path="/landing/jobseeker" element={<LandingPage />} />
      <Route path="/dashboard/jobseeker" element={<JobSeekerDashboard />} />
    </Routes>
  );
};

export default AppRoutes;
