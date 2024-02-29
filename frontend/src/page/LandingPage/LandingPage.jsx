import React from 'react'
import SliderComponent from '../../component/Slider/slider'
import slider1 from '../../assets/imgs/slider1.jpeg';
import slider2 from '../../assets/imgs/slider2.jpeg';
import slider3 from '../../assets/imgs/slider3.jpeg';
import IntroduceStore1 from '../../component/IntroduceStore/introduceStore1'
import ListProduct from '../../component/Product/ListProduct';
import IntroduceStore2 from './IntroduceStore2';
import SliderComment from '../../component/Slider/SliderComment';

const LandingPage = () => {
  return (
    <>
      <div >
        <SliderComponent arrImages={[slider1, slider2, slider3]} />
      </div>

      <div>
        <IntroduceStore1 />
      </div>

      <ListProduct />
      <IntroduceStore2 />

      
      <SliderComment />

    </>
  )
}

export default LandingPage
