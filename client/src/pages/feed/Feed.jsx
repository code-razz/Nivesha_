import './feed.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header';

function Feed(){

    return(
        <>
            <Header/>
            <div className="container mt-5 mb-5 ">
                <div className="d-flex justify-content-center row">
                    <div className="col-md-8">
                    <div className="container1">
                        <div className="row p-2 bg-white border rounded">
                        <div className="col-md-3 mt-1">
                            <img
                            className="img-fluid img-responsive rounded product-image"
                            src="https://i.imgur.com/QpjAiHq.jpg"
                            />
                        </div>
                        <div className="col-md-6 mt-1">
                            <h5>company name</h5>
                            <p>
                            Company Valuation-<span>!cr</span>
                            </p>
                            <div className="mt-1 mb-1 spec-1">
                            <span>Headquarter:</span>
                            <span>Mumbai</span>
                            <br />
                            <span>Category:</span>
                            <span>Sports</span>
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
                            Short bio of company?achievement?unique feature
                            <br />
                            <br />
                            </p>
                            <button
                            className="btn btn-outline-primary btn-sm mt-2"
                            type="button"
                            >
                            Know MOre
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="container1">
                    <div className="row p-2 bg-white border rounded">
                        <div className="col-md-3 mt-1">
                        <img
                            className="img-fluid img-responsive rounded product-image"
                            src="https://i.imgur.com/QpjAiHq.jpg"
                        />
                        </div>
                        <div className="col-md-6 mt-1">
                        <h5>company name</h5>
                        <p>
                            Company Valuation-<span>!cr</span>
                        </p>
                        <div className="mt-1 mb-1 spec-1">
                            <span>Headquarter:</span>
                            <span>Mumbai</span>
                            <br />
                            <span>Category:</span>
                            <span>Sports</span>
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
                            Short bio of company?achievement?unique feature
                            <br />
                            <br />
                        </p>
                        <button className="btn btn-outline-primary btn-sm mt-2" type="button">
                            Know MOre
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </>
    )
}

export default Feed;