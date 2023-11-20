import React, { useState } from "react";
import useToggle from "../../../../utils/hooks/useToggle";
import { GetAllJobs } from "../../../../utils/apiURLs/requests";
import useApiRequest from "../../../../utils/hooks/useApiRequest";

const useJobseekerRequests = () => {
  const makeRequest = useApiRequest();
  const [jobs, setJobs] = useState([]);
  const [loading, toggleLoading] = useToggle();

  //   const getAllUsers = async () => {
  //     try {
  //       const response = await makeRequest.get(SearchUsers, {
  //         params: { value: "" },
  //       });
  //       console.log(response);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const getAllJobs = async () => {
    toggleLoading();
    try {
      const response = await makeRequest.get(GetAllJobs);
      toggleLoading();
      if (response?.data?.actionMessage === "Success") {
        setJobs(response?.data?.data);
      }
      console.log(response);
    } catch (error) {
      toggleLoading();
      console.log(error);
    }
  };

  const verifyUser = async (payloadData) => {
    toggleLoading();
    const payload = payloadData;
    console.log(payloadData);
    // try {
    //   const response = await makeRequest.put(VerifyUser, payload);
    //   // if (response?.data?.actionMessage === "Success") {
    //   //   setUnverifiedUsers(response?.data?.data);
    //   // }
    //   toggleLoading();
    //   console.log(response);
    // } catch (error) {
    //   toggleLoading();
    //   console.log(error);
    // }
  };

  return {
    getAllJobs,
    jobs,
    // getAllUnverifiedUsers,
    verifyUser,
    // unverifiedUsers,
    loading,
    toggleLoading,
  };
};

export default useJobseekerRequests;
