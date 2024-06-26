import React, { useRef } from 'react'
import './Testimonials.css'
import backbtn from '../../Assets/back-icon.png'
import nextbtn from '../../Assets/next-icon.png'
import user1 from '../../Assets/user-1.png'
import user2 from '../../Assets/user-2.png'
import user3 from '../../Assets/user-3.png'
import user4 from '../../Assets/user-4.png'

const Testimonials = () => {
    const slider=useRef()
    let tx=0
    let slidefwd=()=>{
        if (tx>-50){
            tx-=25
        }
        slider.current.style.transform=`translateX(${tx}%)`

    }
    let slidebwd=()=>{
        if(tx<0){
            tx+=25
        }
        slider.current.style.transform=`translateX(${tx}%)`
        
    }

    return (
        <div className='testimonials'>
            <img src={nextbtn} className='next-btn' onClick={slidefwd}/>
            <img src={backbtn} className='back-btn' onClick={slidebwd}/>
            <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className='userinfo'>
                            <img src={user1} />
                        <div>
                            <h3>William Jackson 1</h3>
                            <span>Edusity,USA</span>
                        </div>
                        </div>
                        <p>Choosing to persue my degree at Edusity was one of the best decisions 
                            I've ever made.The supportive community,state-of-art facilities and commitment to acidemic 
                            excellence have truly exceeded my expectations</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='userinfo'>
                            <img src={user2} />
                        <div>
                            <h3>William Jackson 2</h3>
                            <span>Edusity,USA</span>
                        </div>
                        </div>
                        <p>Choosing to persue my degree at Edusity was one of the best decisions 
                            I've ever made.The supportive community,state-of-art facilities and commitment to acidemic 
                            excellence have truly exceeded my expectations</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='userinfo'>
                            <img src={user3} />
                        <div>
                            <h3>William Jackson 3</h3>
                            <span>Edusity,USA</span>
                        </div>
                        </div>
                        <p>Choosing to persue my degree at Edusity was one of the best decisions 
                            I've ever made.The supportive community,state-of-art facilities and commitment to acidemic 
                            excellence have truly exceeded my expectations</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='userinfo'>
                            <img src={user4} />
                        <div>
                            <h3>William Jackson 4</h3>
                            <span>Edusity,USA</span>
                        </div>
                        </div>
                        <p>Choosing to persue my degree at Edusity was one of the best decisions 
                            I've ever made.The supportive community,state-of-art facilities and commitment to acidemic 
                            excellence have truly exceeded my expectations</p>
                    </div>
                </li>
            </ul>
            </div>

        </div>
    )
}

export default Testimonials