import React from "react";
import "./Footer.css";
import { FaLinkedin, FaTwitter, FaTelegram, FaYoutube, FaDiscord } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      {/* CTA Section */}
      <div className="cta">
        <h2>
          Ready to <span className="highlight">Start Earning?</span>
        </h2>
        <p>
          Join thousands of users growing their crypto portfolios with staking.
        </p>
        <div className="cta-buttons">
          <button className="btn-primary">Get Started Now</button>
          <button className="btn-secondary">Contact Support</button>
        </div>
      </div>

      {/* Footer Links & Logo */}
      <div className="footer-content">
        <div className="footer-logo">
          <span>DSTAKE</span>
        </div>

        <ul className="footer-links">
          <li>How It Works</li>
          <li>Supported Cryptos</li>
          <li>Staking Plans</li>
          <li>FAQ</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>

        <div className="footer-socials">
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaDiscord /></a>
          <a href="#"><FaTelegram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 DSTAKE | hello@DSTAKE.com</p>
      </div>
    </footer>
  );
}

export default Footer;
