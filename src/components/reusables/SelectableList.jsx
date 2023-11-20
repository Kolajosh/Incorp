import React, { useState, useEffect } from "react";

const SelectableList = ({ items, label, onSelectionChange }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemClick = (item) => {
    // Check if the item is already selected
    if (selectedItems.includes(item)) {
      // If selected, remove it from the selected items
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      // If not selected, add it to the selected items
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, item]);
    }
  };

  // Use useEffect to listen for changes in selectedItems and call the callback
  useEffect(() => {
    onSelectionChange(selectedItems);
  }, [selectedItems, onSelectionChange]);

  return (
    <div>
      <div className="font-semibold mb-2.5 text-black text-opacity-[50%] text-sm">
        {label}
      </div>
      <ul
        className="gap-5"
        style={{ display: "flex", listStyle: "none", padding: 0 }}
      >
        {items.map((item) => (
          <li
            key={item}
            onClick={() => handleItemClick(item)}
            style={{
              background: selectedItems.includes(item)
                ? "#1ACAA640"
                : "transparent",
              color: selectedItems.includes(item) && "black",
              cursor: "pointer",
              marginRight: "8px", // Adjust spacing between items
            }}
            className="px-5 py-2"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectableList;
