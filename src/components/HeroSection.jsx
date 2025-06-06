import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import curosel1 from "../assets/hand-checking-air-conditioner-room.webp";
import curosel2 from "../assets/3d-rendering-ventilation-system.webp";
import curosel3 from "../assets/hvac-technician-working-capacitor-part-condensing-unit-male-worker-repairman-uniform-repairing-adjusting-conditioning-system-diagnosting-looking-technical-issues.webp";
import curosel4 from "../assets/hvac-technician-working-capacitor-part-condensing-unit.webp";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
  };

  const images = [curosel1, curosel2, curosel3, curosel4];

  return (
    <section className="relative w-full h-screen">
      <Slider {...settings} className="h-full">
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-screen">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-6 md:px-12">
              <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6 animate-fade-in">
                Premium AC Repair & Maintenance
              </h1>
              <p className="text-lg md:text-2xl text-white mb-8 max-w-3xl animate-fade-in">
                Reliable, fast, and affordable AC services to keep your home
                cool and comfortable.
              </p>
              <div className="flex gap-4 animate-slide-up">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 shadow-lg">
                  Book a Service Now
                </button>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300 shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;
