import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../view/JobSeeker/Login/Login";
import JobSeekerRegister from "../view/JobSeeker/Onboarding/JobSeekerRegister";
import EmployerRegistration from "../view/JobSeeker/Onboarding/EmployerRegistration";
import EmployerPendingReg from "../view/JobSeeker/Onboarding/EmployerPendingReg";
import LandingPage from "../view/JobSeeker/LandingPage/LandingPage";
import JobSeekerDashboard from "../view/JobSeeker/Dashboard/JobSeekerDashboard";
import JobDetails from "../view/JobSeeker/Dashboard/JobDetails";
import JobSeekerProfile from "../view/JobSeeker/Dashboard/JobSeekerProfile";
import JobSeekerOverview from "../view/JobSeeker/Dashboard/JobSeekerOverview";
import JobApplication from "../view/JobSeeker/Dashboard/JobApplication";
import AdminDashboard from "../view/Admin/Dashboard/AdminDashboard";
import DashboardProfile from "../view/Admin/Dashboard/DashboardProfile";
import AdminJobs from "../view/Admin/Dashboard/AdminJobs";
import EmployerDashboard from "../view/Employer/Dashboard/EmployerDashboard";
import EmployerProfile from "../view/Employer/Dashboard/EmployerProfile";
import EmployerPostJob from "../view/Employer/Dashboard/EmployerPostJob";

const AppRoutes = () => {
  return (
    <Routes>
      {/* jobseeker */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register/jobseeker" element={<JobSeekerRegister />} />
      <Route path="/register/employer" element={<EmployerRegistration />} />
      <Route
        path="/register/employer/pending"
        element={<EmployerPendingReg />}
      />
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
      <Route
        path="/dashboard/jobseeker/overview"
        element={<JobSeekerOverview />}
      />
      <Route
        path="/dashboard/jobseeker/application"
        element={<JobApplication />}
      />

      {/* employer */}
      <Route path="/dashboard/employer/" element={<EmployerDashboard />} />
      <Route path="/dashboard/employer/profile" element={<EmployerProfile />} />
      <Route path="/dashboard/employer/post" element={<EmployerPostJob />} />


      {/* admin */}
      <Route path="/dashboard/admin/" element={<AdminDashboard />} />
      <Route path="/dashboard/admin/profile" element={<DashboardProfile />} />
      <Route path="/dashboard/admin/users" element={<AdminJobs />} />
    </Routes>
  );
};

export default AppRoutes;
