import React from 'react'
import './Campus.css'
import gallery1 from '../../Assets/gallery-1.png'
import gallery2 from '../../Assets/gallery-2.png'
import gallery3 from '../../Assets/gallery-3.png'
import gallery4 from '../../Assets/gallery-4.png'
import arrow from '../../Assets/white-arrow.png'
const Campus = () => {
  return (
    <div className='campus'>
        <div className='gallery'>
            <img src={gallery1}/>
            <img src={gallery2}/>
            <img src={gallery3}/>
            <img src={gallery4}/>
        </div>
        <button className='btn dark-btn'>See More <img src={arrow}/></button>
    </div>
  )
}

export default Campus