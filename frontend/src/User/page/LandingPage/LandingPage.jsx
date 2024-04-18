import React from 'react'
import SimpleSlider from '../../component/Slider/SliderComponent'
import IntroduceStore1 from '../../component/IntroduceStore/introduceStore1'
import ListProduct from '../../component/ListProduct/ListProduct';
import IntroduceStore2 from './IntroduceStore2';
import SliderComment from '../../component/Slider/SliderComment';
import ButtonUpWindow from '../../component/ButtonUpWindow/ButtonUpWindow';
import pizzaBanner1 from '../../assets/imgs/pizza-banner-1.png';
import pizzaBanner2 from '../../assets/imgs/pizza-banner-2.png';
import pizzaBanner3 from '../../assets/imgs/pizza-banner-3.png';
import pizzaBanner4 from '../../assets/imgs/pizza-banner-4.jpg';

const images = [pizzaBanner1, pizzaBanner2, pizzaBanner3, pizzaBanner4];
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
