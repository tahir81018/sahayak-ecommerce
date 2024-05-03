import React, { useState } from "react";
import Modal from "./Modal";
import axios from "axios";
import { useRouter } from "next/navigation";
import EditableOrederComponent from "./EditableOrederComponent";
import { toast } from "react-toastify";
import { apiBaseUrl } from "@/app/constants";

const OrderCard = ({ order }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const notify = (message, type) => {
    toast(message, { position: "top-center", type: type });
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleDelete = () => {
    axios
      .delete(`${apiBaseUrl}/orders/${order.orderId}`)
      .then((res) => {
        notify("Deleted ", "success");
        router.refresh();
      })
      .catch((err) => {
        console.error(err);
        notify(`Error : ${err.message}`);
      });
  };
  return (
    <div className=" bg-white rounded-md shadow-md p-6">
      <h2 className=" text-md font-medium mb-3">Order ID : {order.orderId}</h2>
      <div className=" grid grid-cols-2 p-2">
        <div>Paid : {order.totalAmount}</div>
        <div>Date : {order.createdOn}</div>
      </div>
      {order.items.map((item, index) => (
        <div key={index} className=" rounded-md shadow-lg bg-slate-50 p-6 mb-2">
          <h2>{item.id}</h2>
          <div className=" grid grid-cols-2 ">
            <p>Product ID : {item.productId}</p>
            <p>Quantity : {item.boughtQuantity}</p>
          </div>
        </div>
      ))}
      <div className="flex justify-around mt-6">
        <button
          type="button"
          className=" bg-orange-500 rounded-md p-2"
          onClick={openModal}
        >
          Edit Order
        </button>
        <Modal title="Edit Order" isOpen={isOpen} onClose={closeModal}>
          <EditableOrederComponent onClose={closeModal} order={order} />
        </Modal>
        <button
          type="button"
          className=" bg-red-500 rounded-md p-2"
          onClick={handleDelete}
        >
          Delete Order
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
