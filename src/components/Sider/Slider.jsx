import React from 'react'
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import first from "../img/ankit1.jpg"
import second from "../img/profilepic.jpg"
import './slider.css'


const Slider = () => {
  return (
    
   <div class="a-box" id="createdby">
    <h1 style={{color:"white"}}>DESIGN BY </h1>
  <div class="img-container">
    <div class="img-inner">
      <div class="inner-skew">
        <img src={second} />
      </div>
    </div>
  </div>
  <div class="text-container">
    <h2>ANKIT KUMAR</h2>
    <div>
      Web Devloper (Reactjs,javascript...).
  </div>
</div>
<br></br>
        </div>

  )
}

export default Slider