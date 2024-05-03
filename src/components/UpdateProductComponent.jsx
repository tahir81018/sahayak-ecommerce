import { apiBaseUrl } from "@/app/constants";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import React, {  useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const UpdateProductComponent = ({ onClose, productData }) => {
  const [product, setProduct] = useState(productData);
  const searchParams = useSearchParams();
  const router = useRouter();

  const notify = (message, type) => {
    toast(message, { position: "top-center", type: type });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`${apiBaseUrl}/products/${searchParams.get("id")}`, product)
      .then((res) => {
        console.log(res.data);
        notify("Updated", "success");
      })
      .catch((err) => {
        console.error(err);
        notify(`Error : ${err.message}`, "error");
      });
  };
  return (
    <div className=" max-w-lg bg-white px-4 ">
      <ToastContainer />
      <form onSubmit={handleUpdate}>
        <div className=" mb-6">
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Product Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full max-w-lg rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Product name"
            value={product.name}
            onChange={(e) => {
              setProduct({ ...product, name: e.target.value });
            }}
          />
        </div>

        <div className=" mb-6">
          <label
            htmlFor="price"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Price
          </label>
          <div className="relative rounded-md shadow-sm max-w-lg">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="0.00"
              value={product.price}
              onChange={(e) => {
                setProduct({ ...product, price: e.target.value });
              }}
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <p
                id="currency"
                name="currency"
                className="h-full content-center bg-transparent py-0 pl-2 pr-7 text-gray-500 sm:text-sm"
              >
                USD
              </p>
            </div>
          </div>
        </div>
        <div className=" mb-6">
          <label
            htmlFor="quantity"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Quantity
          </label>
          <input
            type="text"
            name="quantity"
            id="quantity"
            className="block w-full max-w-lg rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Quantity"
            value={product.quantity}
            onChange={(e) => {
              setProduct({
                ...product,
                quantity: e.target.value,
              });
            }}
          />
        </div>
        <div className="text-center w-full max-w-lg mt-3">
          <button
            type="submit"
            className=" bg-blue-500 sm:text-sm text-xl p-1.5 m-2 text-white rounded-md hover:outline outline-gray-800"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProductComponent;
