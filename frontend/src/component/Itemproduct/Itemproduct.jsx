import React from 'react'
import style from './Itemproduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Itemproduct() {
    return (
        <div class="container1">
            <div class="Img">
                <img src="http://thepizzacompany.vn/images/thumbs/000/0003102_seafood-peach_300.png" alt="" />
            </div>
            <div class="Product_item">
                <div class="Name_item">
                    <span>Pizza Hải Sản Đào</span>
                </div>
                <div class="describe_item">
                    Tôm, Đào hoà quyện bùng nổ cùng sốt Thousand Island
                </div>
                <div class="Price_item">
                    <div class="price">
                        <h6>
                            Giá chỉ từ
                        </h6>
                        <h4>
                            169.000đ
                        </h4>
                    </div>
                    <div class="order_item">
                        <span> Mua ngay</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Itemproduct
