import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">AC Repair Services</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-blue-200">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-blue-200">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-200">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-200">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
