import {useState} from 'react';
import {Link,useHistory} from 'react-router-dom'
import useFetch from './useFetch';


const Login = () => {

    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const[isPending,setIsPending] = useState(false);
    const history = useHistory();

    

    const handleSubmit = (e) => {
        e.preventDefault();
        const LoginFormSubmit = {password,email};
        console.log(LoginFormSubmit);

        setIsPending(true);
        fetch('https://krishi-charcha.herokuapp.com/users/login', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(LoginFormSubmit)
        }).then(res => {

            if(res.status == "404"){
                alert("You have not registered, Please Register");
            }else if(res.status=='400'){
                alert("Invalid Password");
            }else if(res.status=="200"){
                console.log('Logged in');
                console.log(res.status);
                
                res.json().then(data => {
                    // console.log(data.message);
                    // console.log(data.token);
                    
                    localStorage.setItem('userId',data.message._id);
                    localStorage.setItem('token',data.token);
                    localStorage.setItem('isLogin',true);
                    history.push('/KrishiCharcha');
                    window.location.reload();

                });
                alert("You are logged in!");
            }else{
                alert("Please Try again after some time!");
            }
            setIsPending(false);
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <div className="create">
                <h2>Login</h2>

                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="">Email</label>
                    <input type="email"
                            required
                            value={email}
                            autoComplete
                            onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="">Password</label>
                    <input type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                    />
                    {!isPending && <button> Login</button>}
                    {isPending && <button disabled>Please wait...</button>}
                    {/* <p>{title}</p>
                    <p>{body}</p>
                    <p>{author}</p> */}
                </form>
                <br/>
                <p>Not Registered yet? <Link to="/Register">Then Register!</Link></p>
            </div>
        </>
    );
}
export default Login;