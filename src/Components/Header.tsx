import "./header.css";
import Loggo from "../assets/Loggo.png";
import Cart from "../assets/carImage.png";
import { useState } from "react";

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
      <div
        className={`menu-icon ${isMenuIconCross ? "cross" : ""}`}
        onClick={toggleMenuOverlay}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <img className="loggo" src={Loggo} alt="Företagets logga" />
      <img className="shopping-cart" src={Cart} alt="en bild på en kundvagn" />

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
