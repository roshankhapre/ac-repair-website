import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ServicesPage = () => {
  return (
    <div>
      <Header />
      <section className="container mx-auto my-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        {/* Add service cards or accordion here */}
      </section>
      <Footer />
    </div>
  );
};

export default ServicesPage;
