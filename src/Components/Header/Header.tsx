import "./header.css";
import Loggo from "../../assets/Loggo.png";
import { useState } from "react";
import desktop from "../../assets/Desktoplogga.png";
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";


function Header() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isMenuIconCross, setIsMenuIconCross] = useState(false);

  const toggleMenuOverlay = () => {
    setShowOverlay(!showOverlay);
    setIsMenuIconCross(!isMenuIconCross);
  };

  return (
    <>
      <section className="header-container">
        {/* <p className="navbar">Hem</p> */}
        <NavLink className="navbar" to="/menu">
          Meny
        </NavLink>
        <NavLink className="navbar " to="/kundkorg">
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
        <NavLink to="/">
          <img className="loggo" src={Loggo} alt="Företagets logga" />
        </NavLink>

        <div className="desktop-container">
          <p className="company-name">FuNKy FUSION</p>

          <NavLink to="/">
            <img className="desktop" src={desktop} alt="Företagets logga" />
          </NavLink>
        </div>
        <NavLink className="navbar" to="#">Om Oss</NavLink>
        <NavLink className="navbar" to="#">Kontakta Oss</NavLink>

        {/* <span className="material-symbols-outlined cart">shopping_cart</span>
         */}

         <div className="cart-icon"> <IoCartOutline /> </div>

        {showOverlay && (
          <div className="overlay" onClick={toggleMenuOverlay}>
            <NavLink to="/menu">
              <p>Meny</p>
            </NavLink>
            <NavLink to="#">Om oss</NavLink>
            <NavLink to="#">Varukorg</NavLink>
            <NavLink to="#">Kontakta oss</NavLink>
          </div>
        )}
      </section>
      <div className="darkgrey"></div>
    </>
  );
}

export default Header;
