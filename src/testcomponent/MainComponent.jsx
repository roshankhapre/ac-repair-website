import React from "react";
import BookingSystem from "./BookingSystem";
import LiveChatSupport from "./LiveChatSupport";
import WhatsAppChat from "./WhatsAppChat";
import BlogSection from "./BlogSection";
import Offers from "./Offers";

const MainComponent = () => {
  return (
    <div className="bg-gray-100">
      {/* Booking System */}
      <BookingSystem />

      {/* Live Chat Support */}

      {/* WhatsApp Chat */}
      <WhatsAppChat />

      {/* Blog Section */}
      <BlogSection />

      {/* Offers & Discounts */}
      <Offers />
    </div>
  );
};

export default MainComponent;
