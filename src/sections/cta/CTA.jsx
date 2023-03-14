import React from 'react';
import './cta.css';

const CTA = () => {
  return (
    <div>
      <div className=" cta-bg">
        <div className='cta'>
            <div className='cta-content'>
                <h2>Download the app now.</h2>
                <h4>Available on your favorite store. Start your premium experience now</h4>
            </div>
            <div className='cta-btn'>
                <a className='hero-btn' href='#playstore'><button id='playstore' >Playstore</button></a>
                <a  href='#appstore'><button id='appstore'>App store</button></a>
            </div>

        </div>
      </div>
    </div>
  )
}

export default CTA
