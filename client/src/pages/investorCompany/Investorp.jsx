import './invst.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine,faHandshake,faSearchDollar,faHandHoldingUsd,faFileAlt,faCoins,faPieChart } from '@fortawesome/free-solid-svg-icons';
import InvestorSlider from '../../components/InvestorSlider';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function InvestorPage()
{
  return(
 <>
 <Header/>
  <div className="incontainer">
  <h2>Our Services for Investors</h2>
  <div className="inservices">
    <div className="inservice">
      <FontAwesomeIcon icon={faChartLine} size="2x"/>
      <div>
        <h3>Portfolio Management</h3>
        <p>
          We offer expert portfolio management services to help you maximize
          returns and minimize risks.
        </p>
      </div>
    </div>
    <div className="inservice">
    <FontAwesomeIcon icon={faHandshake} size="2x"/>
      <div>
        <h3>Investment Advisory</h3>
        <p>
          Our team of experienced advisors provides personalized investment
          advice tailored to your financial goals.
        </p>
      </div>
    </div>
  </div>
  <div className="inservices">
    <div className="inservice">
    <FontAwesomeIcon icon={faSearchDollar} size="2x"/>
      <div>
        <h3>Market Research</h3>
        <p>
          Stay ahead of the curve with our in-depth market research and analysis
          to make informed investment decisions.
        </p>
      </div>
    </div>
    <div className="inservice">
    <FontAwesomeIcon icon={faHandHoldingUsd} size="2x"/>
      <div>
        <h3>Financial Planning</h3>
        <p>
          We help you develop comprehensive financial plans to achieve your
          long-term investment objectives.
        </p>
      </div>
    </div>
  </div>
  <div className="inservices">
    <div className="inservice">
      <FontAwesomeIcon icon={faFileAlt} size="2x"/>
      <div>
        <h3>Documentation Assistance</h3>
        <p>
          Assisting with all necessary documentation to streamline the
          investment process.
        </p>
      </div>
    </div>
    <div className="inservice">
    <FontAwesomeIcon icon={faCoins} size="2x"/>
      <div>
        <h3>Asset Allocation</h3>
        <p>Strategic asset allocation to optimize your investment portfolio.</p>
      </div>
    </div>
  </div>
  <div className="inservices">
    <div className="inservice">
    <FontAwesomeIcon icon={faHandHoldingUsd} size="2x"/>
      <div>
        <h3>Retirement Planning</h3>
        <p>Helping you plan for a financially secure retirement.</p>
      </div>
    </div>
    <div className="inservice">
    <FontAwesomeIcon icon={faPieChart} size="2x"/>
      <div>
        <h3>Risk Management</h3>
        <p>
          Implementing risk management strategies to protect your investments.
        </p>
      </div>
    </div>
  </div>
  </div>
  <h3 className='partnertag'>Our Investors</h3>
  <InvestorSlider/>
  <Footer/>
  
</>
  );
} 

export default InvestorPage;