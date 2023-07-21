import axios from 'axios';

const BaseURL = "https://basic-blog.teamrabbil.com/api"


//show menu on header
export async function postCategories(){
    let res = await axios.get(BaseURL+"/post-categories");
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
    let res = await axios.get(BaseURL+"/post-list/"+id);
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

