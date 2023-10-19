import React from "react";
import cl from '../classes/Header.module.css';

export const Header=()=>{
    return(
        <header>
            <div>
                <span className={cl.logo}>House Staff</span>
            </div>
            <ul className={cl.nav}>
                <li>About us</li>
                <li>About product</li>
                <li>Our price</li>
            </ul>
            <div className={cl.presentation}>
           
            </div>
        </header>
    )
}