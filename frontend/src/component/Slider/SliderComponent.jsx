import React from "react";
import Slider from "react-slick";
import "./Slider.css"
import { WrapperSliderStyle } from './style'

const SimpleSlider = ({ arrImages }) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        className: "center",
        centerMode: true,
        centerPadding: '130px',
    };
    return (

        <div className="slider-container" style={{ marginTop: '10px' }}>
            <WrapperSliderStyle {...settings} >
                {arrImages.map((image) => {
                    return (
                        <img key={image} src={image} alt={image} width='80%' height='auto' style={{ padding: '0 60px' }} />
                    )
                })}
            </WrapperSliderStyle>
        </div>

    )
}

export default SimpleSlider

