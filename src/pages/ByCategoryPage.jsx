import { useEffect, useState } from "react";
import { postList } from "../ApiRequest/ApiRequest.js";
import Layout from './../layout/layout.jsx';
import BlogList from "../component/BlogList.jsx";
import { useParams } from "react-router-dom";
import Loader from "../component/Loader.jsx";



const ByCategoryPage = () => {
    let {id} = useParams();
    const [list , setList] = useState([]);
    useEffect(()=>{

        (async () => {
            let res = await postList(id);
            setList(res);
        })()

    },[id])

    return (
        <div>
            
            <Layout>
                {
                    list === null? <Loader />: <BlogList list={list}/>
                }
            </Layout>
        </div>
    );
};

export default ByCategoryPage;