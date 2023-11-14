import "./footer.css";
import { LuLogIn } from "react-icons/Lu";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiSolidCopyright } from "react-icons/bi";
import { SiGooglemaps } from "react-icons/si";
import { IoIosMail } from "react-icons/io";

import ff from "../../assets/footerpagepic/FFlogga.png";

function Footer() {
  return (
    <>
      <section className="footer-container">
        <div className="created-by-container ">
          <p className="created-by-p">
            <BiSolidCopyright className="copyright-icon" />
            Created by CrazyMonkeys
          </p>
        </div>

        <div className="media-container">
          <div className="media icons">
            <FaInstagram className="instagram-icon" />
            <FaXTwitter className="twitter-icon" />
            <FaFacebook className="facebook-icon" />
          </div>

          <div className="icon-container">
            <BsFillTelephoneFill className="phone-icon" />
            054-240 240
          </div>
        </div>
        <div className="created-by-container">
          <LuLogIn className="login-icon" />
        </div>
      </section>

      <footer className="footer-desktop-container">
        <div className="footer-columns">
          <div className="footer-column">
            <h3 className="openhour">Öppettider</h3>
            <table>
              <tr className="table">
                <td className="weekday">Måndag - Fredag:</td>
                <td className="time">16:00 - 22:00</td>
              </tr>
              <tr>
                <td className="weekday">Lördag:</td>
                <td className="time">18:00 - 24:00</td>
              </tr>
              <tr>
                <td className="weekday">Söndag:</td>
                <td className="time">16:00 - 22:00</td>
              </tr>
            </table>
          </div>
          <div className="footer-column">
            <h3 className="footer-logo">Funky Fusion</h3>
            <img className="ff-pic" src={ff} alt="FFlogga" />
            <p>
              <BiSolidCopyright className="copyright-icon" /> Created by Crazy
              Monkeys
            </p>
          </div>
          <div className="footer-column">
            <h3 className="contact-us">Kontakta oss</h3>
            <p>
              <SiGooglemaps className="dark-icons" /> Drottninggatan 174,
              Karlstad
            </p>
            <p>
              <BsFillTelephoneFill className="dark-icons" /> 054-240 240
            </p>
            <p>
              <IoIosMail className="dark-icons" /> Fonky_Fusion@CrazyMonkeys.com
            </p>
            <div className="media-icons-desktop">
              <p className="follow-us">Följ oss</p>
              <FaInstagram className="instagram-icon" />
              <FaXTwitter className="twitter-icon" />
              <FaFacebook className="facebook-icon" />
            </div>
          <LuLogIn className="login-icon-desktop" />
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
