import React from 'react';
import Navbar from './components/Navbar';
import Checkout from './sections/checkout/Checkout';
import CreateAccount from './sections/create-account/CreateAccount';
import CTA from './sections/cta/CTA';
import Explore from './sections/explore/Explore';
import Footer from './sections/footer/Footer';
import Hero from './sections/hero/Hero';


const View = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <CreateAccount/>
      <Explore/>
      <Checkout/>
      <CTA/>
      <Footer/>
    </div>
  )
} 

export default View;
