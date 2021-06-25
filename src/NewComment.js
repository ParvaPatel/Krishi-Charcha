import {FaMicrophone} from 'react-icons/fa'
import {FaMicrophoneSlash} from 'react-icons/fa'
import './AddText.css'
import { useParams,useHistory,Link } from "react-router-dom";
import { useState, useEffect } from 'react/cjs/react.development';
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // if none exists -> undefined

const NewComment = () => {

    const [speechState,setSpeechState] = useState(false);
    const [comment, setComment] = useState("");
    const {id} = useParams();
    
    const history = useHistory();




    const recognition = new SpeechRecognition();
    // recognition.continuous = true;
    recognition.lang = "en-US";
    recognition.interimResults = true;

    recognition.onresult = event => {
        const transcript = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('')
        console.log(transcript)
        setComment(comment +" "+ transcript)
    }
    recognition.onstart = () => {
        setSpeechState(true);
    }

    recognition.onend = () => {
        setSpeechState(false);
    }
    function handleSwitch() {
        if(speechState){
            recognition.stop();
            setSpeechState(false);
            console.log("Stopped");       
            // recognition.addEventListener("result", resultOfSpeechRecognition); // <=> recognition.onresult = function(event) {...} - Fires when you stop talking
        }
        else{
            recognition.start(); 
            setSpeechState(true);
        }
        console.log("changes");
    }

    function handleAddComment(){

        console.log(id);
        console.log(comment);
        const details = comment;
        const threadId = id;
        const userId = localStorage.getItem('userId');
        const commentBody = {details,threadId,userId};

        fetch('https://krishi-charcha.herokuapp.com/comments/add', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(commentBody)
        }).then(() => {
            console.log('new comment added');
            alert("New Comment Added!");
            history.push('/KrishiCharcha/'+id);

        })
    }

    return ( 
        <div>
            <br /><br /><br />
            <br /><br /><br />
            <div className="container">

                    <textarea className="Speech" name="q" id = "title" type="text" placeholder="Enter  here..." autoComplete="off" autoFocus value={comment} onChange={(e) => setComment(e.target.value)} />                    
                    {SpeechRecognition ? (!speechState ? <FaMicrophone size="1.5em" onClick={handleSwitch}/> : <FaMicrophoneSlash size="1.5em" onClick={handleSwitch}/> ) : <span> </span>}
                    <br /><br />
                    <button onClick={handleAddComment}>Add Comment</button>
            </div>

        </div>
     );
}
 
export default NewComment;