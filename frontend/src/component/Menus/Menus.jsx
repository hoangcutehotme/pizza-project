import React, { useState, useEffect } from 'react';
import style from './Menus.css';

function Menus({ scrollToRef, activeIndex, menu }) {

    console.log(menu);
    const [isMobileView, setIsMobileView] = useState(false);
    const handleResize = () => {
        if (window.innerWidth <= 1200) {
            setIsMobileView(true);
        } else {
            setIsMobileView(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="Menus">
            {isMobileView ? (
                <select onChange={(e) => scrollToRef(parseInt(e.target.value))} defaultValue={activeIndex}>
                    {menu?.map((item, index) => (
                        <option className="opti" value={index}>{item.catName}</option>
                    ))}
                </select>
            ) : (
                <>
                    {menu?.map((item, index) => (
                        <>
                            <Menu title={item.catName} onClick={() => { scrollToRef(index) }} active={activeIndex === index} />
                        </>
                    ))}
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
