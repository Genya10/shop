import React, { useState } from "react";
import cl from '../classes/Categories.module.css';

export const Categories=()=>{

    const [categories,setCategories]=useState([
        {
            key:'all',
            name:'All'
        },
        {
            key:'chairs',
            name:'Chairs'
        },
        {
            key:'tables',
            name:'Tables'
        },
        {
            key:'dishes',
            name:'Dishes'
        },
    ])
    return(
        <div className={cl.categories}>
          {categories.map((el)=>
    <div key={el.key}>{el.name}</div>
)}
        </div>
    )
}
