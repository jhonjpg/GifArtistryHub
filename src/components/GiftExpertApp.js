import React, { useState } from 'react'
import { CategoryAdd } from './CategoryAdd';
import { GifGird} from './GifGird';




export const GiftExpertApp = () => {

   // const categorys = ["dragob ball z", "naruto", "avatar"]

   const [categorys, setCategorys] =  useState(['vegito'] );

   

    
  return (
       
    <>
    <h2>Escribe el nombre del gif que deseas buscar</h2>
    <CategoryAdd setCategorys= {setCategorys}/>


<ol>

 {

   categorys.map((category) => {


    return <GifGird  key={category} category = {category}/>


   })
 }



  
    </ol>


    </>

  )


}
