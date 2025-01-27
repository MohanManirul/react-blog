import React, { useState } from "react";
import Module6Class2 from './../component/Module6Class2';

function InputArrayForm() {
  const [stringValue, setStringValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [dataArray, setDataArray] = useState([]);

  const handleSubmit = () => {
    if (stringValue && dateValue) {
      const newEntry = { string: stringValue, date: dateValue };
      setDataArray([...dataArray, newEntry]); // নতুন entry array-তে যোগ করা
      setStringValue(""); // input reset
      setDateValue("");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <Module6Class2 />
    </div>
  );
}

export default InputArrayForm;
