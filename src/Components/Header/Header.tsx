import "./header.css";
import { useNavigate, NavLink} from "react-router-dom";
import Loggo from "../../assets/Loggo.png";
// import Cart from "../../assets/carImage.png";
import { useState } from "react";
import desktop from "../../assets/Desktoplogga.png";



function Header() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isMenuIconCross, setIsMenuIconCross] = useState(false);
  const navigate = useNavigate();
  const toggleMenuOverlay = () => {
    setShowOverlay(!showOverlay);
    setIsMenuIconCross(!isMenuIconCross);
  };

  return (
    <>
      <section className="header-container">
        {/* <p className="navbar">Hem</p> */}
        <NavLink className="navbar" onClick= {() => {navigate("/menu")}}
        >Meny</NavLink>
        <a className="navbar"  onClick= {() => {navigate("/kundkorg")}}>Din Beställning</a>

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
        <a className="navbar" onClick= {() => {navigate("/kvitto")}}>Om Oss</a>
        <a className="navbar">Kontakta Oss</a>
        {/* <img
          className="shopping-cart"
          src={Cart}
          alt="en bild på en kundvagn"
        /> */}
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
