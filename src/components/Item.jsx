import React from "react";
import cl from '../classes/Item.module.css'

export const Item =({item,addToOrder,changeShowItem})=>{
    return(<div className={cl.item}>              
        <img src={"./img/" + item.img }
            onClick={()=>{changeShowItem(item)}} />
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <b>{item.price}$</b>
        <div className={cl.addToCart}
            onClick={()=>{addToOrder(item)}}
        >+</div>
        </div>
    )
}