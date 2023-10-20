import React from "react";
import cl from '../classes/Order.module.css'

export const Order =(props)=>{
    return(
        <div className={cl.item}>
            <div>
        <img src={"./img/"+props.item.img  }/>
        </div>
        <div>
            <h3>{props.item.title}</h3>
        <p>{props.item.desc}</p>
        </div>
        </div>
    )
}