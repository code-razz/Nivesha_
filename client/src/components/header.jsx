import './header.css';
import logo from "../images/logo1.png";
import {Link} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import useFetch from '../hooks/useFetch';

function Header(){
    const {user}=useContext(AuthContext);
    if(user){
        var {data:userd,loading:uloading,error:uerror}=useFetch(`http://localhost:8000/api/users/${user._id}`); 
    }

      
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
                    <li><div className="dropdown">
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
                    </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        {user? <>
                                    {userd.isInvestor? <>
                                                        <li>
                                                        <Link to="/feed" style={{textDecoration:"none", color:"black"}}>
                                                            <button>Feed</button>
                                                        </Link>
                                                        </li>
                                                        </>:<></>}
                                    <li>
                                        <Link to="/profile" style={{textDecoration:"none", color:"black"}}>
                                            <button>{user.username}</button>
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