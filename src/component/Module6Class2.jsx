import React, { useState } from "react";

const Module6Class2 = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  const expensiveCalculation = () => {
    console.log("Running expensive calculation...");
    return count * 2;
  };

  const result = expensiveCalculation();

  return (
    <div>
      <p>Count: {count}</p>
      <p>Result: {result}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOtherState(!otherState)}>Toggle Other State</button>
    </div>
  );
};

export default Module6Class2;
