import React from 'react'
import './Programs.css'
import program1 from '../../Assets/program-1.png'
import program2 from '../../Assets/program-2.png'
import program3 from '../../Assets/program-3.png'
import programicon1 from '../../Assets/program-icon-1.png'
import programicon2 from '../../Assets/program-icon-2.png'
import programicon3 from '../../Assets/program-icon-3.png'


const Programs = () => {
  return (
    <>
    <div className='programs'>
        <div className='program'>
                <img src={program1} alt=''/>
                <div className='caption'>
                <img src={programicon1} alt=''/>
                <p>Graduation Degree</p>
                </div>
        </div>
        <div className='program'>
                <img src={program2}/>
                <div className='caption'>
                <img src={programicon2} alt=''/>
                <p>Masters Degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={program3} alt=''/>
            <div className='caption'>
                <img src={programicon3} alt=''/>
                <p>Post Graduate</p>
            </div>
            </div>
    </div>
    </>

  )
}


export default Programs