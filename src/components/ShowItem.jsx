import React from "react";
import cl from '../classes/ShowItem.module.css';

export const ShowItem=({item,addToOrder,closedFullItem})=>{
    return(
        <div className={cl.showFullItem}>
        <div className={cl.fullItem}>
        <img src={"./img/" + item.img } />
        <div className={cl.closed}
             onClick={()=>{closedFullItem()}}>X</div>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <b>{item.price}$</b>
        <div className={cl.addToCart}
            onClick={()=>{addToOrder(item)}}
        >+</div>
        </div>
        </div>
    )
}