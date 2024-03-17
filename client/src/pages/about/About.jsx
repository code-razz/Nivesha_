import Header from '../../components/Header';
import './about.css';

function About(){
    return(
        <>
        <div className="b">

        
        <Header/>
  <div className="top">
    <h1 style={{ textAlign: "center", color: "gray" }}>About Us</h1>
    <p>
      <b>
        "Empowering entrepreneurs, connecting visionaries,fueling
        innovation:Where ideas meet investment for a brighter future and
        catalyzing growth with sucess together."
      </b>
    </p>
  </div>
  <div className="mission">
    <h3 style={{ textAlign: "center" }}>Our MISSION</h3>
    <p>
      At the heart of our mission lies a commitment to empowering diverse
      voices, fostering collaboration, and catalyzing transformative change.
      Through our platform, we aim to bridge the gap between visionary ideas and
      strategic investment, igniting a ripple effect of innovation that
      resonates across industries and communities worldwide. Together, we strive
      to redefine the landscape of entrepreneurship, creating opportunities that
      inspire, empower, and shape a brighter future for generations to come.
    </p>
  </div>
  <div className="feature">
    <h1 style={{ textAlign: "center" }}>Key features</h1>
    <div className="featureSection">
      <div className="featureBox">
        <div className="icon">
          <i className="fa fa-handshake-o fa-3x" />
        </div>
        <div className="content">
          <h1>Comprehensive Matching</h1>
          <p>
            Our advanced algorithms to match entrepreneurs with investors based
            on their industry, stage, and funding requirements
          </p>
        </div>
      </div>
      <div className="featureBox">
        <div className="icon">
          {" "}
          <i className="fa fa-lock fa-3x" aria-hidden="true" />
        </div>
        <div className="content">
          <h1>Secure Deal Rooms</h1>
          <p>
            {" "}
            secure virtual environment where entrepreneurs can share
            confidential documents and presentations with potential investors,
            streamlining the due diligence process and safeguarding sensitive
            information.
          </p>
        </div>
      </div>
    </div>
    <div className="featureSection">
      <div className="featureBox">
        <div className="icon">
          <i className="fa fa-book fa-3x" aria-hidden="true" />
        </div>
        <div className="content">
          <h1>Resource Hub</h1>
          <p>
            {" "}
            A centralized repository of resources including templates, guides,
            and expert advice to support entrepreneurs at every stage of their
            journey, from business planning to scaling operations.
          </p>
        </div>
      </div>
      <div className="featureBox">
        <div className="icon">
          <i className="fa fa-users fa-3x" aria-hidden="true" />
        </div>
        <div className="content">
          <h1>Networking</h1>
          <p>
            Virtual networking events, forums, and curated matchmaking sessions
            facilitate valuable connections between entrepreneurs, investors,
            mentors, and industry experts, fostering collaboration and knowledge
            exchange.
          </p>
        </div>
      </div>
    </div>
    <div className="featureSection">
      <div className="featureBox">
        <div className="icon">
          <i className="fa fa-line-chart fa-3x" aria-hidden="true" />
        </div>
        <div className="content">
          <h1>Anlytics Dashboard</h1>
          <p>
            Access to real-time analytics and insights empowers entrepreneurs
            and investors to track key performance metrics, monitor market
            trends, and make data-driven decisions to optimize their investment
            strategies.
          </p>
        </div>
      </div>
      <div className="featureBox">
        <div className="icon">
          <i className="fa fa-bell-o fa-3x " aria-hidden="true" />
        </div>
        <div className="content">
          <h1>Customized Alerts</h1>
          <p>
            Personalized notifications keep users informed about relevant
            investment opportunities, networking events, and industry updates,
            ensuring they never miss out on potential connections or market
            developments.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="founder">
    <h2 style={{ textAlign: "center" }}>Meet the founders</h2>
    <div className="founderbox">
      <div className="photo">
        <img src="suryapp.jpeg" alt="fphoto" height="120px" width="120px" />
        <br />
        <br />
        <br />
        <i className="fa fa-github fa-2x" aria-hidden="true" />
        <i className="fa fa-twitter fa-2x" />
        <i className="fa fa-linkedin fa-2x" />
      </div>
      <div className="descrpition">
        <h1>Surya Chandra Regmi</h1>
        <p>vdcdfdfdf</p>
      </div>
    </div>
    <div className="founderbox">
      <div className="photo">
        <img src="" alt="fphoto" height="120px" width="120px" />
        <br />
        <br />
        <br />
        <i className="fa fa-github fa-2x" aria-hidden="true" />
        <i className="fa fa-twitter fa-2x" />
        <i className="fa fa-linkedin fa-2x" />
      </div>
      <div className="descrpition">
        <h1>Raj Kumar Sah</h1>
        <p>vdcdfdfdf</p>
      </div>
    </div>
    <div className="founderbox">
      <div className="photo">
        <img src="" alt="fphoto" height="120px" width="120px" />
        <br />
        <br />
        <br />
        <i className="fa fa-github fa-2x" aria-hidden="true" />
        <i className="fa fa-twitter fa-2x" />
        <i className="fa fa-linkedin fa-2x" />
      </div>
      <div className="descrpition">
        <h1>Shambhu Sah</h1>
        <p>vdcdfdfdf</p>
      </div>
    </div>
    <div className="founderbox">
      <div className="photo">
        <img src="" alt="fphoto" height="120px" width="120px" />
        <br />
        <br />
        <br />
        <i className="fa fa-github fa-2x" aria-hidden="true" />
        <i className="fa fa-twitter fa-2x" />
        <i className="fa fa-linkedin fa-2x" />
      </div>
      <div className="descrpition">
        <h1>Aayush Jaiswal</h1>
        <p>vdcdfdfdf</p>
      </div>
    </div>
  </div>
  </div>
</>
    )
}

export default About;