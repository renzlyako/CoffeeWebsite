import { useState } from 'react';
import './Nav.css';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        <div className="nav-logo">
          <img src="https://cdn.codia.ai/figma/4m4FRFl7ReqcrYDfHoTY0L/img-50d1aed7a5c22c2d.png" alt="Heart & Bean Logo" className="nav-logo-img" />
        </div>
        <ul className="nav-links">
          <li><a href="#" className="nav-link active">Home</a></li>
          <li><a href="#about" className="nav-link">About us</a></li>
          <li><a href="#blog" className="nav-link">Blog</a></li>
          <li><a href="#shop" className="nav-link">Shop</a></li>
          <li><a href="#contact" className="nav-link">Contact us</a></li>
        </ul>
        <div className="nav-auth">
          <a href="#" className="nav-link">Sign in</a>
          <a href="#" className="nav-link">Register</a>
        </div>
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {menuOpen && (
        <div className="nav-overlay">
          <button
            className="nav-overlay-close"
            onClick={() => setMenuOpen(false)}
          >✕</button>
          <ul className="nav-overlay-links">
            <li><a href="#" className="nav-overlay-link active" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" className="nav-overlay-link" onClick={() => setMenuOpen(false)}>About us</a></li>
            <li><a href="#blog" className="nav-overlay-link" onClick={() => setMenuOpen(false)}>Blog</a></li>
            <li><a href="#shop" className="nav-overlay-link" onClick={() => setMenuOpen(false)}>Shop</a></li>
            <li><a href="#contact" className="nav-overlay-link" onClick={() => setMenuOpen(false)}>Contact us</a></li>
          </ul>
          <div className="nav-overlay-auth">
            <a href="#" className="nav-overlay-link" onClick={() => setMenuOpen(false)}>Sign in</a>
            <a href="#" className="nav-overlay-link" onClick={() => setMenuOpen(false)}>Register</a>
          </div>
        </div>
      )}
    </>
  );
}