import React, { useState } from "react";

const CheckedList = ({ label, items, selected, onSelect, multiSelect }) => {
  const handleItemClick = (item) => {
    if (multiSelect) {
      // If multiSelect is true, toggle the selected state of the item
      const isSelected = selected.includes(item);
      if (isSelected) {
        onSelect(selected.filter((selectedItem) => selectedItem !== item));
      } else {
        onSelect([...selected, item]);
      }
    } else {
      // If multiSelect is false, select only the clicked item
      onSelect([item]);
    }
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
                checked={selected.includes(item)}
                onChange={() => handleItemClick(item)}
                className="rounded-md appearance-none border-2 border-[#1ACAA6] w-5 h-5 checked:bg-[#1ACAA6]"
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
