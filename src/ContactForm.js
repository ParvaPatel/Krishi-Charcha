import {useState} from 'react';
import {useHistory} from 'react-router-dom'

const ContactForm = () => {

    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [details,setDetails] = useState('');
    const[isPending,setIsPending] = useState(false);
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        const contactFormSubmit = {firstname,lastname,email,message,details};
        console.log(contactFormSubmit);

        setIsPending(true);
        fetch('https://krishi-charcha.herokuapp.com/addInquiry', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(contactFormSubmit)
        }).then(() => {
            console.log('new inquiry added');
            alert("Thank You! You will recieve email in next 24 hours");
            setIsPending(false);
            // history.go(-1);
            // history.push('/');
        })
        

        // history.go(-1);
    }

    return (
        <div className="create">
            <h2>Contact Us</h2>

            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">First Name</label>
                <input type="text"
                        required
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                />
                <label htmlFor="">Last Name</label>
                <input type="text"
                        required
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                />
                <label htmlFor="">Email</label>
                <input type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="">Message</label>
                <input type="text"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                />
                <label htmlFor="">Additional Details</label>
                <textarea 
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                ></textarea>
                {!isPending && <button>Send Message</button>}
                {isPending && <button disabled>Sending...</button>}
                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}
            </form>

        </div>
    );
}
export default ContactForm;