

const BlogDetails = (props) => {
    console.log(props.list.title);
    
    return (
        <div className="container">
            <div className="card"> 
                <figure><img className="imgWidth" src={props.list.image} alt="car !" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{props.list.title}</h2>
                    <p>{props.list.descriptions}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;