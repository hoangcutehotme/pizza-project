
import React from 'react'
import { WrapperSliderStyle } from './style';

const SimpleSlider = ({ arrImages }) => {

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
                        <img key={image} src={image} alt="slider" preview={false} width='100%' height='auto' style={{ padding: '0 60px' }} />
                    )
                })}
            </WrapperSliderStyle>
        </div>

    )
}

export default SimpleSlider

// import React from "react";
// import Slider from "react-slick";
// import "./Slider.css"

// export default function SimpleSlider() {
//     var settings = {
//         appendDots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 1000,
//         accessibility: true
//     };
//     return (
//         <Slider {...settings}>
//             <div class="Slider_img">
//                 <img src="https://thepizzacompany.vn/images/thumbs/000/0003966_BANNER%20SLIDER%201200X480-100.jpeg" alt="" />
//             </div>
//             <div class="Slider_img">
//                 <img src="https://thepizzacompany.vn/images/thumbs/000/0003966_BANNER%20SLIDER%201200X480-100.jpeg" alt="" />
//             </div>
//             <div class="Slider_img">
//                 <img src="https://thepizzacompany.vn/images/thumbs/000/0003966_BANNER%20SLIDER%201200X480-100.jpeg" alt="" />
//             </div>
//             <div class="Slider_img">
//                 <img src="https://thepizzacompany.vn/images/thumbs/000/0003966_BANNER%20SLIDER%201200X480-100.jpeg" alt="" />
//             </div>
//         </Slider>
//     );
// }

