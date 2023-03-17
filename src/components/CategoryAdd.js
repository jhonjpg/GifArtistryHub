 import React, { useState } from 'react'
 import PropTypes from 'prop-types'
 




 
 export const CategoryAdd = ({setCategorys}) => {


    

const [inputValueuseState, setinputValueuseState]= useState ("")

const handleInputChane = (e) => {

    setinputValueuseState(e.target.value)
}

const handlesubmit = (e) => {

    e.preventDefault();

    if(inputValueuseState.trim().length > 2){


        setCategorys( cats => [ inputValueuseState, ...cats]);
        

        setinputValueuseState("")

    }




}

   return (

    <>


    
    <form onSubmit={handlesubmit}>
     <input placeholder="Username"
     type="text"
            value={inputValueuseState}
            onChange={handleInputChane}
            className="input"
            name="text"
            placeholder="Name of gif" 
     />

     </form>


     </>

   )
   }

   CategoryAdd.propTypes = {

    setCategorys: PropTypes.func.isRequired

   }
 
 