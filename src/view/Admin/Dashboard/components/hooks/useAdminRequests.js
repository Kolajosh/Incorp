import React, { useState } from "react";
import useApiRequest from "../../../../../utils/hooks/useApiRequest";
import {
  DeleteUser,
  GetAllUsers,
  GetUnverifiedUsers,
  SearchUsers,
  VerifyUser,
} from "../../../../../utils/apiURLs/requests";
import useToggle from "../../../../../utils/hooks/useToggle";
import { ToastNotify } from "../../../../../components/reusables/helpers/ToastNotify";
import { responseMessageHandler } from "../../../../../utils/libs";

const useAdminRequests = () => {
  const makeRequest = useApiRequest();
  const [unverifiedUsers, setUnverifiedUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, toggleLoading] = useToggle();

  const getAllUsers = async () => {
    try {
      const response = await makeRequest.get(GetAllUsers);
      console.log(response);
      if (response?.data?.actionMessage === "Success") {
        setAllUsers(response?.data?.data);
      }
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

  const deleteUser = async (email) => {
    toggleLoading();
    try {
      const response = await makeRequest.delete(`${DeleteUser}/${email}`);
      toggleLoading();
      if (response?.data?.actionMessage === "Success") {
        ToastNotify({
          type: "success",
          message: responseMessageHandler({ response }),
          position: "top-right",
        });
        getAllUsers()
      }
      console.log(response);
    } catch (error) {
      toggleLoading();
      ToastNotify({
        type: "error",
        message: responseMessageHandler({ error }),
        position: "top-right",
      });
    }
  };

  const verifyUser = async (payloadData) => {
    toggleLoading();
    const payload = { email: payloadData };
    try {
      const response = await makeRequest.put(VerifyUser, payload);
      if (response?.data?.actionMessage === "Success") {
        ToastNotify({
          type: "success",
          message: responseMessageHandler({ response }),
          position: "top-right",
        });
        getAllUnverifiedUsers();
      }
      toggleLoading();
    } catch (error) {
      toggleLoading();
      ToastNotify({
        type: "error",
        message: responseMessageHandler({ error }),
        position: "top-right",
      });
    }
  };

  return {
    allUsers,
    deleteUser,
    getAllUsers,
    getAllUnverifiedUsers,
    verifyUser,
    unverifiedUsers,
    loading,
    toggleLoading,
  };
};

export default useAdminRequests;
