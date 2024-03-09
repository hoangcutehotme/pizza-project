import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import style from './Detailproduct.css';

function Detailproduct({ setdetail, item, addToCart }) {
    function formatCurrency(price) {
        return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }

    const [note, setnote] = useState('');
    const [product, setproduct] = useState([]);
    const handelchange = (e) => {
        setnote(e.target.value);
        console.log(e.target.value);
    }
    const add = () => {
        console.log(note)
        addToCart({ ...item, noti: note });
    }

    return (
        <div>
            <div className='model'>
                <div className='Detailproduct'>
                    <div className='Detailproduct_left'>
                        <div className='df_Img'>
                            <img src={item.images} alt="" />
                        </div>
                        <div className='d_price'>
                            {formatCurrency(item.price)}
                        </div>
                    </div>
                    <div className='Detailproduct_right'>
                        <div className="dr_Name_item">
                            <span>{item.name}</span>
                        </div>
                        <div className="dr_describe_item">
                            {item.description}
                        </div>
                        <div className="dr_Name_item color">
                            <span>Ghi chú</span>
                        </div>
                        <div className="dr_note">
                            <textarea name="" id="" cols="30" rows="10" placeholder="Nhập ghi chú của bạn tại đây" onChange={(e) => handelchange(e)}></textarea>
                        </div>
                        <div className="dr_button" onClick={() => add()}>
                            <span>Thêm vào giỏ hàng</span>
                        </div>
                    </div>
                    <div className="button_close" onClick={() => setdetail(false)}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Detailproduct;
