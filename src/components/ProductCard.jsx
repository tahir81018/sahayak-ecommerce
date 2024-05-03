"use client";
import { addToCart } from "@/redux/actions/cart-action";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const addProduct = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="p-4">
        <h2 className="text-gray-800 font-semibold text-lg mb-2">
          {product.name}
        </h2>
        <div className="flex justify-between">
          <p className="text-gray-600">${product.price}</p>
          <p className="text-gray-600">Qnt : {product.quantity}</p>
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 mr-2"
            onClick={addProduct}
          >
            Add to Cart
          </button>
          <button
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            onClick={() => {
              router.push(`/products/details?id=${product.id}`, {
                scroll: false,
              });
            }}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
