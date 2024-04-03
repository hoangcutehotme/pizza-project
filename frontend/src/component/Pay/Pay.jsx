import React from 'react'
import style from './Pay.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { faMinus, faPlus, faTrash, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function pay() {
    return (
        <div>
            <div className="container">
                <div style={{ marginTop: "50px" }}>
                    <div className="pay_top">
                        <div className="pay_title">Hình thức đặt hàng</div>
                        <div className="pay_h">Quý khách vui lòng lựa chọn phương thức đặt hàng phù hợp.</div>
                        <div className="pay_h">Quý khách có thể chọn Đặt giao hàng tận nơi hoặc Đặt đến lấy trực tiếp tại chi nhánh nhà hàng gần nhất.</div>
                    </div>
                    <div className="pay_bottom">
                        <div className="pay_title">Hình thức đặt hàng</div>
                        <div className="pay_p">
                            <div className="pay_title" style={{ color: '#006a31' }}>Đặt giao hàng</div>
                            <div className="pay_h">Quý khách vui lòng lựa chọn phương thức đặt hàng phù hợp.</div>
                        </div>
                        <div className="pay_p">
                            <div className="pay_title" style={{ color: '#006a31' }}>Đặt đến lấy</div>
                            <div className="pay_h">Nhận đơn hàng của bạn tại. </div>
                        </div>

                    </div>
                    <div className="cart1_button" >
                        <div className="cart1_item_left" style={{ background: '#006a31' }}>
                            <FontAwesomeIcon icon={faArrowLeft} />
                            <span>Tiếp tục mua hàng</span>
                        </div>
                        <div className="cart1_item_rigth">
                            <span>Thanh toán</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default pay
