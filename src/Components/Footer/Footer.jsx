import React from 'react'
import "./Footer.css"
import logo from "../../assets/shopping_logo.png"
import instagram_icon from "../../assets/instagram_icon.svg"
import facebook_icon from "../../assets/facebook_icon.svg"
import whatsapp_icon from "../../assets/whatsapp_icon.svg"

const Footer = () => {
return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
            <img src={logo} alt="" height="80px"/>
                <div className="footer-left-text">
                <h2>ClothZy</h2>
                <p>Your one-stop fashion destination</p>
            </div>
          
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/mens">Men</a></li>
            <li><a href="/womens">Women</a></li>
            <li><a href="/kids">Kids</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@clothzy.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
           <img src={instagram_icon} alt="instagram_icon" height="30px" />
            <img src={facebook_icon} alt="facebook_icon" height="30px" />
             <img src={whatsapp_icon} alt="whatsapp_icon" height="30px" />

          
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-copyright">
        <p>© 2025 ClothZy. All rights reserved.</p>
        </div>
        <div className="footer-bottom-tags">
            <p>Privacy Policy</p>
            <p>Terms&Conditions</p>
            <p>Disclaimer</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;