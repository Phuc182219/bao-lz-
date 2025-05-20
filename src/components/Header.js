import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <div className="header-content">
        <div className="logo">NEURAPIX</div>
        <div className="header-actions">
          <a href="#" className="btn btn-upgrade">UPGRADE</a>
          <div className="user-profile">
            <div className="user-avatar">A</div>
            <span>User Profile</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header; 