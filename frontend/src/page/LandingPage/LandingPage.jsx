import React from 'react'
import SliderComponent from '../../component/Slider/slider'
import slider1 from '../../assets/imgs/slider1.jpeg';
import slider2 from '../../assets/imgs/slider2.jpeg';
import slider3 from '../../assets/imgs/slider3.jpeg';

const LandingPage = () => {
  return (
    <>
      <div className=''>
        <SliderComponent arrImages={[slider1, slider2, slider3]} />
      </div>


    </>
  )
}

export default LandingPage
