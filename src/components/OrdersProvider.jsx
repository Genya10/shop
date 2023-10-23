
/*import React,{useEffect} from "react";
import { useState,useContext,createContext } from "react";

export const OrdersContext = createContext();

export const OrdersProvider=({children})=>{
  
const [orders,setOrders] = useState([]);
const [items,setItems]= useState([
  {
    id: 1,
    title: "char",
    img: "/char.jpg",
    desc: "Lorem insut roma description",
    category:'chairs',
    price: "59",
  },
  {
    id: 2,
    title: "table",
    img: "/table.jpg",
    desc: "Lorem insut roma description",
    category:'tables',
    price: "110",
  },
  {
    id: 3,
    title: "desk",
    img: "desk.jpg",
    desc: "Lorem insut roma description",
    category:'tables',
    price: "99",
  },
  {
    id: 4,
    title: "bed",
    img: "bed.jpg",
    desc: "Lorem insut roma description",
    category:'sofa',
    price: "120",
  },
  {
    id: 5,
    title: "cup",
    img: "cup.jpg",
    desc: "Lorem insut roma description",
    category:'dishes',
    price: "39",
  },
  {
    id: 6,
    title: "plate",
    img: "plate.jpg",
    desc: "Lorem insut roma description",
    category:'dishes',
    price: "29",
  },
])

    return(
      <OrdersContext.Provider value={[orders,setOrders,items,setItems]}>         
 {children}
      </OrdersContext.Provider>
    )
}

export const useOrders=()=>{
    return useContext(OrdersContext);
}*/