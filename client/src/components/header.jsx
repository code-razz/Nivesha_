import './header.css';
import logo from "../images/logo1.png";
import {Link} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

function Header(){
    const {user}=useContext(AuthContext);
    return(
        <nav>
            <section className="navbar">
                <div className="flex innav">
                <div className="logo">
                    <img src={logo} width="80px" />
                    <p style={{ float: "right" }}>NIVESHA</p>
                </div>
                <div className="right" />
                <div className="mid">
                    <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Resourses</a>
                    </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        {user? <>
                                    <li>
                                        <Link to="/profile" style={{textDecoration:"none",color:"white"}}>
                                            <button>{user.username}</button>
                                        </Link>
                                    </li>
                                </>:
                            (
                                <>
                                    <li>
                                        <Link to="/login" style={{textDecoration:"none",color:"white"}}>
                                            <button>Login</button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/signup" style={{textDecoration:"none",color:"white"}}>
                                            <button>SignUp</button>
                                        </Link>
                                    </li>
                                </>

                            )}
                    
                    </ul>
                </div>
                </div>
            </section>
        </nav>

    )

}

export default Header;