import React, { useState } from 'react'
import "../ImageSliding/image.css"
import app from "../images/App.jpg"
import react from "../images/react.jpg"
import reacts from "../images/reacts.jpg"
import reacNative from "../images/reactNative.png"

const Imageslider = () => {
  return (
    <div className='image-Slider_container'>
      <div className="text-container">
        <h1>Join a community <br /> of millions</h1>
        <p>You’re not alone. Two million developers from all over the world visit the React <br /> docs every month. React is something that people and teams can agree on.

</p>
      </div>
        <div className='img-box'><img src={app}/></div>
        <div className='img-box'><img src={reacts}/></div>
        <div  className='img-box'><img src={react}/></div>
        <div  className='img-box'><img src={reacNative}/></div>
    </div>
  )
}

export default Imageslider
