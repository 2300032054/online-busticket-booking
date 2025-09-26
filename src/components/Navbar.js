import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.brand}>🚌 SmartBus Booking</h2>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/signup" style={styles.link}>Signup</Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 40px",
    background: "linear-gradient(90deg, #6200ea, #9c27b0)",
    color: "white",
    boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  brand: {
    margin: 0,
    fontSize: "1.7rem",
    fontWeight: "bold",
  },
  link: {
    margin: "0 18px",
    textDecoration: "none",
    color: "white",
    fontSize: "1.1rem",
    fontWeight: "500",
    transition: "0.3s",
  },
};
