import React from "react";
import { useState } from "react";
import { Item } from "./Item";
import cl from '../classes/Items.module.css';
import { useEffect } from "react";
import { useOrders } from "./OrdersProvider";

export const Items=(props)=>{
  const [orders, setOrders] = useOrders();
  const [items, setItems] = useState([
    {
      id: 1,
      title: "char",
      img: "/char.jpg",
      desc: "Lorem insut roma description",
      price: "59",
    },
    {
      id: 2,
      title: "table",
      img: "/table.jpg",
      desc: "Lorem insut roma description",
      price: "110",
    },
    {
      id: 3,
      title: "desk",
      img: "desk.jpg",
      desc: "Lorem insut roma description",
      price: "99",
    },
    {
      id: 4,
      title: "bed",
      img: "bed.jpg",
      desc: "Lorem insut roma description",
      price: "120",
    },
    {
      id: 5,
      title: "cup",
      img: "cup.jpg",
      desc: "Lorem insut roma description",
      price: "39",
    },
    {
      id: 6,
      title: "plate",
      img: "plate.jpg",
      desc: "Lorem insut roma description",
      price: "29",
    },
  ]);
  const addToOrder = (item) => {
    let isInArray = false;
    orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) setOrders([...orders, item]);
  };

  return (
    <main>
      {items.map((item) => {
        return <Item key={item.id} 
                 item={item} 
                 addToOrder={addToOrder} />;
      })}
    </main>
  );
}