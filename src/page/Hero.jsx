import React from 'react'
import heroBanner from '../assets/background banner image.png'

function Hero() {
  return (
    <div>
      <div className='h-screen ' style={{backgroundImage:`URL(${heroBanner})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>

      </div>
    </div>
  )
}

export default Hero
