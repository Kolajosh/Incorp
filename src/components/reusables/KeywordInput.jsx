import React, { useState } from "react";

const KeywordInput = ({ onKeywordsChange }) => {
  const [keywords, setKeywords] = useState([""]);

  const handleAddKeyword = () => {
    setKeywords([...keywords, ""]);
  };

  const handleKeywordChange = (index, value) => {
    const newKeywords = [...keywords];
    newKeywords[index] = value;
    setKeywords(newKeywords);
    // Pass the updated keywords to the parent component
    onKeywordsChange(newKeywords);
  };

  const handleRemoveKeyword = (index) => {
    const newKeywords = [...keywords];
    newKeywords.splice(index, 1);
    setKeywords(newKeywords);
    // Pass the updated keywords to the parent component
    onKeywordsChange(newKeywords);
  };

  return (
    <div>
      {keywords.map((keyword, index) => (
        <div key={index} className="flex items-center space-x-2 mb-2">
          <input
            type="text"
            value={keyword}
            onChange={(e) => handleKeywordChange(index, e.target.value)}
            placeholder="Enter keyword"
            className="border border-gray-300 p-2 rounded-lg"
          />
          <button
            type="button"
            onClick={() => handleRemoveKeyword(index)}
            className="bg-transparent text-xs text-red-500 px-3 py-2 rounded"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddKeyword}
        className="bg-transparent text-sm text-green-500 px-3rounded"
      >
        Add
      </button>
    </div>
  );
};

export default KeywordInput;
