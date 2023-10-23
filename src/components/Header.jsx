import React, { useEffect } from "react";
import cl from '../classes/Header.module.css';
import {FaShoppingCart} from 'react-icons/fa';
import { useState } from "react";
import { useOrders } from "./OrdersProvider";
import { Order } from "./Order";

export const Header=({orders,setOrders})=>{
   
    let [cartOpen,setCartOpen]=useState(false);
    //const [orders,setOrders]=useOrders();
    const [total,setTotal]=useState(0);

      useEffect(()=>{
        let newTotal = 0;
        orders.forEach((el)=>{
            newTotal += Number(el.price);
        });
        setTotal(newTotal);
      },[orders])

   /* const showOrders=()=>{
        orders.map((el)=>{
         return <Order key={el.id} item={el}/>
        })
    }*/
    const showNothing=()=>{
       return <h3 className={cl.showNothing}>Bassket is empty</h3>
    }
    const deleteOrder=(id)=>{
        setOrders(orders.filter(el => el.id !== id));
    }

    return (
      <header>
        <div>
          <span className={cl.logo}>House Staff</span>
        </div>
        <ul className={cl.nav}>
          <li>About us</li>
          <li>Contacts</li>
          <li>Cabinet</li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={` ${cl.shopButton} ${cartOpen && cl.active} `}
        />
        {cartOpen && (
          <div className={cl.shopCart}>
            {orders.length > 0
              ?(
                <div>
               {orders.map((el) => <Order key={el.id} item={el} deleteOrder={deleteOrder}/>) } 
                  <div className={cl.total}>Total:{total}$</div>
                  </div> )
              : showNothing()}
          </div>
        )}
        <div className={cl.presentation}></div>
      </header>
    );
}
