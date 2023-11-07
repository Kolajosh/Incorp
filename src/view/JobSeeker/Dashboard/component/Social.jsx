import React from "react";
import { SocialInput } from "../../../../components/reusables/SocialInput";

const Social = () => {
  return (
    <div className="m-5">
      <div className="space-y-5">
        <SocialInput
          label="Facebook"
          iconType="facebook"
          showSocialIcons={true}
          placeHolder=""
        />
        <SocialInput
          label="Twitter"
          iconType="twitter"
          showSocialIcons={true}
          placeHolder=""
        />
        <SocialInput
          label="Instagram"
          iconType="instagram"
          showSocialIcons={true}
          placeHolder=""
        />
        <SocialInput
          label="Linkedin"
          iconType="linkedin"
          showSocialIcons={true}
          placeHolder=""
        />
        <div>
          <button className="px-4 py-2 bg-[#1ACAA6] text-[#fff] rounded-lg">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Social;
