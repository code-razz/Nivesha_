import { useContext, useState } from 'react';
import axios from 'axios';
import './login.css';
import logo from '../../images/logo1.png';
import ImageUploadComponent from '../../components/ImageUpload';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

function Signup() {
    const [imageUrl, setImageUrl] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        isAdmin:'false',
        isInvestor:'false',
        isCompany:'false'
    });
    const navigate=useNavigate();
    const {loading, error,dispatch}=useContext(AuthContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name == 'userType') {
            
            let aval,cval,ival;
            if(value=='admin'){
                aval="true";
                cval="false";
                ival="false";

            }else if(value=='company'){
                cval="true";
                ival="false";
                aval="false";
            }else if(value=='investor'){
                ival="true";
                cval="false";
                aval="false";
            }
            setFormData(prevState => ({
                ...prevState,
                isAdmin: aval,
                isInvestor: ival,
                isCompany: cval
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
        // console.log(name, value);
        // console.log(formData);
    };
    

    const handleImageUploaded = (url) => {
        setImageUrl(url); // Store the uploaded image URL in the state
    };

    const handleLogin=async()=>{
        dispatch({type:"LOGIN_START"})
        try{
            const res=await axios.post("http://localhost:8000/api/auth/login", {username:formData.username,password:formData.password});
            dispatch({type:"LOGIN_SUCCESS",payload:res.data})   // res.data::Because when the login is success, our api (i.e. backend) return all the user info
    
            navigate("/");
        }catch(err){
            console.log(err);
            dispatch({type:"LOGIN_FAILURE",payload:err});
        }
      
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        

        // Validate password match
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }


        try {
            // Send POST request to server
            const res = await axios.post("http://localhost:8000/api/auth/register", {
                ...formData,
                photo: imageUrl // Include the uploaded image URL in the form data
            });
            console.log(res.data); // You can handle success response here

            handleLogin();

            navigate("/");
        } catch (error) {
            console.error(error); // You can handle error response here
        }
    };

    return (
        <section className="lbody">
            <div className="background">
                <div className="shape" />
                <div className="shape" />
            </div>
            <form className='lform flex' onSubmit={handleSubmit}>
                <div className="logo">

                <img
                    src={logo}
                    width="80px"
                    style={{ margin: "0px auto", display: "flex" }}
                    />
                <h3>NIVESHA</h3>
                </div>
                <div className='imageUpload'>
                    
                    <ImageUploadComponent onImageUploaded={handleImageUploaded} />
                </div>
                <div className='formPart'>
                <label htmlFor="username">Name</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Full Name" />
                <label htmlFor="email">Email</label>
                <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Email Id" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" />
                <p>Please select your role</p>
                <div className="flexrow">

                    <input 
                        type="radio" 
                        id="company" 
                        name="userType" 
                        value="company" // Assign true if the user selects "Company"
                        onChange={handleChange}
                        />
                    <label htmlFor="company">Company</label>

                    <input 
                        type="radio" 
                        id="investor" 
                        name="userType" 
                        value="investor" // Assign true if the user selects "Investor"
                        onChange={handleChange}
                        />
                    <label htmlFor="investor">Investor</label>

                    <input 
                        type="radio" 
                        id="admin" 
                        name="userType" 
                        value="admin" // Assign true if the user selects "Admin"
                        onChange={handleChange}
                        />
                    <label htmlFor="admin">Admin</label>

                </div>

                <button type="submit">Sign Up</button>
                <div className="social">
                    <div className="go">
                        <i className="fab fa-google" /> Google
                    </div>
                    <div className="fb">
                        <i className="fab fa-facebook" /> Facebook
                    </div>
                        </div>
                </div>
            </form>
        </section>
    );
}

export default Signup;
