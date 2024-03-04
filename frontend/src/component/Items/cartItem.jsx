import React from "react";
import '../../assets/styles/cart.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const CartItem = ({product, handleDeleteItem}) => {
    return (
        <div class="item" data-shoppingcartid="3600342">
            <div class="product-item">
                <div class="image">
                <a>
                        <img alt={`Ảnh của ${product.name}`} src={product.image} title={`Hiển thị chi tiết cho ${product.name}`} />
                    </a>
                </div>
                <div class="content">
                    <div class="title">
                        <div class="title-shopping-cart">{product.name}</div>
                        <div class="item-child-detail">
                            <div class="detail-content-child">
                                <p>Kích thước - Vừa 9”</p>
                                <p>Đế - Dày</p>
                                <p class="note-of-child">{product.detail}</p>
                            </div>
                        </div>
                    </div>

                    <div class="bottom">
                        <div style={{ color: 'rgb(132, 135, 136)' }}>Số lượng: {product.amount}</div>
                        <div class="price" style={{ color: '#000' }}> <span>239.000đ</span></div>
                    </div>

                </div>
                <div class="delete _flyout-cart-delete" onClick={() => handleDeleteItem(product._id)}  style={{cursor:'pointer'}}>
                    <em class='delete-icon'><FontAwesomeIcon icon={faTrashCan}/></em>
                </div>
            </div>
        </div>
    )
}

export default CartItem