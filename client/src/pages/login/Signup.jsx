import { useState } from 'react';
import axios from 'axios';
import './login.css';
import logo from '../../images/logo1.png';
import ImageUploadComponent from '../../components/ImageUpload';

function Signup() {
    const [imageUrl, setImageUrl] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageUploaded = (url) => {
        setImageUrl(url); // Store the uploaded image URL in the state
    };
    
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
        } catch (error) {
            console.error(error.response.data); // You can handle error response here
        }
    };

    return (
        <div className="hbody">
            <div className="background">
                <div className="shape" />
                <div className="shape" />
            </div>
            <form onSubmit={handleSubmit}>
                <img
                    src={logo}
                    width="80px"
                    style={{ margin: "0px auto", display: "flex" }}
                />
                <h3>NIVESHA</h3>
                <div>
                    <h1>Upload Image to Firebase Storage</h1>
                    <ImageUploadComponent onImageUploaded={handleImageUploaded} />
                </div>

                <label htmlFor="username">Name</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Full Name" />
                <label htmlFor="email">Email</label>
                <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Email Id" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" />
                <button type="submit">Sign Up</button>
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
    );
}

export default Signup;
