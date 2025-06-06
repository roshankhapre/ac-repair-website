import React from "react";

const Booking = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Book Your Appointment
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Booking Form */}
          <div className="space-y-8">
            {/* Booking Form */}
            <div className="bg-gradient-to-br from-blue-900 to-black rounded-xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Schedule an Appointment
              </h3>
              <form className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Date and Time Field */}
                <div>
                  <label
                    htmlFor="datetime"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Preferred Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    id="datetime"
                    name="datetime"
                    className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                {/* Service Type Field */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Service Type
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="repair">AC Repair</option>
                    <option value="maintenance">AC Maintenance</option>
                    <option value="installation">AC Installation</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300"
                  >
                    Book Now
                  </button>
                </div>
              </form>
            </div>

            {/* Live Chat Support */}
            <div className="bg-gradient-to-br from-blue-900 to-black rounded-xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Live Chat Support
              </h3>
              <p className="text-gray-300 mb-6">
                Have a quick question? Chat with our support team in real-time.
              </p>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300">
                Start Live Chat
              </button>
            </div>
          </div>

          {/* Right Side: WhatsApp Chat and Offers */}
          <div className="space-y-8">
            {/* WhatsApp Click-to-Chat */}
            <div className="bg-gradient-to-br from-blue-900 to-black rounded-xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                WhatsApp Click-to-Chat
              </h3>
              <p className="text-gray-300 mb-6">
                Need instant help? Click below to chat with us on WhatsApp.
              </p>
              <a
                href="https://wa.me/1234567890" // Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.5 2.5a10 10 0 00-16.9 7.2 9.9 9.9 0 001.3 5l-1.5 5.5 5.6-1.5a10 10 0 004.7 1.3 10 10 0 0010-10 10 10 0 00-3.2-7.3zM12 20a8 8 0 01-4.2-1.2l-3.1.8.8-3a8 8 0 1114.4-4.6A8 8 0 0112 20z" />
                  <path d="M16.5 13.2a1.8 1.8 0 01-1.7 1.8 1.8 1.8 0 01-1.8-1.8 1.8 1.8 0 011.8-1.8 1.8 1.8 0 011.7 1.8zM10.5 13.2a1.8 1.8 0 01-1.7 1.8 1.8 1.8 0 01-1.8-1.8 1.8 1.8 0 011.8-1.8 1.8 1.8 0 011.7 1.8z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Offers & Discounts Section */}
            <div className="bg-gradient-to-br from-blue-900 to-black rounded-xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Offers & Discounts
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li>🎉 10% off on your first AC service!</li>
                <li>💸 Flat ₹500 off on AC installation.</li>
                <li>🔧 Free maintenance check-up with every repair.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
