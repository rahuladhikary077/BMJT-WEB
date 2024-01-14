import React from 'react'
import "./WhatWeOffer.css"
import images from "../../assets/"

const WhatWeOffer = () => {
  return (
  <div className='whatweoffer'>
    <div className="wwo1">
      <h1 className='main-head'>What We Offer</h1>
      <img className='hlt06' src={images.highlight06} alt="" />
    </div>
      <div className="wwo">
    <div className="ellipse2">

    <img className='ellipse22' src={images.ellipse2} alt="" />

    <div className="gallary">
      <div className="box1 box11">
        <img src={images.signal111} alt="" />
        <div className="text11">
          <p>Unblemished</p>
          <h2>Farm Connections</h2>
        </div>
      </div>
      <div className="box1 box12">
        <img src={images.signal111} alt="" />
        <div className="text11">
          <p>Farm to table</p>
          <h2>Transparency</h2>
        </div>
      </div>
      <div className="box1 box13">
        <img src={images.signal111} alt="" />
        <div className="text11">
        <p>Innovation in</p>
        <h2>Sustainability</h2>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default WhatWeOffer