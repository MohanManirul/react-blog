import { useState, useRef } from "react";

const InputTracker = () => {

    console.log("Component Rendered!");
    
  const [text, setText] = useState(""); // 🔹 State (Rerender হবে)
  const prevTextRef = useRef(""); // 🔹 Mutable value (Rerender হবে না)
  const inputRef = useRef(null); // 🔹 Input field reference

  const handleChange = (e) => {
    prevTextRef.current = text; // ✅ আগের ইনপুট সংরক্ষণ (Rerender হবে না)
    setText(e.target.value); // ✅ নতুন মান state-এ সেট করা (Rerender হবে)
  };

  const focusInput = () => {
    inputRef.current.focus(); // ✅ Input field-এ ফোকাস দেওয়া হবে (Rerender হবে না)
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={handleChange}
      />
      <h2>Current Value: {text}</h2>
      <h2>Previous Value (without rerendering): {prevTextRef.current}</h2>
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default InputTracker;
