import React from "react";

const Offers = () => {
  return (
    <section className="bg-yellow-100 py-12 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">
        🔥 Limited-Time Offers
      </h2>
      <p className="text-lg text-gray-700">
        Book now and get 20% off AC Maintenance Services!
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-full mt-4 hover:bg-blue-700 transition">
        Claim Offer
      </button>
    </section>
  );
};

export default Offers;
