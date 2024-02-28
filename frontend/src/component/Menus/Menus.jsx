import React, { useState, useEffect } from 'react'
import style from './Menus.css'

function Menus({ scrollToRef }) {
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
    window.addEventListener('resize', handleResize);

    // Hủy lắng nghe sự kiện khi component bị unmount
    React.useEffect(() => {
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Render danh sách menu hoặc select box tùy thuộc vào kích thước màn hình
    return (
        <div className="Menus">
            {isMobileView ? (
                <select onChange={(e) => scrollToRef(parseInt(e.target.value))}>
                    <option class="opti" value={0}>Công Thức Đặc Biệt</option>
                    <option class="opti" value={1}>Hải Sản Cao Cấp</option>
                    <option class="opti" value={2}>Thập Cẩm Cao Cấp</option>
                    <option class="opti" value={3}>Truyền Thống</option>
                    <option class="opti" value={4}>Pizza Chay</option>
                </select>
            ) : (
                <>
                    <Menu title={"Công Thức Đặc Biệt"} onClick={() => scrollToRef(0)} />
                    <Menu title={"Hải Sản Cao Cấp"} onClick={() => scrollToRef(1)} />
                    <Menu title={"Thập Cẩm Cao Cấp"} onClick={() => scrollToRef(2)} />
                    <Menu title={"Truyền Thống"} onClick={() => scrollToRef(3)} />
                    <Menu title={"Pizza Chay"} onClick={() => scrollToRef(4)} />
                </>
            )}
        </div>
    );
}


function Menu({ title, onClick }) {
    return (
        <div className="title_menu">
            <a onClick={onClick}>{title}</a>
        </div>
    );
}

export default Menus;
