import React from "react";
import { useState,useContext,createContext } from "react";

const OrdersContext = createContext();

export const OrdersProvider=({children})=>{
  
const [orders,setOrders] = useState([]);
    return(
      <OrdersContext.Provider value={[orders,setOrders]}>
 {children}
      </OrdersContext.Provider>
    )
}

export const useOrders=()=>{
    return useContext(OrdersContext);
}