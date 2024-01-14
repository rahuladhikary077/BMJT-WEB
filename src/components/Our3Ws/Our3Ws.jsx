import React from 'react'
import "./Our3ws.css"
import images from "../../assets/"
const Our3Ws = () => {
  return (
    <div className='_3ws'>
      <h1 className="our-3ws">Our 3W's</h1>
      <img className='vector' src={images.vector22} alt="" />
      <div className="question">
        <img className='line' src={images.line} alt="" />

      </div>

      <div className="right11">
      <div className="who">
          <h1>Who?</h1>
          <div className="cell"><p>is the backbone of Bhumijat?</p></div>
          <p className='para'>At Bhumijat, our backbone is our <b>hardworking farmers</b>, cultivating the best of nature. We prioritize health by using only natural fertilizers and insecticides.</p>
        </div>

        <div className="what">
          <h1>What?</h1>
          <div className="cell">is the aim of Bhumijat?</div>
          <p className='para'>Bhumijat strives for a sustainable, health-focused framework, championing traditional <b>artisanal</b> produce with the belief that <b>"we are what we eat."</b></p>
        </div>

        <div className="why">
          <h1>Why?</h1>
          <div className="cell">would you choose Bhumijat?</div>
          <p className='para'>Bhumijat is dedicated to <b>farm-to-fork purity</b>, ensuring additive-free produce through our close connections with farmers and commitment to quality.</p>
        </div>
      </div>
      <div className="endq">
        <img className="img306" src={images.image306} alt="" />
      </div>
      <img className='suraj21' src={images.surajChacha21} alt="" />
    </div>
  )
}

export default Our3Ws