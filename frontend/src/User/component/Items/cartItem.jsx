import React from "react";
import '../../assets/styles/cart.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const CartItem = ({ product, removeToCart }) => {
    function formatCurrency(price) {
        return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }

    return (

        <div className="item" data-shoppingcartid="3600342">
            <div className="product-item">
                <div className="image">
                    <a href="/pizza-tom-cocktail-4" title="Hiển thị chi tiết cho Pizza Tôm Cocktail ">
                        <img alt={`Ảnh của ${product.name}`} src={product.images} title={`Hiển thị chi tiết cho ${product.name}`} />
                        {/* >>>>>>> 6dcf86328c2119a0d6c750ab9c0054d68b8fa060 */}
                    </a>
                </div>
                <div className="content" style={{ display: "flex", flexDirection: "column" }}>

                    <div className="title">
                        <div className="title-shopping-cart">{product.name}</div>
                        <div className="item-child-detail">
                            <div className="detail-content-child">
                                <p>{product.decrip} </p>
                                <p className="note-of-child">{product.noti}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bottom">
                        <div style={{ color: 'rgb(132, 135, 136)' }}>Số lượng: {product.quantity}</div>
                        <div className="price" style={{ color: '#000' }}> <span>{formatCurrency(product.price * product.quantity)} </span></div>
                    </div>

                </div>
                <div className="delete _flyout-cart-delete" onClick={() => removeToCart(product)} style={{ cursor: 'pointer' }}>
                    <em className='delete-icon'><FontAwesomeIcon icon={faTrashCan} /></em>
                </div>
            </div>
        </div>
    )
}

export default CartItem