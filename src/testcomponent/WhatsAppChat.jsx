import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const WhatsAppChat = () => {
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 2000); // Faster blinking (2 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-16 right-6 flex flex-col space-y-4 z-50">
      {/* WhatsApp Chat Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center space-x-3 px-6 py-3 rounded-full shadow-xl font-semibold transition transform hover:scale-105 ${
          blink ? "animate-pulse" : ""
        } bg-green-500 text-white hover:bg-green-600 glow-green`}
      >
        <FaWhatsapp className="text-2xl animate-bounce" />
        <span>Chat on WhatsApp</span>
      </a>

      {/* Call Button */}
      <a
        href="tel:+1234567890"
        className={`flex items-center space-x-3 px-6 py-3 rounded-full shadow-xl font-semibold transition transform hover:scale-105 ${
          blink ? "animate-pulse" : ""
        } bg-blue-500 text-white hover:bg-blue-600 glow-blue`}
      >
        <FaPhoneAlt className="text-2xl animate-bounce" />
        <span>Call Now</span>
      </a>

      <style jsx>{`
        @keyframes glow {
          0% {
            box-shadow: 0 0 10px rgba(0, 255, 0, 0.7);
          }
          50% {
            box-shadow: 0 0 20px rgba(0, 255, 0, 1);
          }
          100% {
            box-shadow: 0 0 10px rgba(0, 255, 0, 0.7);
          }
        }

        .glow-green {
          animation: glow 1.5s infinite alternate;
        }

        .glow-blue {
          animation: glow 1.5s infinite alternate;
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
};

export default WhatsAppChat;
