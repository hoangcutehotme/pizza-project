import React from "react";
import OrderPageItem from "../component/Items/orderItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../service/userContext"; 
const OrderPage = () => {
    const {cart, setCart} = useUser();

    return (
        <div class="master-column-wrapper custom-master-column-wrapper-min-height" id="_master-column-wrapper-id">
            <div class="center-1">
                <div class="page shopping-cart-page">
                    <div class="page-body">
                        <div class="order-summary-content">
                            <section class="the-pizza-giohang main-section">
                                <div class="container pr-0">
                                    <div class="cart-wrapper pl-0 pr-0">
                                        <h3 class="main-title" style={{textAlign:'left'}}>Sản phẩm</h3>
                                        {cart.map((product) =>  (
                                            <OrderPageItem product={product}/>
                                        ))}
                                    </div>
                                    <div class="price-total" style={{ marginTop: '0px' }}>
                                        <div class="col-4">
                                            <div class="cart-collaterals">
                                            </div>
                                        </div>
                                        <div class="d-none d-sm-block">
                                            <div class="col-12">
                                                <div class="total-info" id="total-info-id">
                                                    <table class="cart-total">
                                                        <tbody>
                                                            <tr class="order-total">
                                                                <td class="cart-total-left">
                                                                    <label class="label-cart-total">Tổng tiền:&nbsp;</label>
                                                                </td>
                                                                <td class="cart-total-right">
                                                                    <span class="value-summary" id="value-summary-id" style={{ color: '#d30e15' }}><strong>1.941.000đ</strong></span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-none d-sm-block">
                                        <div class="button-wrapper">
                                            <a class="btn-prev btn-prev-custom" style={{cursor:'pointer'}}>
                                                <em class="mdi mdi-arrow-left"><FontAwesomeIcon icon={faArrowLeft}/></em>
                                                <span>
                                                    Tiếp tục mua hàng
                                                </span>
                                            </a>
                                            <a class="btn-next" id="btn-next-in-cart" href="/CheckOut/Orderform">
                                                <span>Thanh toán</span>
                                                <em class="mdi mdi-arrow-right"><FontAwesomeIcon icon={faArrowRight}/></em>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderPage