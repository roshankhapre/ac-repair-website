import React, { useState } from "react";

const BookingSystem = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    service: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking Confirmed!");
  };

  return (
    <section className="bg-blue-50 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          📅 Schedule Your AC Service
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 shadow-lg rounded-xl max-w-lg mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg mb-3"
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full p-3 border rounded-lg mb-3"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded-lg mb-3"
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            className="w-full p-3 border rounded-lg mb-3"
            onChange={handleChange}
            required
          />
          <input
            type="time"
            name="time"
            className="w-full p-3 border rounded-lg mb-3"
            onChange={handleChange}
            required
          />
          <select
            name="service"
            className="w-full p-3 border rounded-lg mb-3"
            onChange={handleChange}
            required
          >
            <option value="">Select Service</option>
            <option value="AC Repair">AC Repair</option>
            <option value="AC Installation">AC Installation</option>
            <option value="AC Maintenance">AC Maintenance</option>
          </select>
          <button
            type="submit"
            className="bg-blue-600 text-white w-full py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingSystem;
