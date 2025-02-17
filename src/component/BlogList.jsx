import { Link } from "react-router-dom";


const BlogList = (props) => {
    

    const BaseURL = "http://inertia-pos.manirul.xyz/api/";

    return (
                 

        <div className="row">
            {
                props.list.map((item,index)=>{
                    return(
                        <div key={index} className="cardPadding col-md-4">

                        <Link   key={index.toString()} to={"/details/"+item['id']} className="card">
                            
                            <figure>
                            <img className="imgWidth" src={BaseURL + item.image} alt="Image" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{item['title']}</h2>
                                <p>{item['descriptions']}</p>
                            </div>
                        </Link>
                        </div>
                    )
                }) 
            }
        </div>
        

              
           
    );
};

export default BlogList;


