import React from "react";

const ToggleButton = ({ label, value, onChange }) => {
  const handleChange = () => {
    onChange(!value);
  };

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm font-normal">{label}</span>
      <label className="relative cursor-pointer ml-2">
        <input
          type="checkbox"
          className="sr-only"
          checked={value}
          onChange={handleChange}
        />
        <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
      </label>
    </div>
  );
};

export default ToggleButton;
