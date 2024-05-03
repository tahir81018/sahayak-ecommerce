'use client'
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { apiBaseUrl } from "@/app/constants";

export default function ProductsComponent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const notify = (message, type) => {
    toast(message, { position: "top-center", type: type });
  };

  const fetchData = () => {
    axios
      .get(`${apiBaseUrl}/products/all`)
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.error(err);
        notify(`Error : ${err.message}`, "error");
      });
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8 divide-y">
        <h2 className=" text-3xl text-center py-6 font-medium">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 py-12">
          {products.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
