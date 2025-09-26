import React from "react";
import "./Bus.css"; // optional for styling

export default function Bus({ bus }) {
  return (
    <div className="bus-card">
      <h2>🚌 {bus.route}</h2>
      <p>🪑 Seats: {bus.seats}</p>
      <p>💰 Price: ₹{bus.price}</p>
    </div>
  );
}
