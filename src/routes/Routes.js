import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../view/JobSeeker/Login/Login";
import JobSeekerRegister from "../view/JobSeeker/Onboarding/JobSeekerRegister";
import EmployerRegistration from "../view/JobSeeker/Onboarding/EmployerRegistration";
import LandingPage from "../view/JobSeeker/LandingPage/LandingPage";
import JobSeekerDashboard from "../view/JobSeeker/Dashboard/JobSeekerDashboard";
import JobDetails from "../view/JobSeeker/Dashboard/JobDetails";
import JobSeekerProfile from "../view/JobSeeker/Dashboard/JobSeekerProfile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register/jobseeker" element={<JobSeekerRegister />} />
      <Route path="/register/employer" element={<EmployerRegistration />} />
      {/* <Route path="/landing/jobseeker" element={<LandingPage />} /> */}
      <Route path="/dashboard/jobseeker" element={<JobSeekerDashboard />} />
      <Route
        path="/dashboard/jobseeker/job-details/:id"
        element={<JobDetails />}
      />
      <Route
        path="/dashboard/jobseeker/profile"
        element={<JobSeekerProfile />}
      />
    </Routes>
  );
};

export default AppRoutes;
