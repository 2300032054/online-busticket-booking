import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSeats, bookSeat } from '../api';

export default function SeatSelection() {
  const { busId } = useParams();
  const navigate = useNavigate();
  const [seats, setSeats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await getSeats(busId);
        setSeats(res.data);
      } catch (err) {
        console.error('Using mock seats', err);
        // simple mock layout: 20 seats with random bookedness
        const mock = Array.from({length: 20}, (_, i) => ({
          id: i+1,
          seatNumber: `${i+1}`,
          status: Math.random() < 0.2 ? 'BOOKED' : 'AVAILABLE'
        }));
        setSeats(mock);
      } finally {
        setLoading(false);
      }
    })();
  }, [busId]);

  const toggleSelect = (id) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const handleBook = async () => {
    try {
      await bookSeat({ userId: 1, busId: Number(busId), seatIds: selected });
      navigate('/confirmation');
    } catch (err) {
      console.error(err);
      // navigate anyway for local test
      navigate('/confirmation');
    }
  };

  if (loading) return <p>Loading seats...</p>;

  return (
    <div>
      <h2>Select Seats (Bus {busId})</h2>
      <div className="seats-grid">
        {seats.map(seat => {
          const disabled = seat.status === 'BOOKED';
          const selectedClass = selected.includes(seat.id) ? 'selected' : '';
          return (
            <button
              key={seat.id}
              onClick={() => toggleSelect(seat.id)}
              disabled={disabled}
              className={`seat ${disabled ? 'booked' : selectedClass}`}
            >
              {seat.seatNumber}
            </button>
          );
        })}
      </div>

      <div className="booking-actions">
        <p>Selected seats: {selected.length}</p>
        <button disabled={selected.length === 0} onClick={handleBook}>Book Selected</button>
      </div>
    </div>
  );
}
