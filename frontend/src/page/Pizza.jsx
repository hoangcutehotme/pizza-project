import React, { useRef, useState, useEffect } from 'react';
import SimpleSlider from '../component/Slider/SliderComponent';
import Title from '../component/Title/Title';
import Menus from '../component/Menus/Menus';
import Itemproduct from '../component/Itemproduct/Itemproduct';
import Footer from '../component/Footer/Footer';
import style from '../component/Itemproduct/Itemproduct.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = ["https://thepizzacompany.vn/images/thumbs/000/0003966_BANNER%20SLIDER%201200X480-100.jpeg",
    "https://thepizzacompany.vn/images/thumbs/000/0003966_BANNER%20SLIDER%201200X480-100.jpeg",
    "https://thepizzacompany.vn/images/thumbs/000/0003966_BANNER%20SLIDER%201200X480-100.jpeg",
    "https://thepizzacompany.vn/images/thumbs/000/0003966_BANNER%20SLIDER%201200X480-100.jpeg"]


function Pizza({ setdetail }) {
    const sectionRefs = useRef([
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ]);
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            sectionRefs.current.forEach((ref, index) => {
                const element = ref.current;
                if (element) {
                    const top = element.offsetTop;
                    const height = element.clientHeight;
                    if (scrollPosition >= top - 600 && scrollPosition < top - 600 + height) {
                        setActiveIndex(index);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const scrollToRef = (index) => {
        const targetElement = sectionRefs.current[index].current;
        const parentElement = targetElement.parentElement;
        const offsetTop = targetElement.getBoundingClientRect().top - parentElement.getBoundingClientRect().top - 30;
        window.scrollTo(100, offsetTop);
        setActiveIndex(parseInt(1));
    };

    const [isImageFixed, setIsImageFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsImageFixed(scrollPosition > 500);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div style={{ width: "100%" }}>
                <SimpleSlider arrImages={images} />
            </div>

            </div>)}
            <div ref={sectionRefs.current[0]} >
                <div>
                    <Title title={"Công Thức Đặc Biệt"} />
                </div>
                <div style={{ display: 'flex' }} class="view-temproduct">
                    <Itemproduct setdetail={setdetail} />
                    <Itemproduct />
                    <Itemproduct />
                    <Itemproduct />
                </div>
            </div>
            <div ref={sectionRefs.current[1]} >
                <div>
                    <Title title={"Hải Sản Cao Cấp"} />
                </div>
                <div style={{ display: 'flex' }} class="view-temproduct">
                    <Itemproduct />
                    <Itemproduct />
                </div>
            </div>
            <div ref={sectionRefs.current[2]} >
                <div>
                    <Title title={"Pizza"} />
                </div>
                {isImageFixed ? (
                    <div style={{
                        position: 'fixed',
                        top: 170,
                        width: '100%',
                        backgroundColor: '#ffffff',
                        zIndex: 999,
                        alignItems: 'center'
                    }} className='container'>
                        <Menus scrollToRef={scrollToRef} activeIndex={activeIndex} />
                    </div>
                ) : (<div >
                    <Menus scrollToRef={scrollToRef} activeIndex={activeIndex} />

                </div>)}
                <div ref={sectionRefs.current[0]} >
                    <div>
                        <Title title={"Công Thức Đặc Biệt"} />
                    </div>
                    <div style={{ display: 'flex' }} class="view-temproduct">
                        <Itemproduct />
                        <Itemproduct />
                        <Itemproduct />
                        <Itemproduct />
                    </div>
                </div>
                <div ref={sectionRefs.current[1]} >
                    <div>
                        <Title title={"Hải Sản Cao Cấp"} />
                    </div>
                    <div style={{ display: 'flex' }} class="view-temproduct">
                        <Itemproduct />
                        <Itemproduct />
                    </div>
                </div>
                <div ref={sectionRefs.current[2]} >
                    <div>
                        <Title title={"Pizza"} />
                    </div>
                    {isImageFixed ? (
                        <div style={{
                            position: 'fixed',
                            top: 170,
                            width: '100%',
                            backgroundColor: '#ffffff',
                            zIndex: 999,
                            alignItems: 'center'
                        }} className='container'>
                            <Menus scrollToRef={scrollToRef} />
                        </div>
                    ) : (<div >
                        <Menus scrollToRef={scrollToRef} />
                    </div>)}
                    <div ref={sectionRefs.current[0]} >
                        <div>
                            <Title title={"Công Thức Đặc Biệt"} />
                        </div>
                        <div style={{ display: 'flex' }} class="view-temproduct">
                            <Itemproduct />
                            <Itemproduct />
                            <Itemproduct />
                            <Itemproduct />
                        </div>
                    </div>
                    <div ref={sectionRefs.current[1]} >
                        <div>
                            <Title title={"Hải Sản Cao Cấp"} />
                        </div>
                        <div style={{ display: 'flex' }} class="view-temproduct">
                            <Itemproduct />
                            <Itemproduct />
                        </div>
                    </div>
                    <div ref={sectionRefs.current[2]} >
                        <div>
                            <Title title={"Thập Cẩm Cao Cấp"} />
                        </div>
                        <div style={{ display: 'flex' }} class="view-temproduct" >
                            <Itemproduct />
                            <Itemproduct />
                        </div>
                    </div>
                    <div ref={sectionRefs.current[3]} >
                        <div>
                            <Title title={"Truyền Thống"} />
                        </div>
                        <div style={{ display: 'flex' }} class="view-temproduct">
                            <Itemproduct />
                            <Itemproduct />
                        </div>
                    </div>
                    <div ref={sectionRefs.current[4]} >
                        <div>
                            <Title title={"Pizza Chay"} />
                        </div>
                        <div style={{ display: 'flex' }} class="view-temproduct">
                            <Itemproduct />
                            <Itemproduct />
                        </div>
                    </div>

                </div>
            </div>


        </>

    );
}

export default Pizza;
