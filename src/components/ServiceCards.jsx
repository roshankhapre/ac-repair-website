import React from "react";

const ServiceCards = ({ icon, title, description, buttonText, gradient }) => {
  return (
    <div className="relative group max-w-sm mx-auto bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className={`absolute inset-0 ${gradient} opacity-40 rounded-2xl`} />

      <div className="relative p-8 flex flex-col items-center text-center">
        {/* Icon with Glow Effect */}
        <div className="p-4 rounded-full bg-white/20 backdrop-blur-md group-hover:scale-110 transition-all">
          {icon}
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-white mt-4">{title}</h2>

        {/* Description */}
        <p className="text-gray-300 text-sm mt-3">{description}</p>

        {/* Button */}
        <button className="mt-6 bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 backdrop-blur-md">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-white mb-12">
          Our <span className="text-blue-400">Services</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* AC Repair & Services */}
          <ServiceCards
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-blue-400 drop-shadow-md"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            }
            title="AC Repair & Services"
            description="Professional AC repair services to keep your space cool & comfortable all year round."
            buttonText="Book Now"
            gradient="bg-gradient-to-br from-blue-500 to-blue-800"
          />

          {/* AC Installation */}
          <ServiceCards
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-green-400 drop-shadow-md"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 11l7-7 7 7M5 19l7-7 7 7"
                />
              </svg>
            }
            title="AC Installation"
            description="Hassle-free installation services with expert guidance for optimal performance."
            buttonText="Get a Quote"
            gradient="bg-gradient-to-br from-green-500 to-green-800"
          />

          {/* AC Maintenance */}
          <ServiceCards
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-purple-400 drop-shadow-md"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
            title="AC Maintenance"
            description="Regular servicing to prevent breakdowns and ensure long-lasting performance."
            buttonText="Schedule Now"
            gradient="bg-gradient-to-br from-purple-500 to-purple-800"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
