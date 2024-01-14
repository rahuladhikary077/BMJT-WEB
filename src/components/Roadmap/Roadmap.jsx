import React from 'react'
import "./Roadmap.css"
import images from "../../assets/"
const Roadmap = () => {
  return (
    <>
    <div className="roadmap">
      <div className="road-button button-div"></div>
      <button className="road-button">FROM FARM TO FORK</button>

      <div className="road-img">
        <img src={images.roadmap1} alt="" />
      </div>
      <div className="download-brochure">
    <button>
        <img src={images.download01} alt="Download Icon" />
        DOWNLOAD BROCHURE
    </button>
    </div>
    </div>
    </>
  )
}

export default Roadmap