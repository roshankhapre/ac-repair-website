import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-blue-500">
            Get in <span className="text-white">Touch</span>
          </h2>
          <p className="text-gray-300 text-lg mt-2">
            Have any questions? Reach out to us, and we’ll get back to you soon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg">
            <h3 className="text-3xl font-semibold text-blue-400 mb-6">
              Contact Form
            </h3>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full bg-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                className="w-full bg-white/10 text-white px-4 py-3 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 py-3 font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="bg-white/10 p-6 rounded-xl flex items-center space-x-4">
              <FaPhoneAlt className="text-3xl text-blue-500" />
              <div>
                <h4 className="text-xl font-semibold">Call Us</h4>
                <p className="text-gray-300">+91 98765 43210</p>
              </div>
            </div>
            <div className="bg-white/10 p-6 rounded-xl flex items-center space-x-4">
              <FaEnvelope className="text-3xl text-blue-500" />
              <div>
                <h4 className="text-xl font-semibold">Email Us</h4>
                <p className="text-gray-300">support@acrepair.com</p>
              </div>
            </div>
            <div className="bg-white/10 p-6 rounded-xl flex items-center space-x-4">
              <FaMapMarkerAlt className="text-3xl text-blue-500" />
              <div>
                <h4 className="text-xl font-semibold">Visit Us</h4>
                <p className="text-gray-300">
                  123 AC Repair Street, Indore, MP
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-blue-400">
                Business Hours
              </h4>
              <ul className="mt-3 text-gray-300 space-y-1">
                <li>Monday - Friday: 9 AM - 7 PM</li>
                <li>Saturday: 10 AM - 5 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>

            {/* WhatsApp Chat Button */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-300 text-lg font-semibold"
            >
              <FaWhatsapp className="mr-2 text-2xl" /> Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Google Map */}
        <div className="h-72 rounded-xl overflow-hidden shadow-xl">
          <iframe
            title="Google Map Location"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086096799201!2d-122.41941628468198!3d37.77492997975933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2a555555%3A0x4a6ed5f68a97f27e!2sAC%20Repair%20Services!5e0!3m2!1sen!2sin!4v1678733749845!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
