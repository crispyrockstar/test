import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import './SlotBookingPage.css'; // Create this CSS file for component-specific styles

const SlotBookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedSlot(null);
  };

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
  };

  const handleSubmit = () => {
    // Validate the selectedDate and selectedSlot before sending to the backend
    if (selectedDate && selectedSlot) {
      const data = {
        date: selectedDate,
        timeSlot: selectedSlot,
      };
      console.log(data);

      // Replace 'YOUR_BACKEND_API_URL' with the actual URL of your backend API
    //   fetch('YOUR_BACKEND_API_URL', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   })
    //     .then((response) => response.json())
    //     .then((responseData) => {
    //       console.log('Response from the backend:', responseData);
    //       // Handle any further actions or show success message to the user
    //     })
    //     .catch((error) => {
    //       console.error('Error sending data to the backend:', error);
    //       // Handle error scenarios or show error message to the user
    //     });
    } else {
      // Handle case where date or time slot is not selected
      console.log('Please select a date and time slot before submitting.');
    }
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
    <div className="slot-booking-container">
      <div className="calendar-container">
        <h1>Slot Booking Page</h1>
        <Calendar
          className="Calendar"
          value={selectedDate}
          onChange={handleDateChange}
          minDate={moment().subtract(7, 'days').toDate()} // Show the calendar from the last 7 days
          maxDate={new Date()} // Limit the calendar to the current date
        />
      </div>
      <div className="time-slots-container">
        <h2>Select a time slot:</h2>
        <div className="time-slots">
          {generateTimeSlots().map((slot, index) => (
            <div
              key={index}
              onClick={() => handleSlotSelect(slot)}
              className={`time-slot-box ${slot === selectedSlot ? 'selected' : ''}`}
            >
              <span className="time-slot">{slot}</span>
            </div>
          ))}
        </div>
        {selectedSlot && <p>Selected Slot: {selectedSlot}</p>}
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default SlotBookingPage;
