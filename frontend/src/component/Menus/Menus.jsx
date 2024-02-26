import React from 'react'
import style from './Menus.css'

function Menus() {
    return (
        <div class="Menus">
            <Menu title={"Công Thức Đặc Biệt"} />
            <Menu title={"Hải Sản Cao Cấp"} />
            <Menu title={"Thập Cẩm Cao Cấp"} />
            <Menu title={"Truyền Thống"} />
            <Menu title={"Pizza Chay"} />
        </div>
    );
}

function Menu({ title }) {
    return (
        <div class="title_menu">
            <a href="">{title}</a>
        </div>
    );
}

export default Menus;
