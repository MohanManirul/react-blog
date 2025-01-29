import React, { useReducer } from "react";
import ChildComponent from './../component/ChildComponent';

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("Unknown action type");
  }
};

const Module6 = () => {


  const handleChildClick = () => {
    console.log("Button clicked in Child Component");
  };

  return <ChildComponent handleClick={handleChildClick} />;

};

export default Module6;
