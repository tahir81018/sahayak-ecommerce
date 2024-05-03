import ProductsBanner from "@/components/ProductsBanner";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="w-full ">
      <ProductsBanner />
      <div>{children}</div>
    </div>
  );
};

export default layout;
