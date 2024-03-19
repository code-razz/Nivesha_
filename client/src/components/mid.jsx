import { Link } from 'react-router-dom';
import './mid.css';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Mid(){

    const {user}=useContext(AuthContext);
    return(
        <div className="bdy">
            <div className="main">
            <div className="left">
                <h1>
                Grow <br />
                Invest
                <br />
                with NIVESHA
                <br />
                <p style={{ fontSize: 30 }}>
                    Join leading investors
                    <br /> funding the next wave of world-changing ideas
                </p>
                <br />

                <Link to="/investorp" style={{textDecoration:"none",color:"white"}}>
                                <button className="inbtn">Investor </button>
                            </Link>
                            <Link to="/companyp" style={{textDecoration:"none",color:"white"}}>
                                <button className="inbtn">Company </button>
                            </Link>

                {user?((user.isInvestor)? (
                                            <Link to="/investorreg" style={{textDecoration:"none",color:"white"}}>
                                                <button className="inbtn">Register </button>
                                            </Link>
                                        ):(
                                            <Link to="/companyreg" style={{textDecoration:"none",color:"white"}}>
                                                <button className="inbtn">Register </button>
                                            </Link>
                                        )):(<></>)}

                {/* {user? ((user.isInvestor)? (
                                            <Link to="/investorreg" style={{textDecoration:"none",color:"white"}}>
                                                <button className="inbtn">Investor </button>
                                            </Link>
                                        ):(
                                            <Link to="/companyreg" style={{textDecoration:"none",color:"white"}}>
                                                <button className="inbtn">Company </button>
                                            </Link>
                                        )
                        ):(
                            <>
                            <Link to="/" style={{textDecoration:"none",color:"white"}}>
                                <button className="inbtn">Investor </button>
                            </Link>
                            <Link to="/" style={{textDecoration:"none",color:"white"}}>
                                <button className="inbtn">Company </button>
                            </Link>
                            </>
                        )
                } */}
                {/* <Link to="/investorreg" style={{textDecoration:"none",color:"white"}}>
                <   button className="inbtn">Investor </button>
                </Link>
                <Link to="/companyreg" style={{textDecoration:"none",color:"white"}}>
                <   button className="inbtn">Company </button>
                </Link> */}
                
                </h1>
            </div>
            {/* <div class="right">
                    <img src="a1.jpg" alt="background"
                    width="600px" height="400px">
            
                </div> */}
            </div>
            <div className="aftermain">
            <h1 style={{ textAlign: "center", fontSize: 50 }}>What we offer?</h1>
            {/* <p style="font-size:30px;margin-left:20px;text-align: center;">We are the platform that connect companies with investor <br>to facilitates investment oppuertunities of their choice.<br>Through this enterpreneurs can reach out to multiple investor at a time and pitch their ideas.</p> */}
            <div className="side">
                <div className="front">
                <ul>
                    <li>Facilitates investment for businesses</li>
                    <li>Backed By renoknowed Investors</li>
                    <li>Acess in Emerging Cities</li>
                    <li>sharply curated deals</li>
                    <button className="inbtn">Learn More </button>
                </ul>
                </div>
            </div>
            </div>
            <section>
            <div className="mcontainer">
                <h2
                style={{
                    fontSize: 40,
                    color: "rgb(41, 0, 177)",
                    textAlign: "center",
                    fontFamily: "algerian"
                }}
                >
                Our Achievements
                </h2>
                <div className="flex">
                <ul className="left">
                    <li>
                    <i className="fa fa-rocket" aria-hidden="true" />
                    Startups Registered
                    <p style={{ color: "green" }}>4000+</p>
                    </li>
                    <li>
                    <i className="fa fa-money" aria-hidden="true" />
                    Investers Registered
                    <p style={{ color: "green" }}>2000+</p>
                    </li>
                </ul>
                <ul className="right">
                    <li>
                    <i className="fa fa-handshake-o" aria-hidden="true" />
                    No. of Collaborations
                    <p style={{ color: "green" }}>3000+</p>
                    </li>
                    <li>
                    <i className="fa fa-inr" aria-hidden="true" />
                    Total Investements
                    <p style={{ color: "green" }}>
                        <i
                        className="fa fa-inr"
                        aria-hidden="true"
                        style={{ color: "green", margin: 0 }}
                        />
                        1,00,00,000
                    </p>
                    </li>
                </ul>
                </div>
            </div>
            </section>
        </div>
  
    )
}

export default Mid;