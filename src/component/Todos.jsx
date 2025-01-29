import React from "react";

function Todos({ handleClick }) {
  console.log("🎈 Child Component Re-rendered!");

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={handleClick}>Click from Child</button>
    </div>
  );
}

export default Todos;
