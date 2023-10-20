import React from "react";
import cl from '../classes/Header.module.css';
import {FaShoppingCart} from 'react-icons/fa';
import { useState } from "react";

export const Header=()=>{
    let [cartOpen,setCartOpen]=useState(false);
    return(
        <header>
            <div>
                <span className={cl.logo}>House Staff</span>
            </div>
            <ul className={cl.nav}>
                <li>About us</li>
                <li>Contacts</li>
                <li>Cabinet</li>
            </ul>
            <FaShoppingCart onClick={()=>setCartOpen(cartOpen=!cartOpen)}
                            className={` ${cl.shopButton} ${cartOpen && cl.active} `}/>
                            {cartOpen && (
                                <div className={cl.shopCart}></div>
                            )}
            <div className={cl.presentation}>           
            </div>
        </header>
    )
}