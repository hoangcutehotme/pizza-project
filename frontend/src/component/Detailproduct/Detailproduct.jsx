import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import style from './Detailproduct.css';

function Detailproduct({ setdetail }) {
    return (
        <div>
            <div className='model'>
                <div className='Detailproduct'>
                    <div className='Detailproduct_left'>
                        <div className='df_Img'>
                            <img src="https://thepizzacompany.vn/images/thumbs/000/0003102_seafood-peach_300.png" alt="" />
                        </div>
                        <div className='d_price'>
                            139.000đ
                        </div>
                    </div>
                    <div className='Detailproduct_right'>
                        <div className="dr_Name_item">
                            <span>Mỳ Ý Truffle</span>
                        </div>
                        <div className="dr_describe_item">
                            Nấm Truffle đen với hương thơm ngất ngây, phủ trên lớp sốt kem nấm beo béo đậm đà cùng thịt giăm bông mềm mại.
                        </div>
                        <div className="dr_Name_item color">
                            <span>Ghi chú</span>
                        </div>
                        <div className="dr_note">
                            <textarea name="" id="" cols="30" rows="10" placeholder="Nhập ghi chú của bạn tại đây"></textarea>
                        </div>
                        <div className="dr_button" onClick={() => setdetail(false)}>
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
