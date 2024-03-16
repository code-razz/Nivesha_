import './feed.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header';
import useFetch from '../../hooks/useFetch';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom'; // Import useHistory for navigation

function Feed(){

    // const history = useHistory(); // Initialize useHistory hook
    const [selectedItem, setSelectedItem] = useState(null); // State to store the selected item
    const navigate = useNavigate();

    const handleClick = (item) => {
        setSelectedItem(item); // Set the selected item in state
        // history.push('/fprofile'); // Navigate to the FProfile page
        navigate('/fprofile',{state:{item}});
    };

    const {data,loading,error}=useFetch("http://localhost:8000/api/company");

    return(
        <>
            <Header/>
            <div className="container mt-5 mb-5 ">
                <div className="d-flex justify-content-center row">
                    {
                        loading?(
                            "Loading Please Wait"
                        ):(error?(
                            "Error Fetching data"
                        ):(
                            <>
                            {data && data.map((item)=>(
                                <div className="container1">
                                    <div className="row p-2 bg-white border rounded">
                                        <div className="col-md-3 mt-1">
                                        <img
                                            className="img-fluid img-responsive rounded product-image"
                                            src="https://i.imgur.com/QpjAiHq.jpg"
                                        />
                                        </div>
                                        <div className="col-md-6 mt-1">
                                        <h5>{item.name}</h5>
                                        <p>
                                            {item.valuation}<span>!cr</span>
                                        </p>
                                        <div className="mt-1 mb-1 spec-1">
                                            <span>Headquarter:</span>
                                            <span>{item.headquarter}</span>
                                            <br />
                                            <span>Category:</span>
                                            <span>{item.type}</span>
                                            <br />
                                            <span>Services Provided</span>
                                            <br />
                                            <span className="dot" />
                                            <span>Best finish</span>
                                            <span className="dot" />
                                            <span>Unique design</span>
                                            <span className="dot" />
                                            <span>For men</span>
                                            <span className="dot" />
                                            <span>
                                            Casual
                                            <br />
                                            </span>
                                        </div>
                                        <p className="text-justify text-truncate para mb-0">
                                            {item.bio}
                                            <br />
                                            <br />
                                        </p>
                                        <button className="btn btn-outline-primary btn-sm mt-2" type="button" onClick={() => handleClick(item)}>
                                        {/* <Link
                                                to={{
                                                    pathname: '/fprofile',
                                                    state: { item }
                                                }}
                                                className="btn btn-outline-primary btn-sm mt-2"
                                                onClick={() => handleClick(item)}
                                            >
                                                Know More
                                        </Link> */}
                                        Know More
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            </>
                        ))}
                    
                </div>
            </div>
        </>
    )
}

export default Feed;