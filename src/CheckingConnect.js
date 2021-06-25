import useFetch from './useFetch';
import { useState, useEffect } from 'react';


const CheckingConnect = () => {
    // const {data: blog, isPending, error} = useFetch('http://localhost:9000/testAPI');

    const username = "GoodOldGaze";
    const password = "123456789";
    const email = "parvapatel2571@gmail.com";
    const avatar = "data:image/jpeg;base64,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";
    const location = "Patan, Gujarat";

    const title = "Insects in my cotton balls";
    const image = "data:image/jpeg;base64,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";
    const content = "I have a severe issue of insects in my cotton balls";
    const tag = ["Cotton","Insects","Insecticides"];
    const userId = "60cb75e0dba19c0d54a91e79";

    const details="Adding Comment to the Thread, Showing it to shubham";
    const threadId = "60c742ab91cfa62ffc074e36";

    // const {data: threads, isPending, error} = useFetch('http://localhost:9000/threads/');




    // const handleOnclick = (e) => {
    //     e.preventDefault();
    //     const contactFormSubmit = {username,password,email,avatar,location};
    //     console.log(contactFormSubmit);

    //     fetch('http://localhost:9000/users/add', {
    //         method: 'POST',
    //         headers: {"Content-Type": "application/json"},
    //         body: JSON.stringify(contactFormSubmit)
    //     }).then(() => {
    //         console.log('new user added');
    //         alert("Thank You!");
    //     })
    // }

    // const handleOnclickThread = (e) => {
    //     e.preventDefault();
    //     const contactFormSubmit = {title,image,content,tag,userId};
    //     console.log(contactFormSubmit);

    //     fetch('http://localhost:9000/threads/add', {
    //         method: 'POST',
    //         headers: {"Content-Type": "application/json"},
    //         body: JSON.stringify(contactFormSubmit)
    //     }).then(() => {
    //         console.log('new thread added');
    //         alert("Thank You!");
    //     })
    // }

    // const handleOnclickComment = (e) => {
    //     e.preventDefault();
    //     const contactFormSubmit = {details,threadId,userId};
    //     console.log(contactFormSubmit);

    //     fetch('http://localhost:9000/comments/add', {
    //         method: 'POST',
    //         headers: {"Content-Type": "application/json"},
    //         body: JSON.stringify(contactFormSubmit)
    //     }).then(() => {
    //         console.log('new comment added');
    //         alert("Thank You!");
    //     })
    // }
    // const handleOnClickThreadRetrieve = (e) => {
    //     e.preventDefault();
    //     if(threads){
    //         console.log(threads);
    //     }
    // }

    const handleCheckLikeThread = (e) => {
        e.preventDefault();
        const likeTh = {threadId,userId};
        fetch('http://localhost:9000/threads/likeCheck', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(likeTh)
        }).then(res => {
            res.json().then(data => {
                console.log(data.liked);
            })
            // console.log(res.json());
        })
    }
    const handleLikeThread = (e) => {
        e.preventDefault();
        const likeTh = {threadId,userId};
        fetch('http://localhost:9000/threads/likeAdd', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(likeTh)
        }).then(res => {
            console.log(res);
            // console.log(res.json());
        })
    }
    const handleDeleteLikeThread = (e) => {
        e.preventDefault();
        const likeTh = {threadId,userId};
        fetch('http://localhost:9000/threads/likeDel', {
            method: 'DELETE',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(likeTh)
        }).then(res => {
            console.log(res);
            alert("Deleted")
            // console.log(res.json());
        })
    }


    return ( 
        <>
        <br />
        <br /><br />
        <h1>Hey</h1>
        {/* {blog && <h1>{blog}</h1>}
        {isPending && <h1>{isPending}</h1>}
        {error && <h1>{error}</h1>} */}
        {/* <h1>{blog}</h1> */}
        <button onClick={handleLikeThread}>Click It</button>
        </>
     );
}
 
export default CheckingConnect;