import React from 'react'
import SimpleSlider from '../../component/Slider/slider'
import slider1 from '../../assets/imgs/slider1.jpeg';
import slider2 from '../../assets/imgs/slider2.jpeg';
import slider3 from '../../assets/imgs/slider3.jpeg';
import IntroduceStore1 from '../../component/IntroduceStore/introduceStore1'
import ListProduct from '../../component/Product/ListProduct';
import IntroduceStore2 from './IntroduceStore2';
import SliderComment from '../../component/Slider/SliderComment';

const images = ["https://thepizzacompany.vn/images/thumbs/000/0003966_BANNER%20SLIDER%201200X480-100.jpeg",
  "https://thepizzacompany.vn/images/thumbs/000/0003966_BANNER%20SLIDER%201200X480-100.jpeg",
  "https://thepizzacompany.vn/images/thumbs/000/0003966_BANNER%20SLIDER%201200X480-100.jpeg",
  "https://thepizzacompany.vn/images/thumbs/000/0003966_BANNER%20SLIDER%201200X480-100.jpeg"]

const LandingPage = () => {
  return (
    <>
      <SimpleSlider arrImages={images} />
      <div className='container'>

        <IntroduceStore1 />
        <ListProduct />
        <IntroduceStore2 />
        <SliderComment />
      </div>

    </>

  )
}

export default LandingPage
