import React, { useState } from 'react'
import style from './Itemproduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Itemproduct({ product, setdetail, setitem }) {

    function formatCurrency(price) {
        return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }

    return (
        <div class="container1">
            <div class="Img">
                <img src={product.images} alt={product.image} />
            </div>
            <div class="Product_item">
                <div class="Name_item">
                    <span>{product.name}</span>
                </div>
                <div class="describe_item">
                    {product.description}
                </div>
                <div class="Price_item">
                    <div class="price">
                        <h6>
                            Giá chỉ từ
                        </h6>
                        <h4>
                            {formatCurrency(product.price)}
                        </h4>
                    </div>
                    <div className="order_item" onClick={() => { setdetail(true); setitem(product); }}>
                        <span>Mua ngay</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Itemproduct
