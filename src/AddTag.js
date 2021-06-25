import React, { useState,useEffect }  from 'react'
import './AddTag.css'

const AddTag = () => {
    // const [tags, setTags] = React.useState(["React", "Mongo"])
    const [tags, setTags] = useState(["other"])
    useEffect(() => {
        
        var parsedTagsValue = (localStorage.getItem("tagsValue") || "[\"other\"]");
        // console
        
        const temp = JSON.parse(parsedTagsValue);
        
        setTags(temp)
        
      }, []);
    
      useEffect(() => {
          localStorage.setItem("tagsValue", JSON.stringify(tags));
      }, [tags]);

    const removeTags = ind => {
        setTags(tags.filter((_, index) => index !== ind))

    }
    const addTags = event => {
        if (event.key === 'Enter' && event.target.value) {
            setTags([...tags, event.target.value])
            event.target.value = ""
        }
    };

    
    return (
        <>
            <br /><br /><br />
            <div className="ContainerTag">
                <div className="tags-input">
                    <ul id="tags">
                        {
                            tags.map((tag, index) => <li className="taga" key={index}>
                                <span className='tag-title'>{tag}</span>
                                <span className='tag-close-icon' onClick={() => removeTags(index)}>x</span>

                            </li>)
                        }



                    </ul>
                    <input
                        type="text"
                        onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
                        placeholder="Press enter to add tags"
                    />
                </div>
            </div>
        </>
    );
}

export default AddTag;

