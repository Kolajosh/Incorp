// registration/login requests
export const jobSeekerRegistrationUrl = "/Authentication/register-applicant";
export const employerRegistrationUrl = "/Authentication/register-recruiter";
export const loginUrl = "/Authentication/login";

// Admin
export const SearchUsers = "/Admin/search-user";
export const GetUnverifiedUsers = "/Admin/get-unverified-recruiters";
export const VerifyUser = "/Admin/verify-recruiter";
export const GetAllUsers = "/Admin/get-all-users";
export const DeleteUser = "/Admin/delete-user";

//employer
export const CreateProfile = "/Recruiter/create-profile";
export const CreateJob = "/Recruiter/Create-Job";
export const GetCreatedJobs = "/Recruiter/get-created-jobs";

//jobseeker
export const GetAllJobs = "/Applicant/active-jobs";
export const ApplyJob = "/Applicant/apply-Job";
export const CreateProfileApplicant = "/Applicant/create-profile";
export const GetAppliedJobs = "/Applicant/get-applied-jobs";
export const GetQuestions = "/Applicant/get-test-questions";
export const SubmitQuestions = "/Applicant/submit-test";

//shared
export const UploadDoc = "/Shared/upload-file";
