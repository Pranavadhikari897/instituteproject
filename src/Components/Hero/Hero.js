import React from 'react'
import './Hero.css'
import darkarrow from '../../Assets/darkarrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='herotext'>
            <h1>We ensure better education for better world</h1>
            <p>Our cutting-edge curriculum is desugned to empower students with the knowledge skills and experiences needed to excel dynamic fields of education</p>
            <button className='btn'>Explore More<img src={darkarrow}/></button>
        </div>

    </div>
  )
}

export default Hero