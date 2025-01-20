import React, { useEffect, useRef, useState } from "react";
import Layout from "../layout/layout";
const People = [];
const Module6 = () => {
  const [Data, SetData] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    (async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let result = await response.json();
      SetData(result);
    })();
  }, []);
  useEffect(() => {}, [People.length]);

  // current is a property
  // ref is a attribute
  let myHeadline = useRef();

  const change = () => {
    // myHeadline.current.innerHTML = "<ul><li>A</li><li>B</li></ul>" ;
    // without current
    myHeadline.innerHTML = "Hello useRef";
  };

  function handleSubmit() {
    People.push({ name: name });
    console.log(People);
  }

  return (
    <div>
      <Layout>
        <h1>People List</h1>
        <ul>
          {People.map((person, index) => (
            <li key={index}>{person.name} years old</li>
          ))}
        </ul>

        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleSubmit}>submit</button>

        <p>Module 6 useRef </p>
        <div>{JSON.stringify(Data)}</div>
        <h1 ref={myHeadline}></h1>

        {/* without current  */}

        <h1 ref={(h1) => (myHeadline = h1)}></h1>
        <button className="btn btn-success" onClick={change}>
          Click
        </button>
        <hr />
      </Layout>
    </div>
  );
};

export default Module6;
