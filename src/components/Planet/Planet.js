import React from 'react'
import '../Planet/Planet.css'

const Planet = () => {
  return (
    <div class="solar-system">
  <div id="sun">JavaScript</div>

  <div class="orbit mercury-orbit"></div>
  <div class="mercury-spin">
    <div id="mercury">Reactjs</div>
  </div>

  <div class="orbit venus-orbit"></div>
  <div class="venus-spin">
    <div id="venus">HTML</div>
  </div>

  <div class="orbit earth-orbit"></div>
  <div class="earth-spin">
    <div class="orbit moon-orbit"></div>
    <div class="moon-spin">MUI
      <div id="moon">CSS</div>
    </div>

    {/* <img id="earth" src="https://raw.githubusercontent.com/everdimension-personal/codepen-assets/master/earth_small_150.jpg" /> */}
    {/* <h3>html</h3> */}
  </div>

  <div class="orbit mars-orbit"></div>
  <div class="mars-spin">
    <div id="mars">SQL</div>
  </div>
</div>
  )
}

export default Planet