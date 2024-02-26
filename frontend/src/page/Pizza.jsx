import React from 'react'
import Slider from '../component/Slider/Slider'
import Title from '../component/Title/Title'
import Menus from '../component/Menus/Menus'
import Itemproduct from '../component/Itemproduct/Itemproduct'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Pizza() {
    return (
        <div class="container">
            <div style={{ width: " 100%" }}>
                <Slider />
            </div>
            <div>
                <Title title={"Pizza"} />
            </div>
            <div>
                <Menus />
            </div>
            <div>
                <Title title={"Công Thức Đặc Biệt"} />
            </div>
            <div style={{
                top: "100px"
            }}>
                <Title title={"Công Thức Đặc Biệt"} />
            </div>
            <div style={{
                display: 'flex',
            }}>
                <Itemproduct />
                <Itemproduct />
                <Itemproduct />
                <Itemproduct />
            </div>
            <div style={{
                top: "100px"
            }}>
                <Title title={"Công Thức Đặc Biệt"} />
            </div>
            <div style={{
                display: 'flex',
            }}>
                <Itemproduct />
                <Itemproduct />
                <Itemproduct />
                <Itemproduct />
            </div>
        </div >
    )
}

export default Pizza
