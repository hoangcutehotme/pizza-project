import React, { useState, useEffect } from 'react';
import style from './Menus.css';

function Menus({ scrollToRef, activeIndex }) {
    console.log(activeIndex);
    const [isMobileView, setIsMobileView] = useState(false);


    // Xác định kích thước màn hình
    const handleResize = () => {
        if (window.innerWidth <= 1200) {
            setIsMobileView(true);
        } else {
            setIsMobileView(false);
        }
    };

    // Lắng nghe sự kiện thay đổi kích thước màn hình
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Hàm để cập nhật activeIndex


    // Render danh sách menu hoặc select box tùy thuộc vào kích thước màn hình
    return (
        <div className="Menus">
            {isMobileView ? (
                <select onChange={(e) => scrollToRef(parseInt(e.target.value))} defaultValue={activeIndex}>
                    <option className="opti" value={0}>Công Thức Đặc Biệt</option>
                    <option className="opti" value={1}>Hải Sản Cao Cấp</option>
                    <option className="opti" value={2}>Thập Cẩm Cao Cấp</option>
                    <option className="opti" value={3}>Truyền Thống</option>
                    <option className="opti" value={4}>Pizza Chay</option>
                </select>
            ) : (
                <>
                    <Menu title={"Công Thức Đặc Biệt"} onClick={() => { scrollToRef(0) }} active={activeIndex === 0} />
                    <Menu title={"Hải Sản Cao Cấp"} onClick={() => { scrollToRef(1) }} active={activeIndex === 1} />
                    <Menu title={"Thập Cẩm Cao Cấp"} onClick={() => { scrollToRef(2) }} active={activeIndex === 2} />
                    <Menu title={"Truyền Thống"} onClick={() => { scrollToRef(3) }} active={activeIndex === 3} />
                    <Menu title={"Pizza Chay"} onClick={() => { scrollToRef(4) }} active={activeIndex === 4} />
                </>
            )}
        </div>
    );
}

function Menu({ title, onClick, active }) {
    return (
        <div className={`title_menu ${active ? 'active-menu' : ''}`}>
            <a onClick={onClick}>{title}</a>
        </div>
    );
}

export default Menus;
