import React from 'react';
import './footer.css';
import Logo from  '../../assets/logo.png';
import Twitter from  '../../assets/twitter.png';
import Facebook from  '../../assets/facebook.png';
import Instagram from  '../../assets/instagram.png';

const Footer = () => {
  return (
    <div>
      <footer className='footer'>
            <div className='container'>
                <div className='footer-items'>
                    <div className='footer-logo'>
                        <img src={Logo} alt='logo'/>
                    </div>
                      <div className='icons'>
                          <img src={Twitter} alt='Twitter  icon' />
                          <img src={Facebook} alt='Facebook  icon' />
                          <img src={Instagram} alt='Instagram  icon' />
                      </div>    
                    <div className='footer-text'>
                         <p>Copywright 2020 Bella Onojie.com</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
export default Footer
