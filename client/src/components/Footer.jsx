import './footer.css';
import logo from '../images/logo1.png';

function Footer(){
    return(
        <footer>
  <div className="flex foot">
    <div className="footl">
      <img src={logo} width="100px" />
      <p>
        <i className="fa fa-phone" /> +91XXXXXXXXXX
      </p>
      <p>
        <i className="fa fa-envelope-open" /> nivesha.info@gmail.com
      </p>
    </div>
    <div className="footr">
      <p>Social Media</p>
      <a href="https://www.instagram.com/">
        <i className="fa fa-instagram" />
      </a>
      <a href="https://www.facebook.com">
        <i className="fa fa-facebook" />
      </a>
      <a href="https://www.twitter.com">
        <i className="fa fa-twitter" />
      </a>
      <a href="https://www.linkedin.com">
        <i className="fa fa-linkedin" />
      </a>
      <hr />
      <p>Platform to boost your company</p>
      <button>Connect</button>
    </div>
  </div>
  <div className="copy">
    <p>© 2024 | Nivesha | All Rights Reserved</p>
  </div>
</footer>


    )
}

export default Footer;