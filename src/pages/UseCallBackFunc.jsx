import React, { useState, useCallback, useRef } from "react";
import ChildButton from "./ChildButton";

// React-এর useState যখন নতুন অবজেক্ট সেট করে, তখন এটি পুরো অবজেক্ট রিপ্লেস করে, যেহেতু setMyObj নতুন অবজেক্ট পাস করলে আগের অবজেক্ট হারিয়ে যায়। তাই, আগের অবজেক্টের অবশিষ্ট অংশ রাখতে হলে, spread operator (...) ব্যবহার করতে হবে।

// হ্যাঁ, এখানে immutability principle পুরোপুরি কাজ করছে। React-এ state immutable, অর্থাৎ state সরাসরি পরিবর্তন (mutate) করা যায় না। পরিবর্তে, প্রতিবার নতুন state তৈরি করে সেট করতে হয়।

function Parent() {
const [myObj , setMyObj] = useState({
      key1:"Value 1",
      key2:"Value 2",
      key3:"Value 3",
    });

    const change = () => {
      setMyObj(prevState => ({
        ...prevState, // আগের অবজেক্টের সব কপি রাখছি
        key1: "New Value 1",
        key2: "New Value 2",
      }));
    };

    // const change = () => {
    //   myObj.key1 = "New Value 1"; // ❌ সরাসরি state পরিবর্তন
    //   myObj.key2 = "New Value 2";
    //   setMyObj(myObj); // ❌ সরাসরি আগের object সেট করলে React rerender করবে না
    // };
    

  const [count, setCount] = useState(0);

  console.log("Parent Re-rendered!");


  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);


  const buttonRef = useRef(null);

  if (!buttonRef.current) {
    buttonRef.current = <ChildButton onClick={handleClick} />;
  }

  return (
    <div>
      <p>Count: {count}</p>
      {buttonRef.current}
      <hr />
      <h1>{myObj.key1}</h1>
      <h1>{myObj.key2}</h1>
      <h1>{myObj.key3}</h1>
      <hr />
      <button onClick={change}>Change Value</button>
    </div>
  );
}

export default Parent;