import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.jpg";
import nameImg from "../../assets/home/kalagni_text.png";

const Header = () => {
  return (
    <header
      style={{
        padding: "8px 32px", // thinner
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(255,255,255,0.8)", // semi-transparent light
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.4s ease", // smooth transition
      }}
    >
      {/* Left: Logo + Website Name */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {/* Circular Logo */}
        <img
          src={logo}
          alt="Kalagni Logo"
          style={{
            height: "42px", // smaller
            width: "42px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid #e2e8f0",
            transition: "all 0.3s ease",
          }}
        />

        {/* Website Name */}
        <img
          src={nameImg}
          alt="Kalagni"
          style={{
            height: "30px", // slimmer
            objectFit: "contain",
            transition: "all 0.3s ease",
          }}
        />
      </div>

      {/* Navigation */}
      <nav style={{ display: "flex", gap: "20px" }}>
        <NavLink to="/" label="Home" />
        <NavLink to="/about" label="About" />
        <NavLink to="/contact" label="Contact" />
      </nav>
    </header>
  );
};

const NavLink = ({ to, label }) => (
  <Link
    to={to}
    style={{
      textDecoration: "none",
      color: "#0f172a",
      fontWeight: "600",
      padding: "6px 12px",
      borderRadius: "999px",
      transition: "all 0.3s ease",
    }}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = "rgba(255,255,255,0.7)";
      e.target.style.color = "#0f172a";
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = "transparent";
      e.target.style.color = "#0f172a";
    }}
  >
    {label}
  </Link>
);

export default Header;
