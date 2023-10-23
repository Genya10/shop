import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useState} from 'react';
import { Items } from './components/Items';
//import { OrdersProvider } from './components/OrdersProvider';
import { Categories } from './components/Categories';
import { useEffect } from 'react';
import { ShowItem } from './components/ShowItem';

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
]);
const [currentItems,setCurrentItems]=useState([]);
let [showItem,setShowItem] = useState(false);
let [fullItem,setFullItem] = useState({});

useEffect(()=>{
setCurrentItems(items);
},[])

const chooseCategory=(category)=>{
  if(category === 'all'){
    setCurrentItems(items)
    return;
  }
  setCurrentItems(items.filter(el => el.category === category))
}
const changeShowItem=(item)=>{
  setFullItem(item);
  setShowItem(showItem = !showItem);
}
const addToOrder = (item) => {
  let isInArray = false;
  orders.forEach((el) => {
    if (el.id === item.id) {
      isInArray = true;
    }
  });
  if (!isInArray) setOrders([...orders, item]);
};
const closedFullItem=()=>{
  setShowItem(false);
}

      return (
    <div className="wrapper">
     {/*} <OrdersProvider>*/}
  <Header orders={orders} setOrders={setOrders}/>
  <Categories chooseCategory={chooseCategory}/>
  <Items items={items} currentItems={currentItems} addToOrder={addToOrder}        
         orders={orders} setOrders={setOrders} changeShowItem={changeShowItem}/>
       {showItem && <ShowItem item={fullItem} 
             addToOrder={addToOrder} closedFullItem={closedFullItem}/>} 
  <Footer/>
 {/*} </OrdersProvider>*/}
    </div>
  );
}


export default App;
