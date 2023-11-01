import React, { useState } from "react";

const CheckedList = ({ label, items, selected, onSelect }) => {
  const handleItemClick = (item) => {
    onSelect(item);
  };

  return (
    <div>
      <div className="text-sm mb-3 ">{label}</div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={selected === item}
                onChange={() => handleItemClick(item)}
                className="rounded-md"
              />
              <span className="ml-3 text-sm">{item}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckedList;
