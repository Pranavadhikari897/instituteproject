import React, { useState } from 'react'
import './Contact.css'
import msgicon from '../../Assets/msg-icon.png'
import mailicon from '../../Assets/mail-icon.png'
import phoneicon from '../../Assets/phone-icon.png'
import locationicon from '../../Assets/location-icon.png'
import whitearrow from '../../Assets/white-arrow.png'

const Contact = () => {
    let [result,setResult]=useState("")
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "8d2ccb0f-12fd-45df-b383-2884a066cb99");
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          setResult(res.message);
          event.target.reset()
        } else {
          console.log("Error", res);
          setResult(res.message);
        }
      };

  return (
    <div>
    <div className='contact'>
        <div className='contactcol'>
            <h3>Send us a message <img src={msgicon}/></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback ,questions,and suggestions are important to us as we retrive to provide exceptional services in our university community</p>
            <ul>
                <li><img src={mailicon}/>Contact@edutech.dev</li>
                <li><img src={phoneicon}/>+1 123 546 985</li>
                <li><img src={locationicon}/>77 Ave,Cambridge<br/>MA 02139,united States</li>
            </ul>
        </div>
        <div className='contactcol'>
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name="name" placeholder='Enter Your Name' required/>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter Your Mobile Number' required/>
                <label>Write Your Message Here</label>
                <textarea name="message"  rows="6" placeholder='Enter Your Message' required ></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now<img src={whitearrow}/></button>
            </form>
            <span></span>
            <span>{result}</span>
        </div>
        </div>
        </div>
    
  )
}

export default Contact