import React, { useState } from 'react'
import style from './Itemproduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Itemproduct({ products }) {
    const [product] = useState({
        img: "http://thepizzacompany.vn/images/thumbs/000/0003102_seafood-peach_300.png",
        name: 'Pizza Hải Sản Đào',
        decrip: 'Tôm, Đào hoà quyện bùng nổ cùng sốt Thousand Island',
        price: '169.000'
    });

    return (
        <div class="container1">
            <div class="Img">
                <img src={product.img} alt="" />
            </div>
            <div class="Product_item">
                <div class="Name_item">
                    <span>{product.name}</span>
                </div>
                <div class="describe_item">
                    {product.decrip}
                </div>
                <div class="Price_item">
                    <div class="price">
                        <h6>
                            Giá chỉ từ
                        </h6>
                        <h4>
                            {product.price}đ
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
