import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-10">
      <div className="container mx-auto flex flex-col items-center justify-between sm:flex-row">
        <div className="mb-4 sm:mb-0">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p>Email: emart@gmail.com</p>
          <p>Phone: +1234567890</p>
        </div>
        <div className="mb-4 sm:mb-0">
          <h3 className="text-lg font-semibold mb-2">Links</h3>
          <ul>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fi fi-brands-facebook"></i>{" "}
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fi fi-brands-twitter-alt-circle"></i>{" "}
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fi fi-brands-instagram"></i>{" "}
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fi fi-brands-pinterest"></i>{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center text-gray-500">
        &copy; {new Date().getFullYear()} E-Mart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
