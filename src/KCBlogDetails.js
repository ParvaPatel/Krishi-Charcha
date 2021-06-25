import useFetch from './useFetch';
import EachKC from './EachKC';
import EachKCDetail from './EachKCDetail';
import { useParams,Link } from "react-router-dom";
import EachKCComment from './EachKCComment';


const KCBlogDetails = () => {

    const {id} = useParams();
    const {data: blog, isPending, error} = useFetch('https://krishi-charcha.herokuapp.com/threads/' + id);
    const {data: comments, isPendingComm, errorComm} = useFetch('https://krishi-charcha.herokuapp.com/comments/'+id);

    const temp = "./";

    return ( 
        
        <div className="outerKB">
            <br /><br /><br />
            {isPending && <div> Loading... </div>}
            {error && <div>{error} </div>}
            
            {blog && comments && 
                <>
                    <EachKCDetail eachKC = {blog} noComment = {comments.length}/>
                    <hr />
                    
                    
                    <div>Comments</div>
                    <hr />
                    {isPendingComm && <div> Loading... </div>}
                    {errorComm && <div>{errorComm} </div>}
                    {comments && 
                        comments.map((eachComment) =>(
                            <EachKCComment eachComment={eachComment}/>
                        ))
                    }
                    

                    <Link to={`/KrishiCharcha/add/${blog._id}`}><button>Add Comment</button></Link>
                    <br />
                    {/* <h1>Related Articles</h1> */}
                    {/* <EachKC eachKC = {blog}/>
                    <EachKC eachKC = {blog}/>
                    <EachKC eachKC = {blog}/>
                    <EachKC eachKC = {blog}/> */}
                </>
            }

            
        </div>          
    );
}
 
export default KCBlogDetails;
