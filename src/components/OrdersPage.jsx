"use client";
import React, { useEffect, useState } from "react";
import OrderCard from "./OrderCard";
import axios from "axios";
import { apiBaseUrl } from "@/app/constants";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    axios
      .get(`${apiBaseUrl}/orders/all`)
      .then((res) => {
        console.log(res.data);
        setOrders(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className=" w-full flex justify-center min-h-80">
      <div className=" w-2/4 py-8">
        <h2 className=" text-2xl font-medium text-center p-3">Orders</h2>
        {orders.map((order, index) => (
          <OrderCard key={index} order={order}/>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;
