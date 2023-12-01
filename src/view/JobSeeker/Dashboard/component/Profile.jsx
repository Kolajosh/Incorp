import React, { useState } from "react";
import { TextInput } from "../../../../components/reusables/TextInput";
import { CustomButton } from "../../../../components/buttons/CustomButton";
import ProfileNavigator from "./ProfileNavigator";
import DragDrop from "../../../../components/DnD/DragDrop";
import SelectField from "../../../../components/reusables/SelectField";
import useApiRequest from "../../../../utils/hooks/useApiRequest";
import { ReactComponent as Plus } from "../../../../assets/svg/plus.svg";
import CenterModal from "../../../../components/Modal/CenterModal";
import { useFormik } from "formik";
import { CreateProfileApplicant } from "../../../../utils/apiURLs/requests";
import { ToastNotify } from "../../../../components/reusables/helpers/ToastNotify";
import { responseMessageHandler } from "../../../../utils/libs";
import useToggle from "../../../../utils/hooks/useToggle";
import PageLoader from "../../../../components/PageLoader";
import { useSelector } from "react-redux";

const Profile = () => {
  const userData = useSelector((state) => state?.auth?.data);
  const makeRequest = useApiRequest();
  const [selectedNav, setSelectedNav] = useState("Profile");
  const [modal, toggleModal] = useState(false);
  const [loading, toggleLoading] = useToggle();
  const [file, setFile] = useState("");

  const [edu, setEdu] = useState("");

  const education = [
    { label: "Bsc", value: "Bsc" },
    { label: "HND", value: "HND" },
    { label: "OND", value: "OND" },
    { label: "Masters", value: "Masters" },
  ];

  const handleEduChange = (selectedOption) => {
    setEdu(selectedOption);
    // Do any other actions you want with the selected option
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      personalWebsite: "",
    },

    onSubmit: async () => {
      toggleLoading();
      const payload = {
        personalWebsite: values?.personalWebsite,
        highestEducation: edu?.value,
        signedInEmail: userData?.email,
      };

      try {
        const response = await makeRequest.post(
          CreateProfileApplicant,
          payload
        );
        toggleLoading();
        if (response?.status === 200) {
          ToastNotify({
            type: "success",
            message: responseMessageHandler({ response }),
            position: "top-right",
          });
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
    <>
      {loading && <PageLoader />}
      <div className="px-5 space-y-5 my-5">
        <div className="font-semibold">Basic Information</div>
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-1">
            <label className="text-sm" htmlFor="">
              Profile Picture
            </label>
            <div className="mt-5">
              <DragDrop
                onFileSelect={setFile}
                accept={["image/jpg", "image/png"]}
              />
            </div>
          </div>

          <div className="col-span-2 space-y-5">
            <div className="grid grid-cols-2 gap-5">
              <SelectField
                label={"Education"}
                options={education}
                setStatus={handleEduChange}
                selectedItem={edu}
              />
              <TextInput
                label="Title"
                name="title"
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors?.title}
                hasError={errors?.title}
                values={values?.title}
              />
            </div>
            <div>
              <TextInput
                label="Personnal Website"
                name="personalWebsite"
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors?.personalWebsite}
                hasError={errors?.personalWebsite}
                values={values?.personalWebsite}
              />
            </div>
            <div className="">
              <div className="pb-2 text-black text-opacity-[50%] text-xs">
                Cv/Resume
              </div>
              <div className="inline-block p-3 rounded-lg border border-black border-opacity-[10%] bg-white">
                <div
                  onClick={() => toggleModal(true)}
                  className="flex cursor-pointer items-center"
                >
                  <div className="mr-3">
                    <Plus />
                  </div>
                  <div>
                    <div className="font-semibold">Add Cv/Resume</div>
                    <div className="text-xs">
                      Browse file or drop here, Only pdf
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => handleSubmit()}
              className={`px-4 py-2 bg-[#1ACAA6] text-[#fff] rounded-lg`}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>

      {modal && (
        <CenterModal
          handleClose={() => toggleModal(false)}
          title={"Add Cv/Resume"}
        >
          <div className="space-y-5">
            <div>
              <DragDrop onFileSelect={setFile} accept={["application/pdf"]} />
            </div>
            <div className="flex justify-between">
              <button className="p-5 bg-[#1ACAA626] text-[#1ACAA6] rounded-lg">
                Cancel
              </button>
              <button className="p-5 bg-[#1ACAA6] text-[#fff] rounded-lg">
                Add Cv/Resume
              </button>
            </div>
          </div>
        </CenterModal>
      )}
    </>
  );
};

export default Profile;
