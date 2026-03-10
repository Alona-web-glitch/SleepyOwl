import React from "react";
import "../css/Footer.css";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          
          <div className="footer-col">
            <h4>COFFEE</h4>
            <ul>
              <li>🔥 Incredible DEALS</li>
              <li>⭐ Premium Instant</li>
              <li>Cold Brew</li>
              <li>5-Minute Bags</li>
              <li>Arabica Beans</li>
              <li>Ready to Drink</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>CURATED</h4>
            <ul>
              <li>🔥 Best Sellers</li>
              <li>Deal of the Week</li>
              <li>Merchandise</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>SLEEPY OWL</h4>
            <ul>
              <li>Reviews</li>
              <li>About Us</li>
              <li>Sustain Packs</li>
              <li>Returns</li>
              <li>Contact Us</li>
              <li>Terms of Use</li>
              <li>Compliance</li>
              <li>Sitemap</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="footer-about">
            <p>
              Our journey started with three friends with a shared vision. It
              was simple - introduce people to <strong>real good coffee</strong>.
              Today, we'buttonre making high-quality, freshly roasted coffee
              accessible to everyone with our exclusive products.
            </p>

            <div className="newsletter">
              <input type="email" placeholder="Email Newsletter" />
              <button>→</button>
            </div>

            <div className="social-icons">
              <FaInstagram />
              <FaTwitter />
              <FaFacebook />
              <FaYoutube />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2026 Sleepy Owl • <span>Privacy</span> • <span>Terms of Use</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;