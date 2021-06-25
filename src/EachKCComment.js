import useFetch from './useFetch';
import { FcLike } from 'react-icons/fc';
import { FcLikePlaceholder } from 'react-icons/fc';
import { useState, useEffect } from 'react';


const EachKCComment = (props) => {

    const comment = props.eachComment;

    const [like,setLike] = useState(false);
    const {data: author, isPending, error} = useFetch('https://krishi-charcha.herokuapp.com/users/'+comment.userId);

    const userId = localStorage.getItem('userId');
    const commentId = comment._id;
    const likeCo = {commentId,userId};
    fetch('https://krishi-charcha.herokuapp.com/comments/likeCheck', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(likeCo)
    }).then(res => {
        res.json().then(data => {
            if(data.liked){
                setLike(true);
            }else{
                setLike(false);
            }
        })
        // console.log(res.json());
    })
    let date = new Date(comment.createdAt);
    let strDate = date.toString().substr(4, 11);
    function likeOnClick(type) {
        
        if(type){
            fetch('https://krishi-charcha.herokuapp.com/comments/likeAdd', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(likeCo)
            }).then(res => {
                setLike(true);                // console.log(res.json());
            })

        }else{
            fetch('https://krishi-charcha.herokuapp.com/comments/likeDel', {
                method: 'DELETE',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(likeCo)
            }).then(res => {
                // console.log(res);
                // alert("Deleted")
                // console.log(res.json());
                setLike(false);                // console.log(res.json());

            })
        }

    }


    return ( 
        <>
            { author && 
                <>
                    <div className="profileImage">
                    <img src={author.avatar} alt="profile picture" />
                    </div>                
                    <div className="authorKB">
                    <p>{author.username}</p>
                    <span>{author.location}</span><br />
                    <span>{strDate}</span>
                    </div>
                    <div className="DetailedText">
                            {comment.details}
                    </div>
                    <div>
                        {like && <FcLike size="2em" onClick={() => likeOnClick(0)}/>}
                        {!like && <FcLikePlaceholder size="2em"  onClick={() => likeOnClick(1)}/>}
                    </div>
                    <hr />
                </>
            }
        </>
    );
}

export default EachKCComment;