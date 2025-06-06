import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 AC Repair Services. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="mx-2 hover:text-blue-200">
            Facebook
          </a>
          <a href="#" className="mx-2 hover:text-blue-200">
            Twitter
          </a>
          <a href="#" className="mx-2 hover:text-blue-200">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
