import React from "react";
import Slider from "react-slick";
import "./Slider.css"

export default function SimpleSlider() {
    var settings = {
        appendDots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        accessibility: true
    };
    return (

        <div className="slider-container" style={{ marginTop: '10px' }}>
            <WrapperSliderStyle {...settings} >
                {arrImages.map((image) => {
                    return (

                        <img key={image} src={image} alt="slider" preview={false} width='80%' height='auto' style={{ padding: '0 60px' }} />
                    )
                })}
            </WrapperSliderStyle>
        </div>

    )
}

export default SimpleSlider

