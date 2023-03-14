import React from 'react';
import './create-account.css';
import LoginImage from '../../assets/signin.png'

const CreateAccount = () => {
  return (
    <div>
     <div className='create_account'>
        <div className='container'>
            <div>
                <center>
                    <hr/>
                    <h2 className='text-head'>How the app works</h2>
                </center>
            </div>
            
            <div className='row row-items'>
                <div className='col- col-sm-12 col-md-12 col-lg-6 col-xl-6 item1'>
                  <div className='image-wrapper'>
                    <img src={LoginImage} alt='login' />
                  </div>
                </div>
                <div className='col- col-sm-12 col-md-12 col-lg-6 col-xl-6 item2'>
                    <div className='create_account-text'>
                        <h3>Create an account</h3>
                        <h2>Create/login to an existing <br/> account to get started</h2>
                        <h4>An account is created with your email <br/> and a desired password</h4>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CreateAccount
