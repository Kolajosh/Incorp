import React, { useState } from "react";
import { TextInput } from "../../../../components/reusables/TextInput";
import { CustomButton } from "../../../../components/buttons/CustomButton";
import ProfileNavigator from "./ProfileNavigator";
import DragDrop from "../../../../components/DnD/DragDrop";
import SelectField from "../../../../components/reusables/SelectField";
import { ReactComponent as Plus } from "../../../../assets/svg/plus.svg";
import CenterModal from "../../../../components/Modal/CenterModal";

const Profile = () => {
  const [selectedNav, setSelectedNav] = useState("Profile");
  const [modal, toggleModal] = useState(false);
  const [file, setFile] = useState("");
  console.log(file);

  return (
    <>
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
              <SelectField label={"Education"} />
              <TextInput label="Title" />
            </div>
            <div>
              <TextInput label="Personnal Website" />
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
