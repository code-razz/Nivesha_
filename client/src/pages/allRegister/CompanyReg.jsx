// import './regis.css';
// import './Regis.js';
// import ScriptTag from 'react-script-tag';
// const Demo = props => (
// <ScriptTag type="text/javascript" src="/Regis.js" />
// )
// function include(file) {
 
//     let script = document.createElement('script');
//     script.src = file;
//     script.type = 'text/javascript';
//     script.defer = true;
 
//     document.getElementsByTagName('head').item(0).appendChild(script);
 
// }
 
// /* Include Many js files */
// include(
// './Regis.js');

// import Reghelper from './Regis.js';
{/* <script type="text/javascript" src="Regis.js"></script> */}

function CompanyReg(){
    

    return(
        <div className="rcontainer">
            <div className="lgend">

            
                Company REGISTRATION
                <div className="progress-bar">
                <div className="step">
                    <p>Basic INfo</p>
                    <div className="bullet">
                    <span>1</span>
                    </div>
                    <div className="check fas fa-check" />
                </div>
                <div className="step">
                    <p>Contact</p>
                    <div className="bullet">
                    <span>2</span>
                    </div>
                    <div className="check fas fa-check" />
                </div>
                <div className="step">
                    <p>About</p>
                    <div className="bullet">
                    <span>3</span>
                    </div>
                    <div className="check fas fa-check" />
                </div>
                <div className="step">
                    <p>Submit</p>
                    <div className="bullet">
                    <span>4</span>
                    </div>
                    <div className="check fas fa-check" />
                </div>
                </div>
                <div className="form-outer">
                <form action="#">
                    <div className="page slide-page">
                    <div className="title">Basic Info:</div>
                    <table>
                        <tbody>
                        <tr>
                            <td>Name</td>
                            <td>
                            <input type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td>Headquarter</td>
                            <td>
                            <input type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td>Category</td>
                            <td>
                            <input type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td>Location Available</td>
                            <td>
                            <input type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td>Tagline</td>
                            <td>
                            <input type="text" />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="field">
                        <button className="firstNext next">Next</button>
                    </div>
                    </div>
                    <div className="page">
                    <div className="title">Contacts</div>
                    <table>
                        <tbody>
                        <tr>
                            <td>Website</td>
                            <td>
                            <input type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td>Facebook</td>
                            <td>
                            <input type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td>Instagram</td>
                            <td>
                            <input type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td>Twitter</td>
                            <td>
                            <input type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td>Phone NO</td>
                            <td>
                            <input type="tel" />
                            </td>
                        </tr>
                        <tr>
                            <td>email</td>
                            <td>
                            <input type="email" />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="field btns">
                        <button className="prev-1 prev">Previous</button>
                        <button className="next-1 next">Next</button>
                    </div>
                    </div>
                    <div className="page">
                    <div className="title">ABOUT</div>
                    <div className="field">
                        <textarea defaultValue={"Write about your company...."} />
                    </div>
                    <div className="field btns" style={{ marginTop: 200 }}>
                        <button className="prev-2 prev">Previous</button>
                        <button className="next-2 next">Next</button>
                    </div>
                    </div>
                    <div className="page">
                    <div className="title">Documents</div>
                    <table>
                        <tbody>
                        <tr>
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
                            <td>Company Structure</td>
                            <td>
                            <input type="file" style={{ border: 0 }} />
                            </td>
                        </tr>
                        <tr>
                            <td>Future Plan</td>
                            <td>
                            <input type="file" style={{ border: 0 }} />
                            </td>
                        </tr>
                        <tr>
                            <td>Pitch(if any)</td>
                            <td>
                            <input type="file" style={{ border: 0 }} />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="field btns">
                        <button className="prev-3 prev">Previous</button>
                        <button className="submit">Submit</button>
                    </div>
                    </div>
                </form>
                </div>
                </div>
            </div>
    )

}

export default CompanyReg;