import React, { forwardRef, useLayoutEffect, useState } from "react";
import Preloader from "../mics/Preloader";

export const TextArea = forwardRef(
  (
    {
      autoFocus = false,
      containerVariant = "w-full flex flex-col",
      name,
      label,
      handleChange,
      handleBlur,
      value = "",
      error,
      hasError = false,
      placeHolder = "Enter text",
      variant = "text-black w-full text-lg px-5",
      isDisabled = false,
      isLoading = false,
      success = false,
      maxLength,
    },
    ref
  ) => {
    const [localValue, setLocalValue] = useState("");

    useLayoutEffect(() => {
      if (value !== "") {
        setLocalValue(value);
      }
    }, [value]);

    const validationFulfilled = value !== "" && success;

    return (
      <div className={`${containerVariant}`}>
        {label && (
          <div className="flex items-center justify-between font-jarkata font-normal">
            <label
              htmlFor={`input-${name}`}
              className={`font-semibold mb-2.5 ${
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

        <textarea
          ref={ref}
          name={name}
          className={`
          focus:outline-none text-sm text-black border border-[#000000] border-opacity-[10%] z-2 bg-[#ffffff] ovtline-none placeholder:text-xs placeholder:text-[#939393] rounded-xl
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
          ${variant}
        `}
          value={localValue}
          onChange={(event) => {
            if (maxLength && event.target.value.length > maxLength) return;
            setLocalValue(event?.target?.value);
            handleChange(event);
          }}
          onBlur={handleBlur}
          placeholder={placeHolder}
          disabled={isDisabled}
          autoFocus={autoFocus}
          maxLength={maxLength}
        />

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

// Important note
// This input can manage text area input.
