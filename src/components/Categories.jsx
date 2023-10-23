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
        {
            key:'sofa',
            name:'Sofa'
        }
    ])
    const chooseCategory=(category)=>{
        console.log(category)
    }

    return(
        <div className={cl.categories}>
          {categories.map((el)=>
         <div key={el.key} 
            onClick={()=>{chooseCategory(el.key)}}>
            {el.name}</div>
)}
        </div>
    )
}
