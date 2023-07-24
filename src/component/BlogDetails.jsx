

const BlogDetails = (props) => {
    return (
        <div className="container">
            <div className="card"> 
                <figure><img className="imgWidth" src={props.list['postDetails']['img']} alt="car !" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{props.list['postDetails']['title']}</h2>
                    <p>{props.list['postDetails']['content']}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;