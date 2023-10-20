import React from "react";
import cl from '../classes/Item.module.css'

export const Item =(props)=>{
    return(<div className={cl.item}>       
        <img src={"./img/" + props.item.img  }/>
        <h3>{props.item.title}</h3>
        <p>{props.item.desc}</p>
        <b>{props.item.price}$</b>
        <div className={cl.addToCart}
        onClick={()=>{props.addToOrder(props.item)}}
        >+</div>
        </div>
    )
}