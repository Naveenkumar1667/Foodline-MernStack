import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer=()=> {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
<img src={assets.logo2} alt=""/>
<p>Crave,Click,Eat</p>
<div className="footer-social-icons">
    <img src={assets.facebook_icon} alt=""/>
    <img src={assets.twitter_icon} alt=""/>
    <img src={assets.linkedin_icon} alt=""/>
</div>
        </div>
        <div className="footer-content-center">
         <h2>Company</h2>
         <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
         </ul>
        </div>
        <div className="footer-content-right">
<h2> GET IN TOUCH</h2>
<ul>
    <li>+91 9019823263</li>
    <li>contact@foodline.com</li>
</ul>
        </div>
      </div>
    <hr/>
    <p className='footer-cpyright'>Copyright @2025 Foodline.com - All Right Reserved</p>
    </div>
   
  )
}

export default Footer
