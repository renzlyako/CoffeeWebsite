import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-bg">
        <img
          src="https://cdn.codia.ai/figma/4m4FRFl7ReqcrYDfHoTY0L/img-0574a6edf7d9ae08.png"
          alt="Coffee beans footer"
          className="footer-bg-img"
        />
        <div className="footer-overlay" />
      </div>

      <div className="footer-content">
        <div className="footer-subscription">
          <h3 className="subscription-title">Coffee Subscription</h3>
          <p className="subscription-desc">
            Sign up with your email to receive exclusive promotions, special discounts, and updates on the latest
            products and deals from Heart and Beans.
          </p>
          <div className="subscription-form">
            <input type="email" placeholder="Enter your email address" className="email-input" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
          <p className="subscription-tagline">Shop smarter and save more!</p>
        </div>

        <div className="footer-links-area">
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-list">
              <li><a href="#">Home</a></li>
              <li><a href="#">All Categories</a></li>
              <li><a href="#">Log in</a></li>
              <li><a href="#">Sign up</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Need Help?</h4>
            <ul className="footer-list">
              <li><a href="#">Contact us</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Terms &amp; Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Social Media</h4>
            <div className="social-icons">
              <img
                src="https://cdn.codia.ai/figma/4m4FRFl7ReqcrYDfHoTY0L/img-72598127bc1f80e4.png"
                alt="Social media"
                className="social-img"
              />
            </div>
            <h4 className="footer-col-title" style={{ marginTop: '20px' }}>We accept</h4>
            <div className="payment-icons">
              <img src="https://cdn.codia.ai/figma/4m4FRFl7ReqcrYDfHoTY0L/img-c912699d813f0ad4.png" alt="Visa" className="payment-icon" />
              <img src="https://cdn.codia.ai/figma/4m4FRFl7ReqcrYDfHoTY0L/img-f23ab4a716d2f73d.png" alt="MasterCard" className="payment-icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <hr className="footer-hr" />
        <p className="footer-copy">2026 Heart &amp; Bean. All rights reserved</p>
      </div>
    </footer>
  );
}
