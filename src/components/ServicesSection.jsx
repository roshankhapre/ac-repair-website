import React from "react";
import { FaTools, FaSnowflake, FaClock, FaStar } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      title: "AC Repair",
      description:
        "Fast and reliable AC repair services to keep your home cool.",
      icon: <FaTools />,
      features: [
        "24/7 Emergency Service",
        "Expert Technicians",
        "Affordable Pricing",
        "Same-Day Repairs",
        "Warranty on Repairs",
      ],
      isPopular: true,
    },
    {
      title: "AC Maintenance",
      description: "Regular maintenance to ensure your AC runs efficiently.",
      icon: <FaSnowflake />,
      features: [
        "Monthly Checkups",
        "Filter Cleaning",
        "Performance Optimization",
        "Energy Efficiency Tips",
        "Annual Maintenance Plans",
      ],
    },
    {
      title: "AC Installation",
      description: "Professional installation of new AC units.",
      icon: <FaClock />,
      features: [
        "Free Consultation",
        "Energy-Efficient Models",
        "Warranty Included",
        "Custom Installation",
        "Post-Installation Support",
      ],
    },
    {
      title: "Premium Service",
      description: "Exclusive services for premium customers.",
      icon: <FaStar />,
      features: [
        "Priority Scheduling",
        "Dedicated Support",
        "Discounts on Repairs",
        "Annual Free Checkups",
        "VIP Customer Care",
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12 text-gray-900">
          🌟 Our Premium AC Services
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          We offer top-notch AC services to keep your home cool and comfortable.
          Choose the best service that suits your needs!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
              isPopular={service.isPopular}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
