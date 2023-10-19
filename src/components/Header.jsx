import React from "react";
import cl from '../classes/Header.module.css';
import {FaShoppingCart} from 'react-icons/fa'

export const Header=()=>{
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
            <FaShoppingCart className={cl.shopButton}/>
            <div className={cl.presentation}>           
            </div>
        </header>
    )
}