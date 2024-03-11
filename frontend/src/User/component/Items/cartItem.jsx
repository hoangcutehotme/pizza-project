import React from "react";
import '../../assets/styles/cart.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

// <<<<<<< HEAD
// const CartItem = ({product, handleDeleteItem}) => {
//     return (
//         <div class="item" data-shoppingcartid="3600342">
//             <div class="product-item">
//                 <div class="image">
//                 <a>
//                         <img alt={`Ảnh của ${product.name}`} src={product.image} title={`Hiển thị chi tiết cho ${product.name}`} style={{width:'80px', height:'80px'}}/>
// =======
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
                        {/* >>>>>>> 6dcf86328c2119a0d6c750ab9c0054d68b8fa060 */}
                    </a>
                </div>
                <div class="content" style={{ display: "flex", flexDirection: "column" }}>
                    <div class="title">
                        <div class="title-shopping-cart">{product.name}</div>
                        <div class="item-child-detail">
                            <div class="detail-content-child">
                                {/* <<<<<<< HEAD
                                <p>Kích thước - Vừa 9”</p>
                                <p>Đế - Dày</p>
                                <p class="note-of-child" style={{marginBottom:'0px'}}>{product.detail}</p> */}
                                {/* ======= */}
                                <p>{product.decrip} </p>
                                <p class="note-of-child">{product.noti}</p>
                                {/* >>>>>>> 6dcf86328c2119a0d6c750ab9c0054d68b8fa060 */}
                            </div>
                        </div>
                    </div>

                    <div class="bottom">
                        {/* <<<<<<< HEAD
                        <div style={{ color: 'rgb(132, 135, 136)', fontWeight:'400', fontSize:'16px' }}>Số lượng: {product.amount}</div>
                        <div class="price" style={{ color: '#000' }}> <span>{product.price.toLocaleString('vi-VN')}đ</span></div>
                    </div>

                </div>
                <div class="delete _flyout-cart-delete" onClick={() => handleDeleteItem(product._id)}  style={{cursor:'pointer'}}>
                    <em class='delete-icon'><FontAwesomeIcon icon={faTrashCan}/></em>
======= */}
                        <div style={{ color: 'rgb(132, 135, 136)' }}>Số lượng: {product.quantity}</div>
                        <div class="price" style={{ color: '#000' }}> <span>{formatCurrency(product.price)} </span></div>
                    </div>

                </div>
                <div class="delete _flyout-cart-delete" onClick={() => removeToCart(product)} style={{ cursor: 'pointer' }}>
                    <em class='delete-icon'><FontAwesomeIcon icon={faTrashCan} /></em>
                    {/* >>>>>>> 6dcf86328c2119a0d6c750ab9c0054d68b8fa060 */}
                </div>
            </div>
        </div>
    )
}

export default CartItem