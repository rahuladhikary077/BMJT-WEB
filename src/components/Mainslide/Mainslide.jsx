import React from 'react'
import "./Mainslide.css"
import images from "../../assets/"
const Mainslide = () => (
  <div className='mainslider'>
    <img className='mainslide' src={images.mainslider111} alt="" />
    <div className='maintext'>
      <div className="line1">
        <h1 className="delevering">Delivery</h1>
        <h1 className="quality"><b>Quality</b></h1>
      </div>
      <div className="line2"><h2><center>from farm to fork</center></h2></div>
    </div>
    <div className="takeatour">
      <button className='tour-button'>TAKE A TOUR</button>
    </div>
    <img src={images.group} alt="" className='group' />

    <div className="checkcircle">
      <div className="circle">
        <img src={images.checkmarkcircle04} alt="knk" />
        <p>Sustaining Sourcing</p>
        </div>
      <div className="circle">
      <img src={images.checkmarkcircle04} alt="knk" />
      <p>Eco-Friendly</p>
        </div>
      <div className="circle">
      <img src={images.Elements} alt="knk" />        
      <p>Cruelty-free</p>
      </div>
    </div>

    <img className='vector' src={images.navbar1} alt="" />

    <div className="rectangle">
      <div className="div">
        <img src={images.image304} alt="" />
        <p>Skilled Farmers</p>
      </div>
      <div className="div">
        <img src={images.image28} alt="" />
        <p>Loved by Cusomers</p>
      </div>
      <div className="div">
        <img src={images.image258} alt="" />
        <p>Skilled Farmers</p>
      </div>
    </div>
  </div>
)

export default Mainslide
