import React, { useState, useEffect } from "react";

export default function BusList() {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    const staticBuses = [
      { id: 1, route: "Hyderabad → Bangalore", seats: 50, price: 499 },
      { id: 2, route: "Chennai → Mumbai", seats: 40, price: 699 },
      { id: 3, route: "Delhi → Pune", seats: 35, price: 899 },
    ];
    setBuses(staticBuses);
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🚌 Available Buses</h2>
      <p style={styles.subtitle}>Choose your route and book your seat instantly</p>

      <div style={styles.grid}>
        {buses.map((bus) => (
          <div key={bus.id} style={styles.card}>
            <h3 style={styles.route}>{bus.route}</h3>
            <p style={styles.detail}>🪑 Seats Available: <b>{bus.seats}</b></p>
            <p style={styles.detail}>💰 Ticket Price: <b>₹{bus.price}</b></p>
            <button style={styles.button}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { textAlign: "center" },
  heading: { fontSize: "2rem", marginBottom: "5px" },
  subtitle: { color: "#666", marginBottom: "25px" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "white",
    borderRadius: "15px",
    padding: "20px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    transition: "transform 0.3s",
    cursor: "pointer",
  },
  route: { fontSize: "1.3rem", marginBottom: "10px" },
  detail: { margin: "8px 0", color: "#555" },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    background: "#6200ea",
    border: "none",
    color: "white",
    fontSize: "1rem",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
};