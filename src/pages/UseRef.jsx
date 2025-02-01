import { useRef, useState } from "react";

const UseRef = () => {
    const renderCount = useRef(0); // 🟢 রেন্ডার কাউন্ট সংরক্ষণ করবে

  const [count, setCount] = useState(0);

  renderCount.current += 1; // প্রতিবার কম্পোনেন্ট রেন্ডার হলে মান বাড়বে
  console.log("Component Rendered!");
    return (
         <div>
            <h1>Count: {count}</h1>
            <h2>Component Rendered: {renderCount.current} times</h2>
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
            <hr />
            <p>"Persist values between renders" বলতে বোঝায় একটি ভ্যালু সংরক্ষণ করা যাতে তা component rerender হলেও হারিয়ে না যায়।</p>
            <p>useRef() এমন ভ্যালু সংরক্ষণ করতে পারে যা rerender হলেও পরিবর্তিত হয় না।
            👉 এটি state-এর মতো কাজ করে, কিন্তু state পরিবর্তন করলে rerender হয়, আর useRef() করলে rerender হয় না।
            </p> 
            <hr />
            <p>useRef() দিয়ে Mutable Value Store করার উদাহরণ</p>
        </div>
    );
};

export default UseRef;

// এখানে, renderCount.current রেন্ডারের মধ্যে মান সংরক্ষণ করছে, কিন্তু state আপডেট করলে কম্পোনেন্ট rerender হলেও এটি পরিবর্তন হচ্ছে না।