import {Link, useHistory} from 'react-router-dom';
import { useState,useEffect } from "react";

const Header = () => {

    const [isLogin,setIsLogin] = useState(false);
    const history = useHistory();

    useEffect(() => {
        const parsedIsLogin = (localStorage.getItem("isLogin") || false);
        if(parsedIsLogin){
            // console.log("User LoggedIn");
            setIsLogin(true);
        }else{
            setIsLogin(false);
        }
    },[localStorage]);

    function handleLogout(){
        // localstorage.removeItem("isLogin");
        // localstorage.removeItem("user");
        // localstorage.removeItem("token");
        localStorage.clear();

        setIsLogin(false);
        history.push('/Login');
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Krishi Mitra</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Shop">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Services">Products and Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/KrishiCharcha">Krishi Charcha</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Blogs">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/ContactUs">Contact Us</Link>
                            </li>
                            <li className="nav-item" hidden={isLogin}>
                                <Link className="nav-link" to="/Login">Login</Link>
                            </li>
                            <li className="nav-item" hidden={isLogin}>
                                <Link className="nav-link" to="/Register">Register</Link>
                            </li>
                            <li className="nav-item" hidden={!isLogin}>
                                <Link className="nav-link" onClick={handleLogout}>Logout</Link>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
          </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                            </li> */}
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;