import { useEffect, useState } from "react";
import Layout from "../layout/layout.jsx";
import { postNewest } from "../ApiRequest/ApiRequest.js";
import BlogList from "../component/BlogList.jsx";
import Loader from "../component/Loader.jsx";



const HomePage = () => {

    const [list ,setList] = useState(null)


    useEffect( ()=>{
        (async()=>{
            let res = await postNewest();
            setList(res.data)
        })()
    },[])

    return (
        // Layout shows the menu
        <Layout> 
 
            {
                list===null? <Loader /> : <BlogList list ={list} /> // shows the newest post on home page
            }
        </Layout>
    );
};

export default HomePage;