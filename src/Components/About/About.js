import React from 'react'
import './About.css'
import about from '../../Assets/about.png'
import playicon from '../../Assets/play-icon.png'

const About = () => {
    return (
        <div className='about'>
            <div className='aboutleft'>
                <img src={about} className='aboutimage' />
                <img src={playicon} className='playicon' />
            </div>
            <div className='aboutright'>
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tommorow's Leader Today</h2>
            <p>
                Discover a world of academic excellence at our university,
                providing mentorship and guidance to help students navigate their academic journeys.
            </p>
            <p>
                At the undergraduate level, students engage in a dynamic learning environment that combines theoretical knowledge with hands-on experiences. Our master's degree programs offer advanced coursework, 
                research opportunities, and the chance to collaborate with leading professionals in the field.our postgraduate programs provide
                 a platform for groundbreaking research and innovation.
            </p>
            <p> 
                We prioritize creating an inclusive and supportive atmosphere where students can thrive academically and personally. Whether you aspire to embark on a fulfilling career, contribute to groundbreaking research, or further your education, our university is the ideal place to turn your aspirations into achievements. Join us on a journey of academic excellence and personal growth.
            </p>
            </div>
        </div>
    )
}

export default About