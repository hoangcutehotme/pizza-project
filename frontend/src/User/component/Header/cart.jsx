import React from "react";
import CartItem from "../Items/cartItem";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../service/authContext";
const Cart = ({ cartItems, removeToCart }) => {
    const totalPrice = cartItems.reduce((total, product) => total + (product.price * product.quantity), 0);
    const navigate = useNavigate()
    const { isLoggedIn } = useAuth();
    const handleOrder = () => {
        if (isLoggedIn) {
            navigate("user/order");
        } else {
            navigate("/login", { state: { his: 'order' } })
        }
    };

    return (
        <div class="mini-shopping-cart">
            {cartItems.length > 0 ? (
                <div
                    class="flyout-cart-scroll-area"
                    style={{ maxHeight: '711px' }}
                >
                    <div class="items ps-container">
                        <div class="list-product-cart">
                            {cartItems?.map((product) => (
                                <CartItem product={product} removeToCart={removeToCart} />
                            ))}
                        </div>
                        <div
                            class="ps-scrollbar-x-rail"
                            style={{ left: '0px', bottom: '3px' }}
                        >
                            <div
                                class="ps-scrollbar-x"
                                style={{ left: '0px', width: '0px' }}
                            ></div>
                        </div>
                        <div
                            class="ps-scrollbar-y-rail"
                            style={{ top: '0px', right: '3px' }}
                        >
                            <div
                                class="ps-scrollbar-y"
                                style={{ top: '0px', height: '0px' }}
                            ></div>
                        </div>
                    </div>
                    <div class="flyout-lower">
                        <div class="count" style={{ fontWeight: 'bold' }}>
                            Tổng Tiền
                        </div>
                        <div
                            class="totals"
                            style={{

                                color: '#d30e15',
                                fontSize: '20px',
                                fontWeight: '900'

                            }}
                            id="totals-price-custom"
                        >
                            {totalPrice.toLocaleString('vi-VN')}đ
                        </div>

                        <div class="buttons" onClick={handleOrder}>
                            <input
                                type="button"
                                value={isLoggedIn ? 'Đặt hàng' : 'Đăng nhập để đặt hàng'}
                                id="checkout"
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div
                    class="flyout-cart-scroll-area"
                    style={{ maxHeight: '711px' }}
                >
                    <div class='cart_no'>Rất tiếc!!! Bạn không có sản phẩm ở đây.</div>
                </div>
            )}
        </div>
    )
}

export default Cart