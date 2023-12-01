import React, { useEffect, useState } from "react";

const NigerianCurrencyFormatter = ({ number }) => {
  const [formattedNumber, setFormattedNumber] = useState("");

  useEffect(() => {
    // Check if the input is a valid number
    if (typeof number === "number" && !isNaN(number)) {
      // Format the number to Nigerian currency (NGN)
      const options = { style: "currency", currency: "NGN" };
      const formatted = number.toLocaleString("en-NG", options);
      setFormattedNumber(formatted);
    } else {
      setFormattedNumber("");
    }
  }, [number]);

  return <span>{formattedNumber}</span>;
};

export default NigerianCurrencyFormatter;
