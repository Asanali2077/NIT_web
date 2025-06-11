import React from 'react';
import './OpenSourceTools.css';

function OpenSourceTools() {
  return (
    <div className="open-source-tools">
      <h2>Мы используем Open-Source инструменты</h2>
      <div className="tools-container">
        <div className="tool-logo">
          <div className="logo-container">
            <div className="logo-variant-3">
              {/* Logo SVG elements would go here */}
            </div>
          </div>
        </div>
        <div className="tool-logo">
          <div className="logo-container">
            <div className="logo-variant-4">
              {/* Logo SVG elements would go here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenSourceTools; 