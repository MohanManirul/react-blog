

const BlogDetails = (props) => {
    const BaseURL = import.meta.env.VITE_IMG_URL
    
    return (
        <div className="container">
            <div className="card"> 
                <figure><img className="imgWidth" src={BaseURL + props.list.image} alt="car !" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{props.list.title}</h2>
                    <p>{props.list.descriptions}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;