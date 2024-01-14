import React from 'react'
import "./surajchacha.css"
import images from '../../assets'
import { Link } from 'react-router-dom';


const surajchacha = () => {
  return (
    <>

    <div className="surajchacha">
        <div className="upper1">
            <div className="left115">
                <h1 className='well'>we'll make you</h1>
                <h1 className='spolit'>spoilt for choices</h1>
            </div>
            <div className="right115">
                <img src={images.surajChacha3} alt="" />
            </div>
        </div>
        <div className="mid112">
            <p>Let it be Rice or Spice, we have a unique and a huge variety <br /> <br />for you to choose from.</p>
            
            <div className="main-button">
                <button className="b119">Explore Rices</button>
                <button className="b119">Explore Spices</button>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default surajchacha