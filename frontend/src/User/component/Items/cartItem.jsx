import React from "react";
import '../../assets/styles/cart.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const CartItem = ({ product, removeToCart }) => {
    function formatCurrency(price) {
        return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }

    return (

        <div class="item" data-shoppingcartid="3600342">
            <div class="product-item">
                <div class="image">
                    <a href="/pizza-tom-cocktail-4" title="Hiển thị chi tiết cho Pizza Tôm Cocktail ">
                        <img alt={`Ảnh của ${product.name}`} src={product.images} title={`Hiển thị chi tiết cho ${product.name}`} />
                    </a>
                </div>
                <div class="content" style={{ display: "flex", flexDirection: "column" }}>

                    <div class="title">
                        <div class="title-shopping-cart">{product.name}</div>
                        <div class="item-child-detail">
                            <div class="detail-content-child">
                                <p>{product.decrip} </p>
                                <p class="note-of-child">{product.noti}</p>
                            </div>
                        </div>
                    </div>

                    <div class="bottom">
                        <div style={{ color: 'rgb(132, 135, 136)' }}>Số lượng: {product.quantity}</div>
                        <div style={{ color: '#000' }}> <span>{formatCurrency(product.price * product.quantity)} </span></div>
                    </div>

                </div>
                <div class="delete _flyout-cart-delete" onClick={() => removeToCart(product)} style={{ cursor: 'pointer' }}>
                    <em class='delete-icon'><FontAwesomeIcon icon={faTrashCan} /></em>
                </div>
            </div>
        </div>
    )
}

export default CartItem