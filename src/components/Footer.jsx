import React from "react";
import "./Footer.css";
import logoNitec from "../assets/images/logo nitec.png";
import logoSDU from "../assets/images/Frame 8.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-col logo-block">
          <img src={logoNitec} alt="NITEC Logo" className="logo-img" />
          <p className="copyright">АО «НИТ» © 2025 г.<br />Все права защищены</p>
          <img src={logoSDU} alt="SDU Logo" className="logo-img sdu" />
          <p className="copyright">Smart Data Ukimet © 2025 г.<br />Все права защищены</p>
        </div>

        <div className="footer-col">
          <h4>Use cases</h4>
          <ul>
            <li>UI design</li>
            <li>UX design</li>
            <li>Wireframing</li>
            <li>Diagramming</li>
            <li>Brainstorming</li>
            <li>Online whiteboard</li>
            <li>Team collaboration</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li>Design</li>
            <li>Prototyping</li>
            <li>Development features</li>
            <li>Design systems</li>
            <li>Collaboration features</li>
            <li>Design process</li>
            <li>FigJam</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Best practices</li>
            <li>Colors</li>
            <li>Color wheel</li>
            <li>Support</li>
            <li>Developers</li>
            <li>Resource library</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
