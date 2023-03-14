import React from 'react';
import './explore.css';
import Image from '../../assets/explore-image.png';

const Explore = () => {
  return (
    <div>
      <div className='explore_varieties'>
        <div className='container'>
            <div className='row'>
                <div className='col- col-sm-12 col-md-12 col-lg-6 col-xl-6' >
                    <div className='explore_varieties-text'>
                        <h3>Explore varieties</h3>
                        <h2>CShop for your favorites <br/> meal as e dey hot.</h2>
                        <h4>Shop for your favorite meals or drinks <br/> and enjoy while doing it.</h4>
                    </div>
                </div>
                <div className='col- col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                  <div className='explore_varieties-image'>
                    <img src={Image} alt='Explore varieties' />
                  </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Explore;
