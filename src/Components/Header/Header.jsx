import "./header.css";
import Loggo from "../../assets/Loggo.png";
import { useState } from "react";
import desktop from "../../assets/Desktoplogga.png";
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-scroll";
import { motion } from "framer-motion"

const MotionNavLink = motion(NavLink);

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

  const variants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.09, delayChildren: 0.3 }
    },
    closed: {
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };
  
  const childVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
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

        <NavLink to="/varukorg" className="cart-icon">
          <IoCartOutline />
          </NavLink>

        {showOverlay && (
          <motion.div initial="closed" variants={variants} transition={{ duration: 0.2 }}  animate={showOverlay ? "open" : "closed"} className="overlay" onClick={toggleMenuOverlay}>
            <MotionNavLink variants={childVariants} whileTap={{scale: 1.2 }} whileHover={{ scale: 1.1 }} to="/menu" className="head-navbar">
              Meny
            </MotionNavLink>
            <MotionNavLink variants={childVariants} whileTap={{scale: 1.2 }} whileHover={{ scale: 1.1 }} to="/omoss" className="head-navbar" >
              Om oss
            </MotionNavLink>
            <MotionNavLink variants={childVariants} whileTap={{scale: 1.2 }} whileHover={{ scale: 1.1 }} to="/kundkorg" className="head-navbar">
              Varukorg
            </MotionNavLink>
            <motion.div variants={childVariants} whileTap={{scale: 1.2 }} whileHover={{ scale: 1.1 }}>
            <Link
              to="footer"
              className="head-navbar"
              smooth={true}
              duration={500}
              onClick={closeOverlayAndScroll}
            >
              Kontakt
            </Link>
            </motion.div>

          </motion.div>
        )}
      </section>
      <div className="darkgrey"></div>
    </>
  );
}

export default Header;
