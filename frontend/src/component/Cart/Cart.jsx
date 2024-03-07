import React from 'react'
import Title from '../Title/Title'
import style from './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';



function Cart() {
    return (
        <div class="container">
            <div>
                <div>
                    <Title title={"Công Thức Đặc Biệt"} />
                </div>
                <div class="cart">
                    <div class='item'>
                        <img src="http://thepizzacompany.vn/images/thumbs/000/0003667_ham-mushroom-w-cream-truffle-sause_360.png" alt="" />
                    </div>
                    <div class='item2'>
                        Mỳ Ý Truffle
                    </div>
                    <div class='item'>
                        <div class="item_box">
                            <div class='but'>
                                <FontAwesomeIcon icon={faMinus} />
                            </div>
                            <div class='but'>
                                2
                            </div>
                            <div class='but'>
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                        </div>

                    </div>
                    <div class='item'>
                        199.000 đ
                    </div>
                    <div class='item' style={{ color: "#4f4f4f" }}>
                        <FontAwesomeIcon icon={faTrash} />
                    </div>
                </div>
                <div class="cart1" >
                    <div class="cart1_price">
                        Tổng tiền: 	487.000 đ
                    </div>
                    <div class="cart1_button">
                        <div class="cart1_item_left" >
                            <FontAwesomeIcon icon={faArrowLeft} />
                            <span >Tiếp tục mua hàng</span>
                        </div>
                        <div class="cart1_item_rigth" >
                            <span >Thanh toán</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Cart
