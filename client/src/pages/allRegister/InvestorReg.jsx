import './regis.css';
// import './Regis.js';

function InvestorReg(){
    return(
        <>
        <div className="rcontainer">
    Investor Registration
    <div className="form-outer">
      <form action="#">
        <div className="page slide-page">
          <div className="rtable">
            <table className="rright">
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Grade</td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>No of Investment(till)</td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Bio</td>
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
            <table className="rright">
              <tbody>
                <tr>
                  <td colSpan={2}>
                    <div className="field">
                      <textarea defaultValue={"Write about your company...."} />
                    </div>
                  </td>
                </tr>
                <tr>
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
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ display: "flex" }}>
            <input type="checkbox" />
            <p>I understand and agree with terms and condition</p>
          </div>
          <div className="field btns">
            {/* <button class="prev-3 prev">Previous</button> */}
            <button
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