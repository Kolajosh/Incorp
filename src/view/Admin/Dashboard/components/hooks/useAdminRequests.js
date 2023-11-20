import React, { useState } from "react";
import useApiRequest from "../../../../../utils/hooks/useApiRequest";
import {
  GetUnverifiedUsers,
  SearchUsers,
  VerifyUser,
} from "../../../../../utils/apiURLs/requests";
import useToggle from "../../../../../utils/hooks/useToggle";

const useAdminRequests = () => {
  const makeRequest = useApiRequest();
  const [unverifiedUsers, setUnverifiedUsers] = useState([]);
  const [loading, toggleLoading] = useToggle();

  const getAllUsers = async () => {
    try {
      const response = await makeRequest.get(SearchUsers, {
        params: { value: "" },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllUnverifiedUsers = async () => {
    toggleLoading();
    try {
      const response = await makeRequest.get(GetUnverifiedUsers);
      toggleLoading();
      if (response?.data?.actionMessage === "Success") {
        setUnverifiedUsers(response?.data?.data);
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
    getAllUsers,
    getAllUnverifiedUsers,
    verifyUser,
    unverifiedUsers,
    loading,
    toggleLoading,
  };
};

export default useAdminRequests;
