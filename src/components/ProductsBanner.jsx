import React from "react";

const ProductsBanner = () => {
  return (
    <div
      className="relative bg-cover bg-center py-32"
      style={{
        backgroundImage:
          'url("https://static.doofinder.com/main-files/uploads/2018/01/Top6Sales.png")',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto text-center relative">
        <h2 className="text-4xl font-bold text-white mb-4">New Arrivals</h2>
        <p className="text-lg text-white mb-8">
          Check out our latest collection!
        </p>
        <button className="bg-white text-gray-900 py-3 px-6 rounded-full font-semibold text-lg">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default ProductsBanner;
