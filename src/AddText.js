import {FaMicrophone} from 'react-icons/fa'
import {FaMicrophoneSlash} from 'react-icons/fa'
import './AddText.css'
import { useState, useEffect } from 'react/cjs/react.development';
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // if none exists -> undefined





const AddText = () => {

    const [speechState,setSpeechState] = useState(false);
    const [textValue, setTextValue] = useState("");
    const [titleValue, setTitleValue] = useState("");

    useEffect(() => {
        const parsedTextValue = (localStorage.getItem("textValue") || "")
        setTextValue(parsedTextValue)
        const parsedTitleValue = (localStorage.getItem("titleValue") || "")
        setTitleValue(parsedTitleValue)
    }, []);

    useEffect(() => {
        localStorage.setItem("textValue", textValue);
        localStorage.setItem("titleValue", titleValue);
        // if(textValue==="" && titleValue===""){
        //     localStorage.setItem("necessary",false);
        // }else{
        //     localStorage.setItem("necessary",true);
        // }
    }, [textValue,titleValue]);

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
        setTextValue(textValue +" "+ transcript)
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
    
    


    return ( 
        <div>
            <br /><br /><br />
            <div className="container">

                    <input className="SearchBar" type="text" autoComplete="off" placeholder="Title"  value={titleValue} onChange={(e) => setTitleValue(e.target.value)} />
<br /><br />
                    <textarea className="Speech" name="q" id = "title" type="text" placeholder="Enter  here..." autoComplete="off" autoFocus value={textValue} onChange={(e) => setTextValue(e.target.value)} />
                    {/* <button type="button"><i className=""></i></button> */}
                    
                    {SpeechRecognition ? (!speechState ? <FaMicrophone size="1.5em" onClick={handleSwitch}/> : <FaMicrophoneSlash size="1.5em" onClick={handleSwitch}/> ) : <span> </span>}
                
                <p className="info"></p>
            </div>

        </div>
     );
}
 
export default AddText;