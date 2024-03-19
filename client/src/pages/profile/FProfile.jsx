import './profile.css';
import Header from  '../../components/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext.jsx';
import useFetch from '../../hooks/useFetch.js';
import { useLocation } from 'react-router';
import axios from 'axios';
import nullProfile from '../../images/nullProfile.jpeg'

function FProfile() {
  
  const location = useLocation();   //gets data from previous click
  const data=location.state.item

  const {user}=useContext(AuthContext);
  const {data:investorData,loading,error}=useFetch(`http://localhost:8000/api/investor/uinvest/${user._id}`);


  if(loading){
    console.log("loading");
  }

  // while(!investorData){
  //   console.log("inve");
  // }
  // console.log(investorData);
  // console.log(investorData.name);
  // const a=investorData.name;
  const [formData, setFormData] = useState({
    companyId:data._id,
    companyName:data.name,
  });
  // console.log(formData);

  // setFormData(...prevState,investorName:investorData.name);

  const handleClick = async (e) => {
      e.preventDefault();
    //   setFormData(prevState => ({
    //     ...prevState,
    //     investorName: a
    // }));
    // console.log(formData);
      try{
          // Send POST request to server
          const res = await axios.post("http://localhost:8000/api/pullreq",{...formData,investorName:investorData.name,investorId:investorData._id});
          console.log(res.data); // You can handle success response here
          alert("pull request sent to the company");
      }catch (error) {
          console.error(error); // You can handle error response here
      }
      
  };


  return (
    <>
    <Header/>
    <div>
      <div className="container">
    <div className="main-body">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="main-breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.html">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0)">User</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            User Profile
          </li>
        </ol>
      </nav>
      {/* /Breadcrumb */}
      <div className="row gutters-sm">
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
              {user.photo? (<img
                              src={user.photo}
                              alt="Admin"
                              className="rounded-circle"
                              width={150}
                            />):(
                              <img
                              src={nullProfile}
                              alt="Admin"
                              className="rounded-circle"
                              width={150}
                            />
                            )}
                <div className="mt-3">
                  <h4>{data.name}</h4>

                  <p className="text-muted font-size-sm">
                    {data.address || data.headquarter}
                  </p>
                  <button className="btn btn-primary" onClick={handleClick}>PULL</button>
          
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-3">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-globe mr-2 icon-inline"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <line x1={2} y1={12} x2={22} y2={12} />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  Website
                </h6>
                <span className="text-secondary">{data.website}</span>
              </li>
              
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-twitter mr-2 icon-inline text-info"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                  Twitter
                </h6>
                <span className="text-secondary">{data.twitter}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-instagram mr-2 icon-inline text-danger"
                  >
                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  Instagram
                </h6>
                <span className="text-secondary">{data.instagram}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-facebook mr-2 icon-inline text-primary"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  Facebook
                </h6>
                <span className="text-secondary">{data.facebook}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Company</h6>
                </div>
                <div className="col-sm-9 text-secondary">{data.name}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">{data.email}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Phone</h6>
                </div>
                <div className="col-sm-9 text-secondary">{data.phone}</div>
              </div>
              <hr />

              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Address</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {data.headquarter || data.address}
                </div>
              </div>
              <hr />
              
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-body">
              <h6>About Company</h6>
              <p>
                {data.about}
              </p>
              
            </div>
          </div>


         
        </div>
      </div>
    </div>
  </div>
      
      
    </div>
    </>
  );
}

export default FProfile;