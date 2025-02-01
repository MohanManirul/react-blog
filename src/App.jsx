import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ByCategoryPage from "./pages/ByCategoryPage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";
import React, { useState } from 'react';
import Module6 from "./pages/Module6.jsx";
import Module5 from './pages/Module5';
import UseCallBackFunc from "./pages/UseCallBackFunc.jsx";
import UseRef from "./pages/UseRef.jsx";
import Timer from "./pages/Timer.jsx";
import MyComponent from "./component/MyComponent.jsx";




const App = () => {

  const [isEnabled, setIsEnabled] = useState(false);

  const [FormData , setFormData] = useState({
    username : "",
    email : "",
    password : "",
    gender : "",
    subscription: false,
    country :""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };


const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', FormData);
    alert(JSON.stringify(FormData, null, 2)); 
  };

  return (
    <div>



      <h2>Parent Component</h2>
      <button onClick={() => setIsEnabled(!isEnabled)}>
        Toggle isEnabled
      </button>
      <MyComponent isEnabled={isEnabled} />
   




        <BrowserRouter>
        
          <Routes>
            <Route path="/module5" element={<Module5/>} />
            <Route path="/module6" element={<Module6/>} />
            <Route path="/usecallback" element={<UseCallBackFunc/>} />
            <Route path="/useRef" element={<UseRef/>} />
            <Route path="/storeMutableValue" element={<Timer/>} />

         
            
            <Route path="/" element={<HomePage/>} />
            <Route path="/byCategory/:id" element={<ByCategoryPage/>} />
            <Route path="/details/:id" element={<DetailsPage/>} />
          </Routes>
        </BrowserRouter>


    </div>
  );
}; 

export default App;