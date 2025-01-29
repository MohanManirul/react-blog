import React, { useState, useCallback } from "react";
import Todos from "../component/Todos";

function UseCallBackFunc() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // useCallback ব্যবহার করলে handleClick শুধুমাত্র count পরিবর্তিত হলে নতুন তৈরি হবে
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]); // শুধুমাত্র count পরিবর্তন হলে handleClick নতুন তৈরি হবে

  console.log("🔄 Parent Re-rendered!");

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increase</button>
      <input 
        type="text" 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type something..." 
      />
      <Todos handleClick={handleClick} />
    </div>
  );
}

export default UseCallBackFunc;
