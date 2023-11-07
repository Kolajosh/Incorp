import React, { forwardRef, useLayoutEffect, useState } from "react";
import Preloader from "../mics/Preloader";
import { ReactComponent as Linkedin } from "../../assets/svg/ri_linkedin-fill.svg";
import { ReactComponent as Facebook } from "../../assets/svg/ri_facebook-fill.svg";
import { ReactComponent as Twitter } from "../../assets/svg/ri_twitter-fill.svg";
import { ReactComponent as Instagram } from "../../assets/svg/ri_instagram-line.svg";
import { ReactComponent as Phone } from "../../assets/svg/ion_call-sharp.svg";
import { ReactComponent as Email } from "../../assets/svg/clarity_email-line.svg";

export const SocialInput = forwardRef(
  (
    {
      autoFocus = false,
      containerVariant = "w-full flex flex-col",
      type = "text",
      name,
      label,
      handleChange,
      handleBlur,
      value = "",
      error,
      hasError = false,
      placeHolder = "Enter text",
      variant = "text-black w-full h-12 text-lg px-5",
      iconType = "", // Add a prop for specifying the social media icon type
      isDisabled = false,
      isLoading = false,
      success = false,
      maxLength,
      isPin,
    },
    ref
  ) => {
    const [localValue, setLocalValue] = useState();

    useLayoutEffect(() => {
      setLocalValue(value);
    }, [value]);

    const validationFulfilled = value !== "" && success;

    const renderSocialIcon = () => {
      if (iconType === "linkedin") {
        return (
          <div className="absolute top-3">
            <Linkedin
              style={{ fill: "#000000", width: "25px", height: "25px" }}
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
            />
            <span className="pl-12 text-black text-opacity-50 text-xs">
              LinkedIn
            </span>
          </div>
        );
      } else if (iconType === "facebook") {
        return (
          <div className="absolute top-3">
            <Facebook
              style={{ fill: "#000000", width: "25px", height: "25px" }}
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
            />
            <span className="pl-12 text-black text-opacity-50 text-xs">
              Facebook
            </span>
          </div>
        );
      } else if (iconType === "twitter") {
        return (
          <div className="absolute top-3">
            <Twitter
              style={{ fill: "#000000", width: "25px", height: "25px" }}
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
            />
            <span className="pl-12 text-black text-opacity-50 text-xs">
              Twitter
            </span>
          </div>
        );
      } else if (iconType === "instagram") {
        return (
          <div className="absolute top-3">
            <Instagram
              style={{ fill: "#000000", width: "25px", height: "25px" }}
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
            />
            <span className="pl-12 text-black text-opacity-50 text-xs">
              Instagram
            </span>
          </div>
        );
      } else if (iconType === "phone") {
        return (
          <div className="absolute top-3">
            <Phone
              style={{ width: "25px", height: "25px" }}
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
            />
            <span className="pl-12 text-black text-opacity-50 text-xs">
              +234
            </span>
          </div>
        );
      } else if (iconType === "email") {
        return (
          <div className="absolute top-3">
            <Email
              style={{ width: "25px", height: "25px" }}
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
            />
            <span className="pl-12 text-black text-opacity-50 text-xs">
              Email Address
            </span>
          </div>
        );
      }
    };

    return (
      <div className={containerVariant}>
        {label && (
          <div className="flex items-center justify-between font-jarkata font-normal">
            <label
              htmlFor={`input-${name}`}
              className={`font-semibold mb-2.5
                      ${
                        isDisabled
                          ? "text-gray-300"
                          : "text-black text-opacity-[50%] text-xs"
                      }`}
            >
              {label}
            </label>
          </div>
        )}
        {isLoading && (
          <div className="relative">
            <span className="absolute text-[#AB0B4B] ml-5 right-1.5 top-3">
              {isLoading && (
                <Preloader
                  variant="w-6 h-6"
                  currentColor="#AB0B4B"
                  currentFill="#F8E8E8"
                />
              )}
            </span>
          </div>
        )}
        {validationFulfilled && (
          <div className="relative">
            <span className="absolute text-[#AB0B4B] ml-5 right-1.5 top-3">
              {validationFulfilled && "good"}
            </span>
          </div>
        )}
        <div className="relative">
          {iconType && renderSocialIcon()}
          <input
            ref={ref}
            name={name}
            type={type}
            className={` 
        focus:outline-none text-sm text-black border border-[#000000] border-opacity-[10%] z-2 bg-[#ffffff] ovtline-none placeholder:text-xs placeholder:text-[#939393] rounded-xl
        ${iconType ? "pl-36" : ""} 
        ${
          isDisabled
            ? `cursor-not-allowed border-gray-100 bg-gray-50 placeholder:text-gray-300`
            : "bg-lib-alat-gray-input placeholder:text-white-300 border-lib-alat-gray-input-border"
        }
        ${
          success &&
          !hasError &&
          "valid:border-[#3BB54A] focus:valid:border-[#3BB54A]"
        }
        ${hasError && "border-red-500 focus:border-red-500"}
        ${variant}`}
            value={localValue}
            onChange={(event) => {
              const re = /^[0-9\b]+$/;
              if (
                isPin &&
                event.target.value !== "" &&
                re.test(event.target.value) === false
              )
                return false;
              if (isPin && maxLength && event.target.value.length > maxLength)
                return false;
              setLocalValue(event?.target?.value);
              handleChange(event);
            }}
            onBlur={handleBlur}
            placeholder={placeHolder}
            disabled={isDisabled}
            autoFocus={autoFocus}
            maxLength={maxLength}
          />
        </div>
        {hasError && (
          <div className="flex gap-2">
            <p className="text-red-500 text-[10px] h-auto py-1 font-openSans">
              {error}
            </p>
          </div>
        )}
      </div>
    );
  }
);
