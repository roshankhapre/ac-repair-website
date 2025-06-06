import React from "react";
import aboutImg from "../assets/air-conditioner-on-amazon-sale-2024-during-off-season-106664544.webp"; // Replace with a relevant image

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center px-6 lg:px-20">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-6xl text-center space-y-4">
          <h1 className="text-5xl font-extrabold text-blue-500">
            About <span className="text-white">Our Service</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We provide top-notch AC repair and maintenance services, ensuring
            customer satisfaction with professional expertise and timely
            service.
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/10 rounded-xl shadow-lg -rotate-2 scale-105"></div>
            <img
              src={aboutImg}
              alt="AC Service"
              className="relative rounded-xl shadow-2xl transform hover:rotate-3 transition-all duration-300"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              Who <span className="text-blue-500">We Are?</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              With years of experience in **AC repair and maintenance**, we have
              established ourselves as a trusted name in the industry. We
              specialize in **installation, servicing, and emergency repairs**.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "10+ Years Experience",
                  icon: "🔧",
                  description:
                    "Highly trained technicians with deep expertise.",
                },
                {
                  title: "5,000+ Happy Clients",
                  icon: "😊",
                  description: "Customer satisfaction is our top priority.",
                },
                {
                  title: "24/7 Emergency Service",
                  icon: "📞",
                  description: "Available anytime to assist you.",
                },
                {
                  title: "Certified & Trusted",
                  icon: "🏅",
                  description: "Licensed professionals you can rely on.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center mb-3 space-x-3">
                    <span className="text-3xl">{item.icon}</span>
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-500 text-center py-10">
        <h3 className="text-2xl font-semibold">Need a Reliable AC Service?</h3>
        <p className="text-gray-100 mt-2">
          Contact us today and let our experts help you!
        </p>
        <button className="mt-4 px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition-all duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
