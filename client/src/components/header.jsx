import './header.css';
import logo from "../images/logo1.png";
import {Link} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import useFetch from '../hooks/useFetch';
import nullProfile from '../images/nullProfile.jpeg'
function Header(){
    const {user}=useContext(AuthContext);
    // console.log(user.isCompany);
    // console.log(user.isInvestor);
    // console.log(user.isInvestor);
    // console.log(user);

      
    return(
        <nav>
            <section className="navbar">
                <div className="flex innav">
                    <div className="logo flex">
                        <img src={logo} width="80px" />
                        <p style={{ float: "right" }}>NIVESHA</p>
                    </div>
                
                    <div className="mid">
                        <ul>
                        <li>
                            <Link to="/" style={{textDecoration:"none",color:"black"}}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" style={{textDecoration:"none",color:"black"}}>
                                About Us
                            </Link>
                            {/* <a href="#">About Us</a> */}
                        </li>
                        <li>
                            <Link to="https://thecollegeinvestor.com/" style={{textDecoration:"none",color:"black"}}>
                                Blog
                            </Link>
                            {/* <a href="#">Blog</a> */}
                        </li>
                        
                            <div className="dropdown">
                            <li>Resourses</li>
                            <div className="dropdown-content">
                                <ul>
                                <li>
                                    <a href="niveshwall.html">NIVESHA WALL</a>
                                </li>
                                <li>
                                    <a href="https://www.canva.com/en_gb/">Templates</a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/user/businessinsider/videos">
                                    Videos Insight
                                    </a>
                                </li>
                                <li>
                                    <a href="https://hbr.org/podcasts">Podcast</a>
                                </li>
                                </ul>
                            </div>
                            </div>
                        
                        </ul>
                    </div>
                    <div className='hbutton flex'>
                        <ul>
                            {user? <>
                                        {user.isInvestor? <>
                                                            <li>
                                                            <Link to="/feed" style={{textDecoration:"none", color:"black"}}>
                                                                <button>Feed</button>
                                                            </Link>
                                                            </li>
                                                            </>:<></>}
                                        <li >
                                            <Link className='flex' to="/profile" style={{textDecoration:"none", color:"black"}}>
                                                
                                                {user.photo? (<img
                                                            src={user.photo}
                                                            alt="Admin"
                                                            className="prof-pic rounded-circle"
                                                            width={150}
                                                            />):(
                                                                <img
                                                                src={nullProfile}
                                                                alt="Admin"
                                                                className=" prof-pic rounded-circle"
                                                                width={150}
                                                                />
                                                    )}
                                                <button style={{height:40,padding:5}}>{user.username}</button>
                                            </Link>
                                        </li>
                                    </>:
                                (
                                    <>
                                        <li>
                                            <Link to="/login" style={{textDecoration:"none", color:"black"}}>
                                                <button>Login</button>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/signup" style={{textDecoration:"none",color:"black"}}>
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