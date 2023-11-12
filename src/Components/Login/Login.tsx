import React, { useState } from "react";

function Login({ isLoginOverlayOpen, setIsLoginOverlayOpen }) {
  const [isOverlayClosed, setIsOverlayClosed] = useState(false);

  const handleCloseOverlay = () => {
    setIsLoginOverlayOpen(false);
    setIsOverlayClosed(false);
  };

  return (
    <>
      {isLoginOverlayOpen && !isOverlayClosed && (
        <div className="login-overlay">
          <span className="close-overlay" onClick={handleCloseOverlay}>
            X
          </span>
          <h1 className="login-title">Login</h1>
          <div className="username-container">
            <label className="username" htmlFor="username">
              Username
            </label>
            <input className="label" type="text" id="username" />
          </div>
          <div className="password-container">
            <label className="password" htmlFor="password">
              Password
            </label>
            <input className="label" type="password" id="password" />
          </div>
          <button className="login-btn">Login</button>
          <p className="register-user">Register new user</p>
        </div>
      )}
    </>
  );
}

export default Login;
