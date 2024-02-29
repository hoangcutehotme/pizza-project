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
        <Slider {...settings}>
            <div class="Slider_img">
                <img src="https://thepizzacompany.vn/images/thumbs/000/0003966_BANNER%20SLIDER%201200X480-100.jpeg" alt="" />
            </div>
            <div class="Slider_img">
                <img src="https://thepizzacompany.vn/images/thumbs/000/0003966_BANNER%20SLIDER%201200X480-100.jpeg" alt="" />
            </div>
            <div class="Slider_img">
                <img src="https://thepizzacompany.vn/images/thumbs/000/0003966_BANNER%20SLIDER%201200X480-100.jpeg" alt="" />
            </div>
            <div class="Slider_img">
                <img src="https://thepizzacompany.vn/images/thumbs/000/0003966_BANNER%20SLIDER%201200X480-100.jpeg" alt="" />
            </div>
        </Slider>
    );
}