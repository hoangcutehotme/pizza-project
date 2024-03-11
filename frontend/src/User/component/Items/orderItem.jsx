import React, { useState, useEffect } from "react";
import '../../assets/styles/orderPage.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const OrderPageItem = ({ product, handleDeleteItem, decreaseQuantity, increaseQuantity, deleteToCart }) => {
    const [totalPrice, setTotalPrice] = useState(product.quantity * product.price);
    // const handleDecrease = () => {
    //     if (product.amount > 1) {
    //         console.log("hahahah")
    //         updateTotalPrice(product._id, product.amount - 1);
    //     }
    // };

    // const handleIncrease = () => {
    //     if (product.amount < 20) {
    //         updateTotalPrice(product._id, product.amount + 1);
    //     }
    // };

    useEffect(() => {
        setTotalPrice(product.quantity * product.price);
    }, [product.quantity, product.price]);
    return (
        <div class="item-wrapper">
            <div class="row ml-0 mr-0">
                <div class="col-lg-6 item-left">
                    <div class="row ml-0 mr-0">
                        <div class="col-3">
                            <div class="image">
                                <a>
                                    <img
                                        src={product.images[0]}
                                        alt={`Ảnh của ${product.name}`}
                                        title={`Hiển thị chi tiết cho ${product.name}`}
                                        loadedimage="true"
                                    />
                                </a>
                            </div>
                        </div>
                        <div class="col-9">
                            <div class="content" style={{ flexDirection: "column" }}>
                                <p class="product-title" style={{ textAlign: 'left' }}><a class="product-title">{product.name}</a></p>
                                <div class="item-child-detail">
                                    <div class="detail-content-child" style={{ flexDirection: "column" }}>
                                        <p class="note-of-child" style={{ textAlign: 'left' }}>Ghi chú : {product.noti}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
                <div class="col-lg-6 item-right" style={{ justifyContent: 'space-between' }}>
                    <div class="row ml-0 mr-0">
                        <div class="quantity-wrapper" style={{ width: 'fit-content' }}>
                            <div class="quantity">

                                <button class="sub" id="buttonSub" type="button" name="updatecart" onClick={() => decreaseQuantity(product)}>-</button>

                                <input
                                    name="quntity"
                                    id="quntity"
                                    type="text" value={product.quantity}
                                    class="qty-input"
                                    aria-label="Số lượng."
                                />
                                <button class="add" id="buttonAdd" type="button" name="updatecart" onClick={() => { increaseQuantity(product) }}>+</button>
                            </div>
                            <div class="button-wrap">
                            </div>
                        </div>
                        <div class="price-dish" style={{ width: 'fit-content' }}>
                            <span class="product-subtotal" style={{ fontWeight: '700', fontSize: '18px' }}>{totalPrice.toLocaleString('vi-VN')}đ</span>
                        </div>
                        <a class="delete" href="#" style={{ width: 'fit-content' }} onClick={() => deleteToCart(product)}><em class="mdi mdi-trash-can"><FontAwesomeIcon icon={faTrashCan} /></em></a>
                        <a class="delete" href="#" style={{ width: 'fit-content' }}><em class="mdi mdi-trash-can"><FontAwesomeIcon icon={faPen} /></em></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderPageItem