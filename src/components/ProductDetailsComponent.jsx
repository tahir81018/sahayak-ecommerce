"use client";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import UpdateProductModal from "./UpdateProductModal";
import UpdateProductComponent from "./UpdateProductComponent";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/actions/cart-action";
import { apiBaseUrl } from "@/app/constants";

const ProductDetailsComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    quantity: 0,
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!searchParams.has("id")) {
    router.push("/not-found");
  }

  useEffect(() => {
    fetchData();
  }, []);

  const notify = (message, type) => {
    toast(message, { position: "top-center", type: type });
  };

  const addProduct = () => {
    dispatch(addToCart(product));
  };

  const fetchData = () => {
    axios
      .get(`${apiBaseUrl}/products/${searchParams.get("id")}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.error(err);
        if (err.response) {
          if (err.response.status == 404) {
            router.push("/not-found");
          }
        }

        notify(`Error : ${err.message}`);
      });
  };

  const deleteProduct = () => {
    axios
      .delete(`http://127.0.0.1:8888/products/${searchParams.get("id")}`)
      .then((res) => {
        notify("Deleted", "success");
        router.push("/products");
      })
      .catch((err) => {
        console.error(err);
        notify(`Error : ${err.message}`);
      });
  };

  return (
    <div className=" w-full flex justify-center py-8">
      {/* <ToastContainer /> */}
      <div className="w-11/12 max-w-xl shadow-md rounded-md bg-white p-6">
        <h2 className="p-3 text-xl font-medium">{`Product : ${product.name}`}</h2>
        <div className=" grid grid-cols-2">
          <div className="p-3">
            <p className=" mb-2">{`Price : ${product.price}`}</p>
            <p className=" mb-2">{`Quantiry : ${product.quantity}`}</p>
          </div>
          <div className=" divide-y">
            <h3 className=" text-lg mb-2">Descriptions :</h3>
            <p className=" text-sm mt-1 p-1 overflow-scroll sm:overflow-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              at fugiat veniam libero asperiores necessitatibus. Culpa dolorum
              et vero non possimus, ab earum enim. Corporis error obcaecati,
              molestias sequi cum dolore quia ab similique porro maiores
              necessitatibus quis quos saepe veniam quasi reiciendis, amet
              veritatis iusto! Recusandae maxime aperiam alias?
            </p>
          </div>
        </div>
        <div className="flex justify-around p-6">
          <button
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 mr-2"
            onClick={addProduct}
          >
            Add to Cart
          </button>
          <div>
            <button
              className="px-4 py-2 mx-1  bg-gray-300 text-gray-800 rounded hover:bg-green-400"
              onClick={() => {
                openModal();
              }}
            >
              Update
            </button>
            <UpdateProductModal isOpen={isOpen} onClose={closeModal}>
              <UpdateProductComponent
                onClose={closeModal}
                productData={product}
              />
            </UpdateProductModal>
            <button
              className="px-4 py-2  bg-gray-300 text-gray-800 rounded hover:bg-red-400"
              onClick={() => {
                deleteProduct();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsComponent;
