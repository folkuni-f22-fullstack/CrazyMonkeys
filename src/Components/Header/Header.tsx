import "./header.css";
import { useNavigate, NavLink } from "react-router-dom";
import Loggo from "../../assets/Loggo.png";
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



    const scrollToBottom = () => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    };
  
    
  ;
 
  

  return (
    <>
      <section className="header-container">
        <NavLink
          className="navbar"
          onClick={() => {
            navigate("/menu");
          }}
          to={"/menu"}
        >
          Meny
        </NavLink>
        <NavLink
          className="navbar"
          onClick={() => {
            navigate("/kundkorg");
          }}
          to={"/kundkorg"}
        >
          Din Beställning
        </NavLink>

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
<<<<<<< HEAD
        <a className="navbar" onClick= {() => {navigate("/kvitto")}}>Om Oss</a>
        <a className="navbar" onClick={scrollToBottom}> kontakta oss</a>
       
=======
        <p className="navbar">Om Oss</p>
        <p className="navbar">Kontakta Oss</p>
     
>>>>>>> dev
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
