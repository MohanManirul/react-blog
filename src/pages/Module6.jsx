import React, { useEffect, useRef, useState } from "react";
import Layout from "../layout/layout";

const Module6 = () => {

  const [Data, SetData] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let result = await response.json();
      SetData(result);
    })();
  }, []);   

  // current is a property
  // ref is a attribute
  let myHeadline = useRef();

  const change = () => {
    // myHeadline.current.innerHTML = "<ul><li>A</li><li>B</li></ul>" ;
    // without current
    myHeadline.innerHTML = "Hello useRef";
  };

  return (
    <div>
      <Layout>
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
