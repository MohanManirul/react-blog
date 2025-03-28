import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postDetails } from "../ApiRequest/ApiRequest.js";
import Layout from "../layout/layout.jsx";
import Loader from "../component/Loader.jsx";
import BlogDetails from "../component/BlogDetails.jsx";


const DetailsPage = () => {
    let {id} = useParams();
    const [list , setList] = useState(null);
    
    
    useEffect(()=> {
        (async()=> {
            let res = await postDetails(id);
                   
            setList(res.data);
        })()
    },[id])

    return (
       <Layout>
            {
                list === null ? <Loader /> : <BlogDetails list={list}/>
            }
       </Layout>
    );
};

export default DetailsPage;