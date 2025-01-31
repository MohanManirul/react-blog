import { useState } from "react";

const App = () => {
  const [myObj, setMyObj] = useState({
    key1: "Value 1",
    key2: "Value 2",
    key3: "Value 3",
  });

  const change = () => {
    myObj.key1 = "New Value 1"; // ❌ সরাসরি state পরিবর্তন
    myObj.key2 = "New Value 2";
    setMyObj(myObj); // ❌ সরাসরি আগের object সেট করলে React rerender করবে না
  };
  

  return (
    <div>
      <h1>{myObj.key1}</h1>
      <h1>{myObj.key2}</h1>
      <h1>{myObj.key3}</h1>
      <hr />
      <button onClick={change}>Change Value</button>
    </div>
  );
};

export default App;

হ্যাঁ, এখানে immutability principle পুরোপুরি কাজ করছে। React-এ state immutable, অর্থাৎ state সরাসরি পরিবর্তন (mutate) করা যায় না। পরিবর্তে, প্রতিবার নতুন state তৈরি করে সেট করতে হয়।