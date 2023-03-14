import React from 'react';
import './checkout.css';
import Image from '../../assets/checkout.png';

const Checkout = () => {
  return (
    <div>
      <section className='checkout'>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12 col-md-12 col-lg-6 col1' >
                  <div className='checkout-image'>
                    <img src={Image} alt='Checkout'/>
                  </div>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-6 col2' >
                    <div className='checkout-text'>
                        <h3>Checkout</h3>
                        <h2>When you done check out <br/> and get it delivered.</h2>
                        <h4>When you done check out and get it <br/> delivered with ease.</h4>
                    </div>
                </div>
            </div>
        </div>
      </section> 
    </div>
  )
}

export default Checkout;
