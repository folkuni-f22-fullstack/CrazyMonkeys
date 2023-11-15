import "./header.css";
import Loggo from "../../assets/Loggo.png";
import { useState } from "react";
import desktop from "../../assets/Desktoplogga.png";

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
        <p className="navbar">Meny</p>
        <p className="navbar">Din Beställning</p>

        <div
          className={`menu-icon ${isMenuIconCross ? "cross" : ""}`}
          onClick={toggleMenuOverlay}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <img className="loggo" src={Loggo} alt="Företagets logga" />
        <div className="desktop-container">
          <p className="company-name">FuNKy FUSION</p>
          <img className="desktop" src={desktop} alt="Företagets logga" />
        </div>
        <p className="navbar">Om Oss</p>
        <p className="navbar">Kontakta Oss</p>
     
        <span className="material-symbols-outlined">shopping_cart</span>

        {showOverlay && (
          <div className="overlay" onClick={toggleMenuOverlay}>
            <p>Meny</p>
            <p>Om oss</p>
            <p>Din Beställning</p>
            <p>Kontakta oss</p>
          </div>
        )}
      </section>
      <div className="darkgrey"></div>
    </>
  );
}

export default Header;
