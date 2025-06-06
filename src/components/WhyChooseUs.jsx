import React from "react";
import acimg from "../assets/air-conditioner-on-amazon-sale-2024-during-off-season-106664544.webp";
import { CheckCircle, DollarSign, Headphones } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Content */}
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-5xl font-extrabold text-white leading-tight">
            Why Choose <span className="text-blue-500">Us?</span>
          </h2>
          <p className="text-gray-300 text-lg">
            We provide top-notch AC repair services with skilled professionals,
            competitive pricing, and 24/7 customer support.
          </p>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-800 to-gray-800 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center mb-4">
                  {reason.icon}
                  <h3 className="text-xl font-semibold text-white ml-4">
                    {reason.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={acimg}
            alt="Why Choose Us"
            className="rounded-2xl shadow-2xl w-full max-w-lg hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
};

const reasons = [
  {
    title: "Trusted Service Center",
    description:
      "Our certified experts ensure reliable and top-quality AC repair services.",
    icon: <CheckCircle className="h-8 w-8 text-blue-500" />,
  },
  {
    title: "Reasonable Pricing",
    description:
      "We offer the most competitive prices without compromising on quality.",
    icon: <DollarSign className="h-8 w-8 text-blue-500" />,
  },
  {
    title: "24/7 Customer Support",
    description: "Our team is always ready to assist you anytime, anywhere.",
    icon: <Headphones className="h-8 w-8 text-blue-500" />,
  },
];

export default WhyChooseUs;
