import { useContext, useState } from 'react';
import axios from 'axios';
// import './login.css';
import logo from '../../images/logo1.png';
import ImageUploadComponent from '../../components/ImageUpload';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

function Feedback() {
    const navigate=useNavigate();

    function handleSubmit(){
        alert("Your feedback has received. Thank You!")
        navigate('/');
        
    }
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
                <h3>NIVESHA Feedback</h3>
                
                </div>
                <div style={{marginLeft:120}} className='formPart'>
                <label htmlFor="username">Name</label>
                <input type="text" name="username" placeholder="Full Name" />
                <label htmlFor="email">Email</label>
                <input type="text" name="email"  placeholder="Email Id" />
                <label htmlFor="rate">Rate our services</label>
                <input type="number" name="rate"  min="0" max="10" placeholder="Please rate our service between 1 to 10" />
                <label htmlFor="feedback">Feedback</label>
                <input style={{height:100}}type="textarea" name="feedback" placeholder="Please provide us your feedback" />
                <p>Please select your role</p>
                <div className="flexrow">

                    <input 
                        type="radio" 
                        id="company" 
                        name="userType" 
                        value="company" // Assign true if the user selects "Company"

                        />
                    <label htmlFor="company">Company</label>

                    <input 
                        type="radio" 
                        id="investor" 
                        name="userType" 
                        value="investor" // Assign true if the user selects "Investor"

                        />
                    <label htmlFor="investor">Investor</label>

                    <input 
                        type="radio" 
                        id="admin" 
                        name="userType" 
                        value="admin" // Assign true if the user selects "Admin"

                        />
                    <label htmlFor="admin">Others</label>

                </div>

                <button type="submit">Submit</button>
                
                
                </div>
            </form>
        </section>
    );
}

export default Feedback;
