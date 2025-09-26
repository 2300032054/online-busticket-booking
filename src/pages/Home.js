import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(){
  return (
    <div>
      <h1>Welcome to Online Bus Booking</h1>
      <p>Search buses and book seats easily.</p>
      <Link to="/buses" className="btn">View Buses</Link>
    </div>
  );
}
