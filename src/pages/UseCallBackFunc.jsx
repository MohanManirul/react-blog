import React, { useState } from 'react';

function UseCallBackFunc() {
  const [count, setCount] = useState(0);

  // handleClick প্রতি রেন্ডারে নতুন ফাংশন তৈরি হবে
  const handleClick = () => {
    console.log('Parent rendered');
    setCount(count + 1);
  };

  return (
    <div>
      <Child onClick={handleClick} />
      <p>Count: {count}</p>
    </div>
  );
}

function Child({ onClick }) {
  console.log('Child rendered');
  return <button onClick={onClick}>Increment</button>;
}

export default UseCallBackFunc;
