import "./header.css";
import Loggo from "../../assets/Loggo.png";
import { useState } from "react";
import desktop from "../../assets/Desktoplogga.png";
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-scroll";

function Header() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isMenuIconCross, setIsMenuIconCross] = useState(false);

  const scrollDown = () => {
    window.scrollTo({
      top: document.body.scrollHeight - window.innerHeight,
      behavior: "smooth",
    });
  };

  const toggleMenuOverlay = () => {
    setShowOverlay(!showOverlay);
    setIsMenuIconCross(!isMenuIconCross);
  };

  const closeOverlayAndScroll = () => {
    toggleMenuOverlay();
    scrollDown();
  };

  return (
    <>
      <section className="header-container">
        {/* <p className="navbar">Hem</p> */}
        <NavLink className="navbar" to="/menu">
          Meny
        </NavLink>
        <NavLink className="navbar " to="/varukorg">
          Varukorg
        </NavLink>

        <div
          className={`menu-icon ${isMenuIconCross ? "cross" : ""}`}
          onClick={toggleMenuOverlay}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="desktop-container">
          <NavLink to="/">
            <img className="loggo" src={Loggo} alt="Företagets logga" />
          </NavLink>
          {/* Här är den -  - */}
          {/* <div className="desktop-container"> */}

          <p className="company-name">FuNKy FUSION</p>

          <NavLink to="/">
            <img className="desktop-img" src={desktop} alt="Företagets logga" />
          </NavLink>
        </div>
        <NavLink className="navbar" to="/omoss">
          Om Oss
        </NavLink>

        <Link to="footer" className="navbar" smooth={true} duration={500}>
          Kontakt
        </Link>

        <NavLink to="/kundkorg" className="cart-icon">
          <IoCartOutline />
          </NavLink>

        {showOverlay && (
          <div className="overlay" onClick={toggleMenuOverlay}>
            <NavLink to="/menu" className="head-navbar">
              Meny
            </NavLink>
            <NavLink to="/omoss" className="head-navbar" >
              Om oss
            </NavLink>
            <NavLink to="/kundkorg" className="head-navbar">
              Varukorg
            </NavLink>

            <Link
              to="footer"
              className="head-navbar"
              smooth={true}
              duration={500}
              onClick={closeOverlayAndScroll}
            >
              Kontakt
            </Link>
          </div>
        )}
      </section>
      <div className="darkgrey"></div>
    </>
  );
}

export default Header;
