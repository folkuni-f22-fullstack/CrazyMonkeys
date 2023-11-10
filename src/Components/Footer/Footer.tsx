import "./footer.css";
import { LuLogIn } from "react-icons/Lu";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiSolidCopyright } from "react-icons/bi";

function Footer() {
  return (
    <>
      <section className="footer-container">
          <div className="created-by-container ">
          
            <p className="created-by-p"><BiSolidCopyright className="copyright-icon" />Created by CrazyMonkeys</p>
          </div>

        <div className="media-container">
          <div className="media icons">
            <FaInstagram className="instagram-icon" />
            <FaXTwitter className="twitter-icon" />
            <FaFacebook className="facebook-icon" />
          </div>

          <div className="icon-container">
            <BsFillTelephoneFill className="phone-icon" />
          <p>  054-240 240</p>
          </div>
        </div>
        <div className="created-by-container">
          <LuLogIn className="login-icon" />
        </div>
      </section>
    </>
  );
}
export default Footer;
