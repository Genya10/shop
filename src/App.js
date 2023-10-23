import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useState } from 'react';
import { Items } from './components/Items';
//import { OrdersProvider } from './components/OrdersProvider';
import { Categories } from './components/Categories';

const App =() =>{
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

      return (
    <div className="wrapper">
     {/*} <OrdersProvider>*/}
  <Header orders={orders} setOrders={setOrders}/>
  <Categories/>
  <Items items={items}  
         orders={orders} setOrders={setOrders}/>
  <Footer/>
 {/*} </OrdersProvider>*/}
    </div>
  );
}


export default App;
