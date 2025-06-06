import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Footer from "../components/Footer";
import TestimonialsSection from "../components/TestimonialsSection";
import WhyChooseUs from "../components/WhyChooseUs";
import MainComponent from "../testcomponent/MainComponent";
import Booking from "../testcomponent/Booking";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />

      <TestimonialCarousel />
      <ServiceCard />
      <TestimonialsSection />
      <WhyChooseUs />
      <MainComponent />
      <Booking />
      <Footer />
    </div>
  );
};

export default HomePage;
