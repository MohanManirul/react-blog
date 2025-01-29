import React from 'react';

const ChildComponent = ({ onIncrement }) => {
  function ChildComponent({ onIncrement }) {
    console.log('Child rendered');
    
  }

  return (
    <div>
      return <button onClick={ChildComponent}>Increment</button>;
    </div>
  );
};

export default ChildComponent;