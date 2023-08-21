import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import './GameBookingPage.css'; // Create this CSS file for component-specific styles

const GameBookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedGame, setSelectedGame] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);

  const games = ['Football', 'Basketball', 'Tennis'];

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedGame(null);
    setTimeSlots([]);
  };

  const handleGameSelect = (game) => {
    setSelectedGame(game);
    // In a real application, you would fetch available time slots for the selected game and date from the backend.
    // For this example, we'll just generate some dummy time slots.
    setTimeSlots(generateTimeSlots());
  };

  const handleSlotSelect = (slot) => {
    // In a real application, you can handle the selected time slot here.
    console.log(`Selected ${selectedGame} time slot: ${slot}`);
  };

  // Generate time slots for the selected date with a duration of 30 minutes
  const generateTimeSlots = () => {
    const startTime = moment(selectedDate).startOf('day');
    const endTime = moment(selectedDate).endOf('day');
    const slots = [];

    while (startTime.isBefore(endTime)) {
      const slotRange = `${startTime.format('HH:mm')} - ${startTime.add(30, 'minutes').format('HH:mm')}`;
      slots.push(slotRange);
    }

    return slots;
  };

  return (
    <div className="game-booking-container">
      <div className="calendar-container">
        <h1>Game Booking Page</h1>
        <Calendar
          className="Calendar"
          value={selectedDate}
          onChange={handleDateChange}
          minDate={moment().toDate()} // Show the calendar from the current date onwards
        />
      </div>
      <div className="games-container">
        {games.map((game, index) => (
          <div
            key={index}
            onClick={() => handleGameSelect(game)}
            className={`game-box ${game === selectedGame ? 'selected' : ''}`}
          >
            <span className="game">{game}</span>
          </div>
        ))}
      </div>
      <div className="time-slots-container">
        {selectedGame && (
          <>
            <h2>Select a time slot for {selectedGame}:</h2>
            <div className="time-slots">
              {timeSlots.map((slot, index) => (
                <div
                  key={index}
                  onClick={() => handleSlotSelect(slot)}
                  className={`time-slot-box ${slot === selectedGame ? 'selected' : ''}`}
                >
                  <span className="time-slot">{slot}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GameBookingPage;
