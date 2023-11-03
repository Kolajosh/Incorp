import React, { useState, useRef } from "react";
import { ReactComponent as Dnd } from "../../assets/svg/dnd.svg";
import { ToastNotify } from "../reusables/helpers/ToastNotify";

const DragDrop = ({ onFileSelect }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    // Handle the dropped file here
    setSelectedFile(file);
    onFileSelect(file); // Call the callback function with the selected file
  };

  const handleUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];

    // Check if a file is selected
    if (!file) {
      ToastNotify({
        type: "warning",
        message: "Please select a file.",
        position: "top-right",
      });
      setSelectedFile(null);
      return;
    }

    // Check file size
    if (file.size > 12 * 1024 * 1024) {
      // File size exceeds 12MB
      ToastNotify({
        type: "warning",
        message: "File size exceeds the maximum limit of 12MB.",
        position: "top-right",
      });
      setSelectedFile(null);
      return;
    }

    // Check file type
    if (file.type !== "application/pdf") {
      // File is not a PDF
      ToastNotify({
        type: "warning",
        message: "Only PDF files are allowed.",
        position: "top-right",
      });
      setSelectedFile(null);
      return;
    }

    // If all checks pass, handle the valid PDF file
    setSelectedFile(file);
    onFileSelect(file); // Call the callback function with the selected file
  };

  const handleRemove = () => {
    setSelectedFile(null);
    onFileSelect(null); // Call the callback function with null to indicate removal of the file
  };

  return (
    <div className="flex gap-10 justify-between">
      <div
        className={`w-full font-jarkata bg-[#EFF6F580] relative flex flex-col items-center justify-center py-16 border-2 border-dashed border-[#0000004D] ${
          isDragging ? "border-blue-500" : "border-white"
        }`}
        onDragEnter={handleDragEnter}
        onDragOver={(e) => e.preventDefault()}
        onDragLeave={handleDragLeave}
        onDrop={(e) => handleDrop(e)}
      >
        {selectedFile ? (
          <div className="text-center text-lg text-black">
            <p>File selected: {selectedFile.name}</p>
            <button
              className="mt-4 px-4 py-2 text-sm text-white bg-red-500 rounded hover:bg-red-600"
              onClick={handleRemove}
            >
              Remove File
            </button>
          </div>
        ) : (
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <Dnd />
            </div>
            <div className="text-lg text-black">
              <span
                className="text-[#000] text-lg font-semibold cursor-pointer"
                onClick={handleUpload}
              >
                Browse File
              </span>{" "}
              <span>Or drop here</span>
            </div>
            <div className="font-medium mt-3">
              Only PDF format. Max file size 12MB
            </div>
            <input
              id="file-upload"
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileInputChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DragDrop;
