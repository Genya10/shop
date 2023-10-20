import React from "react";
import cl from '../classes/Order.module.css';
import {FaTrash} from 'react-icons/fa';

export const Order =(props)=>{
    return(
        <div className={cl.item}>
            <div>
        <img src={"./img/"+ props.item.img  }/>
        </div>
        <div>
            <h3>{props.item.title}</h3>
            <p>{props.item.desc}</p>
            <b>{props.item.price}$</b>
        </div>
        <FaTrash className={cl.deleteIcon}
                 onClick={()=>{props.deleteOrder(props.item.id)}}/>
        </div>
    )
}