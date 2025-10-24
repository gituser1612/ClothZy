import React, { useState } from "react";
import "../CSS/LoginSignup.css";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(false); 

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        {/* Toggle Header */}
        <div className="loginsignup-toggle">
          <h2
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </h2>
          <h2
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </h2>
        </div>

        {/* Form */}
        <div className="loginsignup-form">
          {!isLogin ? (
            <>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
              <button>Sign Up</button>
            </>
          ) : (
            <>
              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
              <button>Login</button>
            </>
          )}
        </div>

        {/* Agreement & Links */}
        {!isLogin && (
          <div className="loginsignup-agree">
            <input type="checkbox" id="agree" />
            <label htmlFor="agree">
              I agree to the <span>Terms of Use</span> &{" "}
              <span>Privacy Policy</span>
            </label>
          </div>
        )}

        <p className="loginsignup-switch">
          {isLogin
            ? "Don't have an account? "
            : "Already have an account? "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up" : "Login here"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
