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
           
                <ul className="listDisplay">
                    <li > <NavLink to={'/'}>Home</NavLink></li>
                    {
                       categories.map((item,index) => {
                        return <li className="list"><NavLink key={index.toString()} to={'/byCategory/'+item['id']}>{item['name']}</NavLink></li>
                       }) 
                    }
                </ul>

            {props.children}
        </div>
    );
};

export default Layout;