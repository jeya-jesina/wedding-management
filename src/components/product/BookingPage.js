import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookingPage.css";

function BookingPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Fetch cart items and pre-filled form data from state
  const cartItems = location.state?.cart || [];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    eventType: "", // New field for event type
    guests: "", // New field for number of guests
    venue: "", // New field for venue details
    specialRequests: "", // New field for special requests
  });
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  // Validate form fields
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = "Enter a valid email.";
    if (!formData.phone.match(/^\d{10}$/)) newErrors.phone = "Phone number must be 10 digits.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.date) newErrors.date = "Please select a date.";
    if (!formData.eventType.trim()) newErrors.eventType = "Event type is required.";
    if (!formData.guests || isNaN(formData.guests) || formData.guests <= 0) {
      newErrors.guests = "Enter a valid number of guests.";
    }
    if (!formData.venue.trim()) newErrors.venue = "Venue details are required.";
    return newErrors;
  };

  // Handle form submission
  const handleCheckout = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    alert("Your wedding booking is confirmed!");
    navigate("/"); // Redirect to home or another page after booking
  };

  return (
    <div className="booking-page">
      <h1>Book Your Wedding Event</h1>

      {/* Display cart items */}
      {cartItems.length > 0 ? (
        <div className="booking-items">
          {cartItems.map((item, index) => (
            <div className="booking-item" key={index}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}

      {/* Booking form */}
      <form onSubmit={handleCheckout} className="booking-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error-text">{errors.phone}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="address">Shipping Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <p className="error-text">{errors.address}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="date">Wedding Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          {errors.date && <p className="error-text">{errors.date}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="eventType">Event Type</label>
          <input
            type="text"
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            placeholder="e.g., Reception, Ceremony"
          />
          {errors.eventType && <p className="error-text">{errors.eventType}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of Guests</label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            placeholder="e.g., 150"
          />
          {errors.guests && <p className="error-text">{errors.guests}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="venue">Venue Details</label>
          <textarea
            id="venue"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            placeholder="Enter venue name and address"
          />
          {errors.venue && <p className="error-text">{errors.venue}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="specialRequests">Special Requests</label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            placeholder="Any specific arrangements or requests"
          />
        </div>

        <button type="submit" className="checkout-btn">
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

export default BookingPage;
