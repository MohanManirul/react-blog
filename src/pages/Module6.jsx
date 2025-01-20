import React, { useRef } from 'react';
import Layout from '../layout/layout';

const Module6 = () => {

    let myHeadline = useRef();
    
    const  change = () => { 
       myHeadline.current.innerText = "Hello useRef" ;
       myHeadline.current.innerHTML = "<ul><li>A</li><li>B</li></ul>" ;
   }

    return (
        <div>
            <Layout>
            <p>Module 6 useRef </p>
            <h1 ref={myHeadline}>dfdf</h1>
            <button className='btn btn-success' onClick={change}>Click</button>
           <hr />
            </Layout>
        </div>
    );
};

export default Module6;