import {useState} from 'react';
import {Link,useHistory} from 'react-router-dom'

const Register = () => {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const [location,setLocation] = useState('');
    const [avatar,setAvatar] = useState('');
    const[isPending,setIsPending] = useState(false);
    const history = useHistory();


    

    const handleSubmit = (e) => {
        e.preventDefault();
        const RegisterFormSubmit = {username,password,email,location,avatar};
        console.log(RegisterFormSubmit);

        setIsPending(true);
        fetch('https://krishi-charcha.herokuapp.com/users/add', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(RegisterFormSubmit)
        }).then(res => {

            if(res.status != "200"){
                alert("Account with this Email already exists. Kindly Login");
            }else{
                console.log('new user added');
                console.log(res.status);
                alert("Now Login using email and password!");
            }
            setIsPending(false);
            // history.go(-1);
            // history.push('/');
        }).catch(err => {
            console.log(err);
        })
        

        // history.go(-1);
    }

    const [isUploaded, setIsUploaded] = useState(false);
    const [typeFile, setTypeFile] = useState("");

    function handleImageChange(e) {
        if (e.target.files && e.target.files[0]) {
          setTypeFile(e.target.files[0].type);
          let reader = new FileReader();
    
          reader.onload = function (e) {
            setAvatar(e.target.result);
    
              setIsUploaded(true);
    
          };
    
          reader.readAsDataURL(e.target.files[0]);
        }
      }
    

    return (

        <>
            <br />
            <br />
            <br />
            <br />
            <div className="create">
                <h2>Register</h2>

                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="">Username</label>
                    <input type="text"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="">Password</label>
                    <input type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="">Email</label>
                    <input type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="">Location</label>
                    <input type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                    />
                    <label htmlFor="">Avatar</label>
                    <input type="file"
                            accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                            onChange={handleImageChange}
                    />
                    {!isPending && <button> Register</button>}
                    {isPending && <button disabled>Please wait...</button>}
                    {/* <p>{title}</p>
                    <p>{body}</p>
                    <p>{author}</p> */}
                </form>
                <br/>
                <p>Already Registered? <Link to="/Login">Then Login!</Link></p>

            </div>
        </>
    );
}
export default Register;