import './login.css';
import logo from '../../images/logo1.png';

import { useContext,useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext.jsx';
import { useNavigate } from 'react-router';

function Login(){
  const [credentials,setCredentials]=useState({
    username:undefined,
    password:undefined,
  });

  const {loading, error,dispatch}=useContext(AuthContext);

  const navigate=useNavigate();

  const handleChange=(e)=>{
      setCredentials(prev=>({...prev,[e.target.id]:e.target.value}));
  };

  const handleClick=async(e)=>{
      e.preventDefault();
      dispatch({type:"LOGIN_START"})
      try{
          const res=await axios.post("http://localhost:8000/api/auth/login", credentials);
          dispatch({type:"LOGIN_SUCCESS",payload:res.data})   // res.data::Because when the login is success, our api (i.e. backend) return all the user info

          navigate("/");
      }catch(err){
          dispatch({type:"LOGIN_FAILURE",payload:err.response.data});
      }

  }

  return(
    <>
    <div className="lbody">

      <title>Nivesha Log in</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap"
        rel="stylesheet"
        />
      <link rel="stylesheet" href="login.css" />
      <div className="background">
        <div className="shape" />
        <div className="shape" />
      </div>
      <form className='lform' style={{width:400}}>
        <p style={{ fontSize: 26, marginTop: 0 }}>Login</p>
        <img
          src={logo}
          width="80px"
          style={{ margin: "0px auto", display: "flex" }}
          />
        <h3>NIVESHA</h3>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" onChange={handleChange}/>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" onChange={handleChange} />

        <button disabled={loading} onClick={handleClick}>Log In</button>
        {error && <span>{error.message}</span>}
        <div className="social">
          <div className="go">
            <i className="fab fa-google" /> Google
          </div>
          <div className="fb">
            <i className="fab fa-facebook" /> Facebook
          </div>
        </div>
      </form>
          </div>
    </>

  );
}

export default Login;