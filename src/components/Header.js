// Header.js
import React from "react";
import "./Header.css";
import Switch from "react-switch";

function Header({ theme, toggleTheme }) {

  return (
    <header className="header">
      <nav className="navigation">
        <a href="/cake">
          <h1 className="company-name">
            <span role="img" aria-label="cake">🍰</span> Cake Creations
          </h1>
        </a>
        <ul className="list">
          <li><a href="#home">Home</a></li>
          <li><a href="#cart"> Add to Cart</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#login">Login</a></li>
          <li>
          <div className="theme-toggle">
        <span role="img" aria-label="sun">🌞</span>
        <Switch
          onChange={toggleTheme}
          checked={theme === "dark"}
          offColor="#ADD8E6"
          onColor="#00000"
          uncheckedIcon={false}
          checkedIcon={false}
        />
        <span role="img" aria-label="moon">🌜</span>
      </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
