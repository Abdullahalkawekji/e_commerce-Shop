import React from 'react'
import  './offers.css'
import exclucive_image from '../Assets/exclusive_image.png'
const offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
          <h1>Exklusive</h1>
          <h1>Offers For you </h1>
          <p>Only on Best Sellers Products</p>
          <button>Check Now</button>
    </div> 
    <div className="offers-right">
      <img src={exclucive_image} alt="" />

    </div>
    </div>
  )
}

export default offers