import React from "react";
import '../../assets/styles/orderPage.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const OrderPageItem = ({product}) => {
    return (
        <div class="item-wrapper">
            <div class="row ml-0 mr-0">
                <div class="col-lg-6 item-left">
                    <div class="row ml-0 mr-0">
                        <div class="col-3">
                            <div class="image">
                                <a>
                                    <img
                                        src={product.image}
                                        alt={`Ảnh của ${product.name}`}
                                        title={`Hiển thị chi tiết cho ${product.name}`}
                                        loadedimage="true"
                                    />
                                </a>
                            </div>
                        </div>
                        <div class="col-9">
                            <div class="content">
                                <p class="product-title" style={{textAlign:'left'}}><a class="product-title">{product.name}</a></p>
                                <div class="item-child-detail">
                                    <div class="detail-content-child">
                                        <p style={{textAlign:'left'}}>Kích thước - Vừa 9”</p>
                                        <p style={{textAlign:'left'}}>Đế - Dày</p>
                                        <p class="note-of-child" style={{textAlign:'left'}}>{product.detail}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
                <div class="col-lg-6 item-right" style={{ justifyContent: 'space-between' }}>
                    <div class="row ml-0 mr-0">
                        <div class="quantity-wrapper" style={{width:'fit-content'}}>
                            <div class="quantity" on="">

                                <button class="sub" id="buttonSub" type="button" name="updatecart" onclick="updatePrice();">-</button>

                                <input
                                    min="1"
                                    max="999"
                                    name="itemquantity3599162"
                                    id="itemquantity3599162"
                                    type="text" value="1"
                                    class="qty-input"
                                    aria-label="Số lượng."
                                />
                                <button class="add" id="buttonAdd" type="button" name="updatecart" onclick="updatePrice();">+	</button>
                            </div>
                            <div class="button-wrap">
                            </div>
                        </div>
                        <div class="price-dish" style={{width:'fit-content'}}>
                            <span class="product-subtotal" style={{ fontWeight: '700', fontSize: '18px' }}>29.000đ</span>
                        </div>
                        <a class="delete" href="#" style={{width:'fit-content'}}><em class="mdi mdi-trash-can"><FontAwesomeIcon icon={faTrashCan}/></em></a>
                        <a class="delete" href="#" style={{width:'fit-content'}}><em class="mdi mdi-trash-can"><FontAwesomeIcon icon={faPen}/></em></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderPageItem