"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Modal from "./Modal";
import AddressForm from "./AddressForm";
import { apiBaseUrl } from "@/app/constants";

const CartComponent = ({ isCartOpen, onClose, cart, subTotal }) => {
  const [isAddressOpen, setIsAddressOpen] = useState(false);
  const [userAddress, setUserAddress] = useState(undefined);
  const [items, setItems] = useState();

  useEffect(() => {
    let cartItems = [];
    cart.forEach((cartItem) => {
      cartItems.push({
        productId: cartItem.product.id,
        boughtQuantity: cartItem.quantity,
      });
    });
    setItems(cartItems);
  }, [cart]);

  const notify = (message, type) => {
    toast(message, { position: "top-center", type: type });
  };

  const handleOrder = () => {
    axios
      .post(`${apiBaseUrl}/orders/create`, {
        items: items,
        userAddress: userAddress,
      })
      .then((res) => {
        notify(`Your order successfully placed`, "success");
      })
      .catch((err) => {
        console.error(err);
        notify(`Error : ${err.message}`, "error");
      });
  };

  const closeAddressModal = () => {
    setIsAddressOpen(false);
  };
  const openAddressModal = () => {
    setIsAddressOpen(true);
  };

  if (!isCartOpen) {
    return null;
  }
  return (
    <div
      className={`relative z-10`}
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2
                      className="text-lg font-medium text-gray-900"
                      id="slide-over-title"
                    >
                      Shopping cart
                    </h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                        onClick={onClose}
                      >
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Close panel</span>
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200"
                      >
                        {cart.map((cartItem, index) => (
                          <li key={index}>
                            <div className="grid grid-cols-2 shadow-md rounded-md p-3">
                              <div>
                                <h2 className=" text-lg font-medium mb-2">
                                  {cartItem.product.name}
                                </h2>
                                <p>Qnt : {cartItem.quantity}</p>
                              </div>
                              <div>
                                <h3 className=" text-lg font-medium mb-2">
                                  ${cartItem.product.price * cartItem.quantity}
                                </h3>
                                <button
                                  type="button"
                                  class="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </li>
                        ))}
                        {userAddress !== undefined ? (
                          <li>
                            <div className=" w-full shadow-md rounded-md bg-white p-3 my-2">
                              <h2 className=" text-lg font-medium">
                                Address :{" "}
                              </h2>
                              <p className="text-sm">
                                City : {userAddress.City}
                              </p>
                              <p className="text-sm">
                                Country : {userAddress.Country}
                              </p>
                              <p className="text-sm">
                                ZipCode : {userAddress.ZipCode}
                              </p>
                            </div>
                          </li>
                        ) : null}
                      </ul>

                      <button
                        type="button"
                        className=" my-10 w-full flex items-center justify-center rounded-md border border-transparent bg-blue-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                        onClick={openAddressModal}
                      >
                        Add Address
                      </button>
                      <Modal
                        title="Add Address"
                        isOpen={isAddressOpen}
                        onClose={closeAddressModal}
                      >
                        <AddressForm setUserAddress={setUserAddress} />
                      </Modal>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${subTotal}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-6">
                    <button
                      type="button"
                      className=" w-full flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                      onClick={handleOrder}
                    >
                      Ordere Now
                    </button>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
