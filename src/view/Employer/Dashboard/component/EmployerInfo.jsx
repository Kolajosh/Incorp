import React, { useState } from "react";
import { TextInput } from "../../../../components/reusables/TextInput";
import DragDrop from "../../../../components/DnD/DragDrop";
import { TextArea } from "../../../../components/reusables/TextArea";
import { useFormik } from "formik";
import useApiRequest from "../../../../utils/hooks/useApiRequest";
import { CreateProfile } from "../../../../utils/apiURLs/requests";
import { responseMessageHandler } from "../../../../utils/libs";
import useToggle from "../../../../utils/hooks/useToggle";
import { ToastNotify } from "../../../../components/reusables/helpers/ToastNotify";
import PageLoader from "../../../../components/PageLoader";

const EmployerInfo = () => {
  const [selectedNav, setSelectedNav] = useState("Profile");
  const [modal, toggleModal] = useState(false);
  const [file, setFile] = useState("");
  const makeRequest = useApiRequest();
  const [loading, toggleLoading] = useToggle();

  const formik = useFormik({
    initialValues: {
      title: "",
      aboutUs: "",
    },

    onSubmit: async () => {
      toggleLoading();
      const payload = {
        aboutUs: values?.aboutUs,
        // organizationType: "string",
        // industryType: "string",
        // teamSize: 0,
        // yearsOfEstablishment: 0,
        // companyVision: "string",
        // faceBookLink: "string",
        // twitterLink: "string",
        // linkedInLink: "string",
        // instagramLink: "string",
        // signedInEmail: "string",
      };
      try {
        const response = await makeRequest.post(CreateProfile, payload);
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

  console.log(values?.aboutUs);

  return (
    <>
      {loading && <PageLoader />}
      <div className="px-5 space-y-5 my-5">
        <div className="font-semibold">Logo & Banner Image</div>
        <div className="grid grid-cols-3 items-center gap-5">
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
            <div className="mt-5">
              <DragDrop
                onFileSelect={setFile}
                accept={["image/jpg", "image/png"]}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <TextInput
            label="Title"
            name={"title"}
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors?.title}
            hasError={errors?.title}
            values={values?.title}
          />
        </div>
        <div>
          <TextArea
            label="About Us"
            name="aboutUs"
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors?.aboutUs}
            hasError={errors?.aboutUs}
            values={values?.aboutUs}
          />
        </div>
        <div>
          <button
            onClick={() => handleSubmit()}
            className="px-5 py-2 bg-[#1ACAA6] text-[#fff] rounded-lg"
          >
            Save Changes
          </button>
        </div>
      </div>

      {/* {modal && (
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
      )} */}
    </>
  );
};

export default EmployerInfo;
