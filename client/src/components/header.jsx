import './header.css';
import logo from "../images/logo1.png";

function Header(){
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
                    <li>
                        <a href="login.html">
                        <button>Sign In</button>
                        </a>
                    </li>
                    <li>
                        <a href="signup.html">
                        <button>Sign Up</button>
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </section>
        </nav>

    )

}

export default Header;