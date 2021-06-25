import useFetch from './useFetch';
import { FcLike } from 'react-icons/fc';
import { FcLikePlaceholder } from 'react-icons/fc';
import { GoComment } from 'react-icons/go';
import {FaWhatsapp, FaFacebook} from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const EachKCDetail = (props) => {

    const eachKCBLog = props.eachKC;
    const noComment = props.noComment;
    // console.log(eachKCBLog);
    // Link to={`/blogs/${blog.id}`}

    const {data: author, isPending, error} = useFetch('https://krishi-charcha.herokuapp.com/users/'+eachKCBLog.userId);


    const [like,setLike] = useState(false);
    
    const userId = localStorage.getItem('userId');
    const threadId = eachKCBLog._id;

    const likeTh = {threadId,userId};
        fetch('https://krishi-charcha.herokuapp.com/threads/likeCheck', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(likeTh)
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
    

    function likeOnClick(type) {
        
        if(type){
            fetch('https://krishi-charcha.herokuapp.com/threads/likeAdd', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(likeTh)
            }).then(res => {
                setLike(true);                // console.log(res.json());
            })

        }else{
            fetch('https://krishi-charcha.herokuapp.com/threads/likeDel', {
                method: 'DELETE',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(likeTh)
            }).then(res => {
                // console.log(res);
                // alert("Deleted")
                // console.log(res.json());
                setLike(false);                // console.log(res.json());

            })
        }

    }
    const baseURL = "https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=";
    var url = "http://localhost:3000/krishiCharcha/" + eachKCBLog._id;
    const baseEndURL = "%2Fposts&display=popup&ref=plugin&src=share_button";
    const whatsAppBase = "whatsapp://send?text=";
    // const text = "A post about '"+ eachKCBLog.title + "' by "+ author.username + " from "+eachKCBLog.location + ". - ";
    const linkShare = "http://localhost:3000/krishiCharcha/" + eachKCBLog._id;
    // const linkFinal = whatsAppBase + text  + linkShare;
    let date = new Date(eachKCBLog.createdAt);
    let strDate = date.toString().substr(4, 11);
    // console.log(strDate);

    return ( 
        <>
        { author &&

            
        
            <div className="eachKB">
                    <div className="profileImage">
                        <img src={author.avatar} alt="profile picture" />
                    </div>                
                    <div className="authorKB">
                        <p>{author.username}</p>
                        <span>{author.location}</span><br />
                        <span>{strDate}</span>
                    </div>
                    <div className="tagKB">

                        {eachKCBLog.tag.map((tags) =>(
                            <div>{tags}</div>
                        ))}
                    </div>
                        <div className="issueImage">
                            <img src={eachKCBLog.image} alt="issue Image" />
                        </div>
                        <div className="titleKB">
                            <h3>{eachKCBLog.title}</h3>
                        </div>
                        <div className="DetailedText">
                            <p>{eachKCBLog.content}
                            </p>
                        </div>
                    
                
                    <div className="utilityKB">

                        <div>
                            {like && <FcLike size="2em" onClick={() => likeOnClick(0)}/>}
                            {!like && <FcLikePlaceholder size="2em"  onClick={() => likeOnClick(1)}/>}
                        </div>
                        <div>
                            <Link to={`/KrishiCharcha/add/${eachKCBLog._id}`}>
                                
                                <GoComment size="2em"/>
                                <span>{noComment}</span>
                            
                            </Link>
                        </div>
                        
                        
                        <div>
                        <a  href={whatsAppBase+"A post about '"+eachKCBLog.title+"' by "+ author.username+" from "+author.location+". - "+linkShare} 		
                            data-action="share/whatsapp/share"
		                    target="_blank">
                            <FaWhatsapp  size="2em"/>
                        </a> 
                        </div>
                        <div>
                            
                            <a href={baseURL + url + baseEndURL} target="_blank"><FaFacebook  size="2em"/></a>
                            
                        </div>

                    </div>
                </div>
        }
        </>
    );
}
 
export default EachKCDetail;