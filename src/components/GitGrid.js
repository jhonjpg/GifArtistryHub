import React from 'react'

export const GitGrid = ({ title, url}) => {



  return (
    <div className="card">


<div className="imgContainer">

      <img src={url} alt={title}/>
      </div>

      <p> {title}</p>



    </div>
  )
}
