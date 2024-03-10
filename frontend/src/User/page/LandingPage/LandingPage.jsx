import React from 'react'
import SimpleSlider from '../../component/Slider/SliderComponent'
import IntroduceStore1 from '../../component/IntroduceStore/introduceStore1'
import ListProduct from '../../component/ListProduct/ListProduct';
import IntroduceStore2 from './IntroduceStore2';
import SliderComment from '../../component/Slider/SliderComment';
import ButtonUpWindow from '../../component/ButtonUpWindow/ButtonUpWindow';

const images = ["https://thepizzacompany.vn/images/thumbs/000/0003966_BANNER%20SLIDER%201200X480-100.jpeg",
  "https://thepizzacompany.vn/images/thumbs/000/0003966_BANNER%20SLIDER%201200X480-100.jpeg",
  "https://thepizzacompany.vn/images/thumbs/000/0003966_BANNER%20SLIDER%201200X480-100.jpeg",
  "https://thepizzacompany.vn/images/thumbs/000/0003966_BANNER%20SLIDER%201200X480-100.jpeg"]

const LandingPage = ({ setdetail, addToCart, setitem }) => {
  return (
    <>
      <SimpleSlider arrImages={images} />
      <IntroduceStore1 />
      <ListProduct setdetail={setdetail} addToCart={addToCart} setitem={setitem} />
      <IntroduceStore2 />
      <SliderComment />
      <ButtonUpWindow />

    </>

  )
}

export default LandingPage