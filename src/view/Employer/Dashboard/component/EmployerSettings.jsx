import React from "react";
import { SocialInput } from "../../../../components/reusables/SocialInput";
import { TextInput } from "../../../../components/reusables/TextInput";
import { ReactComponent as Close } from "../../../../assets/svg/Close.svg";

const EmployerSettings = () => {
  return (
    <div className="m-5">
      <div className="space-y-5">
        <SocialInput
          label="Phone"
          iconType="phone"
          showSocialIcons={true}
          placeHolder=""
        />
        <SocialInput
          label="Email"
          iconType="email"
          showSocialIcons={true}
          placeHolder=""
        />
        <div>
          <button className="px-4 py-2 bg-[#1ACAA6] text-[#fff] rounded-lg">
            Save Changes
          </button>
        </div>

        <div>
          <hr />
        </div>

        <div className="font-semibold text-[#00000099]">Change Password</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <TextInput label="Current Password" isPin />
          <TextInput label="New Password" isPin />
          <TextInput label="Confirm Password" isPin />
        </div>
        <div>
          <button className="px-4 py-2 bg-[#1ACAA6] text-[#fff] rounded-lg">
            Save Changes
          </button>
        </div>

        <div>
          <hr />
        </div>

        <div className="font-semibold flex gap-5 items-center text-[#00000099]">
          Delete Account
          <span>
            <Close />
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmployerSettings;
