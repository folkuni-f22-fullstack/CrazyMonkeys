import { useContext, useState, useRef} from "react";

import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRightToBracket} from "@fortawesome/free-solid-svg-icons"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import CopyrightIcon from '@mui/icons-material/Copyright';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import { Login } from "../Login/Login";
import ff from "../../assets/footerpagepic/FF-red.png";
import "../Login/login.css";
import "../../App.css";

import { FunkyContext } from "../../ContextRoot";
import { useNavigate } from "react-router-dom";

function Footer() {
  const footerRef = useRef(null); 
  window.scrollTo(0, 0);
 
  const { stateLoginDialog, isLoggedIn, emplyeeStatus} = useContext(FunkyContext);

  const navigate = useNavigate()

  const navigateToEmplyee = () => {
    if(emplyeeStatus === "employee") {
        navigate("/employee")
    }else{
        navigate("/chefsview")
    }
  }

  return (
    <>
      <section className="footer-container"  ref={footerRef}>
        <div className="created-by-container ">
          <p className="created-by-p">
            <CopyrightIcon className="copyright-icon" />
            Created by CrazyMonkeys
          </p>
        </div>

        <div className="media-container">
          <div className="media icons">
          <InstagramIcon/>
          <FacebookIcon/>
          <TwitterIcon/>
          </div>

          <div className="icon-container">
            054-240 240
          </div>
        </div>
        <div className="created-by-container">
          <FontAwesomeIcon icon={faArrowRightToBracket} 
            className="login-icon"
            onClick={() => stateLoginDialog(true)}
          />
        </div>
      </section>
      <footer id="footer" className="footer-desktop-container" ref={footerRef}>
        <div className="footer-columns">
          <div className="footer-column">
            <h3 className="openhour">Öppettider</h3>
            <table>
              <tbody>
                <tr className="table">
                  <td className="weekday">Måndag - Fredag:</td>
                  <td className="footer-time">16:00 - 22:00</td>
                </tr>
                <tr>
                  <td className="weekday">Lördag:</td>
                  <td className="footer-time">18:00 - 24:00</td>
                </tr>
                <tr>
                  <td className="weekday">Söndag:</td>
                  <td className="footer-time">16:00 - 22:00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="footer-column">
            <h3 className="footer-logo">Funky Fusion</h3>
            <img className="ff-pic" src={ff} alt="FFlogga" />
            <p>
              <CopyrightIcon className="copyright-icon" /> Created by Crazy
              Monkeys
            </p>
          </div>
          <div className="footer-column">
            <h3 className="contact-us">Kontakta oss</h3>
            <p>
              <PlaceIcon className="dark-icons" /> Drottninggatan 174,
              Karlstad
            </p>
            <p>
              <LocalPhoneIcon className="dark-icons" /> 054-240 240
            </p>
            <p>
              <MailIcon className="dark-icons" /> Funky_Fusion@CrazyMonkeys.com
            </p>
            <div className="media-icons-desktop">
              <p className="follow-us">Följ oss</p>
              <InstagramIcon className="instagram-icon"/>
              <FacebookIcon className=" facebook-icon"/>
              <TwitterIcon className="twitter-icon"/>

            </div>
            {isLoggedIn ?  
            <FontAwesomeIcon icon={faArrowRightToBracket} 
              className="login-icon"
              onClick={() => navigateToEmplyee()}
            /> :
            <FontAwesomeIcon icon={faArrowRightToBracket} 
              className="login-icon"
              onClick={() => stateLoginDialog(true)}
            />

        }

        
        
          </div>
        </div>
      </footer>
      <Login />
    </>
  );
}
export default Footer;
