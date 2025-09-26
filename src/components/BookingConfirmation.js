import React from 'react';
import { Link } from 'react-router-dom';

export default function BookingConfirmation(){
  return (
    <div>
      <h2>Booking Confirmed 🎉</h2>
      <p>Your booking is successful. Check your email for ticket details.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
