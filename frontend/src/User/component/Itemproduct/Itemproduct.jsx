import React, { useState } from 'react'
import style from './Itemproduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Itemproduct({ product, setdetail, setitem }) {

    function formatCurrency(price) {
        return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }

    return (
        <div className="container1">
            <div className="Img">
                <img src={product.images} alt={product.image} />
            </div>
            <div className="Product_item">
                <div className="Name_item">
                    <span>{product.name}</span>
                </div>
                <div className="describe_item">
                    {product.description}
                </div>
                <div className="Price_item">
                    <div className="price">
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
