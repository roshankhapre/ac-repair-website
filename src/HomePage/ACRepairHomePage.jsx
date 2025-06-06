import { useState } from "react";
import { FaPhoneAlt, FaTools, FaClock, FaMapMarkerAlt } from "react-icons/fa";

export default function ACRepairHomePage() {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">CoolFix AC Services</h1>
        <button className="bg-yellow-400 px-5 py-3 rounded-full">
          Call Now: +91 98765 43210
        </button>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-blue-500 text-white">
        <h2 className="text-4xl font-bold">Reliable AC Repair & Maintenance</h2>
        <p className="mt-4 text-lg">
          Fast, Affordable & Trusted Services Near You
        </p>
        <button className="mt-6 bg-yellow-400 px-6 py-3 rounded-lg text-gray-900 text-lg">
          Book a Service
        </button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <ServiceCard
            icon={<FaTools />}
            title="AC Repair"
            desc="Quick & professional AC repair services."
          />
          <ServiceCard
            icon={<FaClock />}
            title="Maintenance"
            desc="Regular servicing to keep your AC running smoothly."
          />
          <ServiceCard
            icon={<FaMapMarkerAlt />}
            title="Installation"
            desc="Expert AC installation with proper setup."
          />
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-gray-200 text-center">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="mt-4">Have a question? Call or WhatsApp us!</p>
        <button className="mt-6 bg-green-500 px-6 py-3 rounded-lg text-white text-lg">
          WhatsApp Us
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-10">
        <p>&copy; 2025 CoolFix AC Services. All rights reserved.</p>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="text-blue-600 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-gray-600">{desc}</p>
    </div>
  );
}
