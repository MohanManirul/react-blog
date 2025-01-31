import React from 'react';

const ChildComponent = ({ onClick }) => {
  console.log("Button Rendered!"); // শুধুমাত্র প্রথমবার রেন্ডার হবে
  return <button onClick={onClick}>Increase</button>;
};

export default ChildComponent;