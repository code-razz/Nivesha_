import { useContext, useState } from 'react';
import './regis.css';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router';
// import './Regis.js';

function InvestorReg(){
  const {user}=useContext(AuthContext);

  const reload=()=>{
    window.location.reload(); // Reload the current page

  }

  if(!user?._id){

    reload();
  }
  const [formData, setFormData] = useState({
    name: undefined,
    type:undefined,
    address:undefined,
    grade:undefined,
    noOfCompInvested:undefined,
    totalPortfolio:undefined,
    email:undefined,
    phone:undefined,
    about:undefined,
    investements:[],
    website:undefined,
    twitter:undefined,
    instagram:undefined,
    facebook:undefined
    
});
const navigate=useNavigate();

const handleChange = (e) => {
    const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    // console.log(name, value);
    // console.log(formData);
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // Send POST request to server
        const res = await axios.post("http://localhost:8000/api/investor",{...formData,userId:user._id});
        console.log(res.data); // You can handle success response here
        navigate("/");
    } catch (error) {
        console.error(error); // You can handle error response here
    }
};
    return(
        <>
        <div className="rcontainer">
          <h1 className="rh1">

          Investor Registration
          </h1>
    <div className="form-outer">
      <form method='post'>
        <div className="page slide-page">
          <div className="rtable">
            <table className="rright">
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                  </td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>
                    <input type="text" name="address" value={formData.address} onChange={handleChange}/>
                  </td>
                </tr>
                <tr>
                  <td>Grade</td>
                  <td>
                    <input type="text" name="grade" value={formData.grade} onChange={handleChange} />
                  </td>
                </tr>
                <tr>
                  <td>No of Investment(till)</td>
                  <td>
                    <input type="text" name="noOfCompInvested" value={formData.noOfCompInvested} onChange={handleChange}/>
                  </td>
                </tr>
                
                <tr>
                  <td>Facebook</td>
                  <td>
                    <input type="text" name="facebook" value={formData.facebook} onChange={handleChange}/>
                  </td>
                </tr>
                <tr>
                  <td>Instagram</td>
                  <td>
                    <input type="text"  name="instagram" value={formData.instagram} onChange={handleChange} />
                  </td>
                </tr>
                <tr>
                  <td>Twitter</td>
                  <td>
                    <input type="text" name="twitter" value={formData.twitter} onChange={handleChange} />
                  </td>
                </tr>
                <tr>
                  <td>Phone NO</td>
                  <td>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange}/>
                  </td>
                </tr>
                <tr>
                  <td>email</td>
                  <td>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="rright">
              <tbody>
                <tr>
                  <td colSpan={2}>
                    <div className="field">
                      <textarea name="about" value={formData.about} onChange={handleChange} placeholder="Write about your investment strategy...." />
                    </div>
                  </td>
                </tr>
                {/* <tr>
                  <td>Photo</td>
                  <td>
                    <input type="file" style={{ border: 0 }} />
                  </td>
                </tr>
                <tr>
                  <td>Portfolio</td>
                  <td>
                    <input type="file" style={{ border: 0 }} />
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
          <div style={{ display: "flex" }}>
            <input type="checkbox" />
            <p style={{ marginTop:"15px" }}>I understand and agree with terms and condition</p>
          </div>
          <div className="field btns">
            {/* <button class="prev-3 prev">Previous</button> */}
            <button
              onClick={handleSubmit}
              className="submit"
              style={{ width: 100, height: 35, float: "left", marginTop: 10 }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
</div>
        </>
    )
}

export default InvestorReg;