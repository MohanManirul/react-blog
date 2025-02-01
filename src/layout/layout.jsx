import { useEffect, useState } from "react";
import { postCategories } from "../ApiRequest/ApiRequest.js";
import { NavLink } from "react-router-dom";


const Layout = (props) => {
    
    const [categories, setCategories] = useState([]);

    useEffect(()=>{

        // iif = immedeately invocated function
        (async()=>{
        let res =  await postCategories();
        setCategories(res);
        
        })()

    },[])

    return (
        <div className="container">
             <p class="text-dark text-center mt-3">
                Live site links will be live within 3 working days. Thank you for visiting my portfolio.
            </p>
           <ul className="listDisplay">
                <li className="listDisplay"> <NavLink to={'/module5'}>Module 5</NavLink></li> <br />
                <li className="listDisplay"> <NavLink to={'/module6'}>Module 6</NavLink></li> <br />
                <li className="listDisplay"> <NavLink to={'/usecallback'}>Use call back hook</NavLink></li> <br />
                <li className="listDisplay"> <NavLink to={'/useRef'}>useRef hook</NavLink></li> <br />
                <li className="listDisplay"> <NavLink to={'/storeMutableValue'}>useRef hook ( storeMutableValue Timer Example)</NavLink></li> <br />

                <li className="listDisplay"> <NavLink to={'/conditionInsideHook'}>conditions Inside Hook</NavLink></li> <br />

                
           </ul>

                <ul className="listDisplay">
                    <li > <NavLink to={'/'}>Home</NavLink></li>
                    {
                       categories.map((item,index) => {
                        return <li key={index}  className="list"><NavLink to={'/byCategory/'+item['id']}>{item['name']}</NavLink></li>
                       }) 
                    }
                </ul>

            {props.children}
           
        </div>
    );
};

export default Layout;