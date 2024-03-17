import { useContext, useState } from 'react';
import './regis.css';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router';
// import './Regis.js';

function CompanyReg(){
    const {user}=useContext(AuthContext);
  const [formData, setFormData] = useState({
    userId:user._id ,
    name: '',
    type:'',
    headquarter:'',
    valuation:0,
    outlets:[],
    investments:[],
    email:'',
    phone:'',
    about:'',
    website:'',
    twitter:'',
    instagram:'',
    facebook:'',
    services:''
    
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
        const res = await axios.post("http://localhost:8000/api/company",formData);
        console.log(res.data); // You can handle success response here
        navigate("/");
    } catch (error) {
        console.error(error); // You can handle error response here
    }
};
    

    return(
        <div className="rcontainer">
  <h1>Company Registration</h1>
  <div className="form-outer">
    <form action="#">
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
              <td>Headquarter</td>
              <td>
                <input type="text" name="headquarter" value={formData.headquarter} onChange={handleChange}/>
              </td>
            </tr>
            <tr>
              <td>Category</td>
              <td>
                <input type="text" name="type" value={formData.type} onChange={handleChange}/>
              </td>
            </tr>
            <tr>
              <td>Tagline</td>
              <td>
                <input type="text" name="bio" value={formData.bio} onChange={handleChange}/>
              </td>
            </tr>
            <tr>
              <td>website</td>
              <td>
                <input type="text" name="website" value={formData.website} onChange={handleChange}/>
              </td>
            </tr>
            <tr>
              <td>Facebook</td>
              <td>
                <input type="text" name="facebook" value={formData.facebook} onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td>Instagram</td>
              <td>
                <input type="text" name="instagram" value={formData.instagram} onChange={handleChange}/>
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
                  <textarea name="about" value={formData.about} onChange={handleChange} placeholder="Write about your company...." />
                </div>
              </td>
            </tr>
            {/* <tr>
              <td>Company Logo</td>
              <td>
                <input type="file" style={{ border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Registration Document</td>
              <td>
                <input type="file" style={{ border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Financial Report(LFY)</td>
              <td>
                <input type="file" style={{ border: 0 }} />
              </td>
            </tr>
            <tr>
              <td>Pitch(if any)</td>
              <td>
                <input type="file" style={{ border: 0 }} />
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
      <div style={{ display: "flex" }}>
        <input type="checkbox" />
        <p>I understand and agree with terms and condition</p>
      </div>
      <div className="btns">
        <button
          className="submit" onClick={handleSubmit}
          style={{ width: 100, height: 35, float: "left", marginTop: 10 }}
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>
    )

}

export default CompanyReg;