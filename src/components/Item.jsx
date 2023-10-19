import React from "react";
import cl from '../classes/Item.module.css'

export const Item =(props)=>{
    return(<div className={cl.item}>
        <h3>{props.item.title}</h3>
        <img src={"./img/"+props.item.img  }/>
        <p>{props.item.desc}</p>
        <b>{props.item.price}$</b>
        <div className={cl.addToCart}>+</div>
        </div>
    )
}