import React from 'react';
import './hero.css';
import PhoneImg from '../../assets/hero.png'

const Hero = () => {
    return (
        <div>
          <div className=" hero">
            <div className='hero-content'>
                <h3>Food App</h3>
                <h1>Why stay hungry when <br/> you can order form Bella Onojie</h1>
                <h4>Download the bella onoje’s food app now on</h4>
                
                <div className='cta-btn'>
                  <a className='hero-btn' href='#playstore'><button id='playstore' >Playstore</button></a>
                  <a  href='#appstore'><button id='appstore'>App store</button></a>
                </div>
            </div>
            
            <div className='hero-image'>
                <img src={PhoneImg} alt='Delicious for you'/>
            </div>
          </div>
    
          <div className='clear'>  </div>
        </div>
    )
}
export default Hero;
