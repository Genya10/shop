import React, { useContext } from "react";
import { useState } from "react";
import { Item } from "./Item";
import cl from '../classes/Items.module.css';
import { useEffect } from "react";
//import { useOrders } from "./OrdersProvider";

export const Items=({items,orders,setOrders,currentItems,setCurrentItems})=>{
  //const [orders, setOrders,items,setItems] = useOrders();

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
      {currentItems.map((item) => {
        return <Item key={item.id} 
                 item={item} 
                 addToOrder={addToOrder} />;
      })}
    </main>
  );
}

