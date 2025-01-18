import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ByCategoryPage from "./pages/ByCategoryPage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";
import React, { useState } from 'react';


const App = () => {


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
      <form onSubmit={handleSubmit}>

        <label htmlFor="userName">User Name</label>
        <input 
          type="text" 
          name="username"
          value={FormData.username}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          name="email"
          value={FormData.email}
          onChange={handleChange}
          required
        />
 <br />
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          name="password"
          value={FormData.password}
          onChange={handleChange}
          required
        />

        <label >
        <br />
        <input 
          type="radio" 
          name="gender"
          value="Male"
          checked={FormData.gender === "Male"}
          onChange={handleChange}
        /> Male

        </label>

        <br />
        <label >
        <input 
          type="radio" 
          name="gender"
          value="FeMale"
          checked={FormData.gender === "FeMale"}
          onChange={handleChange}
        /> Fe-Male

        </label>
        <br />

        <label >
        <input 
          type="radio" 
          name="gender"
          value="Others"
          checked={FormData.gender === "Others"}
          onChange={handleChange}
        /> Others

        </label>
        <br />
        <select 
            name="country" 
            value={FormData.country}
            onChange={handleChange}
          required
        >
          <option value="">Select Country</option>
          <option value="USA">USA</option>
          <option value="India">India</option>
          <option value="BD">BD</option>

        </select>
        <br />
        <label>

          <input 
            type="checkbox" 
            name="subscripstion"
            checked={FormData.subscripstion}
          />
          Subscriptions To Newslatter
        </label> <br />
        <button type="submit">Submit</button>
      </form>
   
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/byCategory/:id" element={<ByCategoryPage/>} />
            <Route path="/details/:id" element={<DetailsPage/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}; 

export default App;