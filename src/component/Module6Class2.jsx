import React from 'react';

const Module6Class2 = () => {
      function ChildComponent({ handleClick }) {
        return <button onClick={handleClick}>Click Me</button>;
      }
      
      function ParentComponent() {
        const handleChildClick = () => {
          console.log("Button clicked in Child Component");
        };
      
        return <ChildComponent handleClick={handleChildClick} />;
      }
      
  return (
    <div>
      
    </div>
  );
};

export default Module6Class2;