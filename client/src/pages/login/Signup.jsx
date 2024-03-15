import './login.css';
import logo from '../../images/logo1.png';
import ImageUploadComponent from '../../components/ImageUpload';

const ValidateEmail=()=> {
    const mailformat = /^[\w.-]+@[\w-]+(\.[\w-]+)*\.[a-zA-Z]{2,3}$/;
    const email1=document.getElementById("username").value
    if (email1.match(mailformat)) {
       validate();
    } else {
        alert("You have entered an invalid email address!");
        return false;
    }
}

const validate=()=> {
    var x = document.getElementById("password").value;
    var y = document.getElementById("cpassword").value;

    if (x === y) {
        return true;
    } else {
        alert("Passwords do not match!");
        return false;
    }
}

function Signup(){
    return(
        <>
        <div className="hbody">
            <div className="background">
                <div className="shape" />
                <div className="shape" />
            </div>
            <form onSubmit={validate}>
                <img
                src={logo}
                width="80px"
                style={{ margin: "0px auto", display: "flex" }}
                />
                <h3>NIVESHA</h3>
                {/* <p style="font-size: 26px; margin-top: 0px;">Register</p> */}

                <div>
                    <h1>Upload Image to Firebase Storage</h1>
                    <ImageUploadComponent/>
                </div>

                <label htmlFor="name">Name</label>
                <input type="text" name="Name" id="name" placeholder="Full Name" />
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Email Id" id="username" />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" />
                <label htmlFor="cpassword">Confirm Password</label>
                <input type="password" placeholder="Confirm Password" id="cpassword" />
                <button>Sign Up</button>
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

    )
}

export default Signup;