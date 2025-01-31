import React, { useState } from "react";

function ChildButton({ onClick }) {
  console.log("Child Button Rendered!");
const [text , setText] = useState("Initial Text");

const handleDecreaseClick =()=>{
    setText("Decrease Button Clicked !");
}
  return (
    <div>
      <button onClick={onClick}>Increase</button>
      <button onClick={handleDecreaseClick}>Decrease</button>
      <p>{text}</p>
    </div>
  );
}


export default ChildButton;