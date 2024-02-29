
import React from 'react'
import Slider from 'react-slick';
// import './slider.css'
import { WrapperSliderStyle } from './style';

const SliderComponent = ({ arrImages }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        className: "center",
        centerMode: true,
        centerPadding: "100px",
    };
    return (
        <div className="slider-container" style={{ marginTop: '10px' }}>
            <WrapperSliderStyle {...settings} >
                {arrImages.map((image) => {
                    return (
                        <img key={image} src={image} alt="slider" preview={false} width='100%' height='400px' style={{ padding: '0 60px' }} />
                    )
                })}
            </WrapperSliderStyle>
        </div>

    )
}

export default SliderComponent