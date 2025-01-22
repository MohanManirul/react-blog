import React, { useState } from "react";

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
      <h2>Input Form</h2>
      <div style={{ marginBottom: "10px" }}>
        <label>
          String Input:{" "}
          <input
            type="text"
            value={stringValue}
            onChange={(e) => setStringValue(e.target.value)}
            placeholder="Enter a string"
          />
        </label>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>
          Date Input:{" "}
          <input
            type="date"
            value={dateValue}
            onChange={(e) => setDateValue(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleSubmit} style={{ marginBottom: "10px" }}>
        Add to Array
      </button>
      {dataArray.length > 0 && (
        <div>
          <h3>Array Data:</h3>
          <ul>
            {dataArray.map((item, index) => (
              <li key={index}>
                <strong>String:</strong> {item.string}, <strong>Date:</strong> {item.date}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default InputArrayForm;
