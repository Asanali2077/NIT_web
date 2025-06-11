import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="logo-container">
            <div className="logo">
              <div className="logo-text"></div>
              <div className="logo-icon"></div>
            </div>
          </div>
          <div className="copyright">
            АО «НИТ» © 2025 г.<br/>Все права защищены
          </div>
        </div>
        <div className="footer-section">
          <div className="logo-container">
            <div className="sdu-logo">
              <div className="sdu-icon"></div>
              <div className="sdu-text"></div>
            </div>
          </div>
          <div className="copyright">
            Smart Data Ukimet © 2025 г.<br/>Все права защищены
          </div>
        </div>
        <div className="footer-section">
          <div className="section-title">Use cases</div>
          <div className="section-links">
            <a href="#">UI design</a>
            <a href="#">UX design</a>
            <a href="#">Wireframing</a>
            <a href="#">Diagramming</a>
            <a href="#">Brainstorming</a>
            <a href="#">Online whiteboard</a>
            <a href="#">Team collaboration</a>
          </div>
        </div>
        <div className="footer-section">
          <div className="section-title">Explore</div>
          <div className="section-links">
            <a href="#">Design</a>
            <a href="#">Prototyping</a>
            <a href="#">Development features</a>
            <a href="#">Design systems</a>
            <a href="#">Collaboration features</a>
            <a href="#">Design process</a>
            <a href="#">FigJam</a>
          </div>
        </div>
        <div className="footer-section">
          <div className="section-title">Resources</div>
          <div className="section-links">
            <a href="#">Blog</a>
            <a href="#">Best practices</a>
            <a href="#">Colors</a>
            <a href="#">Color wheel</a>
            <a href="#">Support</a>
            <a href="#">Developers</a>
            <a href="#">Resource library</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer; 