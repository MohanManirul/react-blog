import axios from 'axios';

const BaseURL = "http://inertia-pos.manirul.xyz/api"


//show menu on header
export async function postCategories(){
    let res = await axios.get(BaseURL+"/post-category-list");
 
    
    if(res.status ===200){
        return res.data;
    }else{
        return [];
    }
}

// show newest posts on home page
export async function postNewest(){
    let res = await axios.get(BaseURL+"/post-newest");
    if(res.status ===200){
        return res.data;
    }else{
        return [];
    } 
}


// show category wise post list
export async function postList(id){
    let res = await axios.get(BaseURL+"/post-by-category/"+id);
    if(res.status ===200){
        return res.data;
    }else{
        return [];
    }
}


// post deatails
export async function postDetails(id){
    let res = await axios.get(BaseURL+"/post-details/"+id);
    if(res.status ===200){
        return res.data;
    }else{
        return [];
    }
}

