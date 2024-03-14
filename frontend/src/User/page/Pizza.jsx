


import React, { useRef, useState, useEffect } from 'react';
import SimpleSlider from '../component/Slider/SliderComponent';
import Title from '../component/Title/Title';
import Menus from '../component/Menus/Menus';
import Itemproduct from '../component/Itemproduct/Itemproduct';
import Footer from '../component/Footer/Footer';
import style from '../component/Itemproduct/Itemproduct.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axiosInstancenotoken from '../service/axiosInstance'
import Loading from '../component/Loading/Loading'
import pizzaBanner1 from '../assets/imgs/pizza-banner-1.png';
import pizzaBanner2 from '../assets/imgs/pizza-banner-2.png';
import pizzaBanner3 from '../assets/imgs/pizza-banner-3.png';
import pizzaBanner4 from '../assets/imgs/pizza-banner-4.jpg';

const images = [pizzaBanner1, pizzaBanner2, pizzaBanner3, pizzaBanner4];
// const images = [
//     "https://thepizzacompany.vn/images/thumbs/000/0003966_BANNER%20SLIDER%201200X480-100.jpeg",
//     "https://thepizzacompany.vn/images/thumbs/000/0003966_BANNER%20SLIDER%201200X480-100.jpeg",
//     "https://thepizzacompany.vn/images/thumbs/000/0003966_BANNER%20SLIDER%201200X480-100.jpeg"]


function Pizza({ addToCart, setdetail, setitem }) {
    const sectionRefs = useRef([
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ]);
    const [loadingAPI, setLoadingAPI] = useState(true)
    const [activeIndex, setActiveIndex] = useState(0);
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        async function fetchMenu() {
            try {
                const response = await axiosInstancenotoken.get('/api/category/');
                const newMenu = [];
                for (const item of response.data) {
                    const products = await fetchProducts(item.catName);
                    newMenu.push({ ...item, products });
                }
                console.log(newMenu);
                setMenu(newMenu);
            } catch (error) {
                console.error('Đã xảy ra lỗi khi lấy danh sách danh mục:', error);
            }
        }
        fetchMenu();
    }, []);
    async function fetchProducts(catName) {
        try {
            const response = await axiosInstancenotoken.get(`/api/product/cat/?catName=${catName}`);
            setLoadingAPI(false)
            return response.data.data;
        } catch (error) {
            console.error('Đã xảy ra lỗi khi lấy danh sách sản phẩm:', error);
            return [];
        }
    }

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
        const offsetTop = targetElement.getBoundingClientRect().top - parentElement.getBoundingClientRect().top + 450;
        window.scrollTo(100, offsetTop);
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
    function formatCurrency(price) {
        return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }

    return (
        <div>
            <div style={{ width: "100%" }}>
                <SimpleSlider arrImages={images} />

            </div>
            <div ref={sectionRefs.current[0]} >
                {loadingAPI ? (<><Loading /></>) : (<div className="container">
                    {/* >>>>>>> 6dcf86328c2119a0d6c750ab9c0054d68b8fa060 */}
                    <div>
                        <Title title={"Menus"} />
                    </div>
                    {isImageFixed ? (
                        <div style={{
                            position: 'fixed',
                            top: 170,
                            width: '100%',
                            backgroundColor: '#ffffff',
                            zIndex: 99,
                            alignItems: 'center'
                        }} className='container'>
                            <Menus scrollToRef={scrollToRef} activeIndex={activeIndex} menu={menu} />
                        </div>
                    ) : (<div style={{ zIndex: 99, }}>
                        <Menus scrollToRef={scrollToRef} activeIndex={activeIndex} menu={menu} />
                    </div>)}
                    {menu?.map((item, index) => (
                        <div ref={sectionRefs.current[index]} >
                            <div>
                                <Title title={item.catName} />
                            </div>
                            <div style={{ display: 'flex' }} className="view-temproduct">
                                {item?.products?.data.map((product, productIndex) => (
                                    <Itemproduct key={productIndex} setdetail={setdetail} addToCart={addToCart} setitem={setitem} product={product} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>)}

            </div>
        </div>
    );
}
export default Pizza;