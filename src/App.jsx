import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ByCategoryPage from "./pages/ByCategoryPage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./component/Profile.jsx";
import Settings from "./component/Settings.jsx";


const App = () => {
 
  return (
    <div>

        <BrowserRouter>
        
          <Routes>  

            <Route path="/" element={<HomePage/>} />
            <Route path="/byCategory/:id" element={<ByCategoryPage/>} />
            <Route path="/details/:id" element={<DetailsPage/>} />

            <Route path="/dashboard" element={<Dashboard />} >  {/* প্যারেন্ট Route এ self closing tag থাকবে না*/}
              
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<Settings />} />

            </Route>

          </Routes>
          
        </BrowserRouter>


    </div>
  );
}; 

export default App;