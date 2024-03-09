import React, { useState, useEffect } from "react";
import CartItem from "../Items/cartItem";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../service/authContext";
import nocart from "../../assets/imgs/no_cart.png"
const Cart = ({ cart, setCart }) => {
    const navigate = useNavigate()
    const [total, setTotal] = useState(0);
    const { isLoggedIn } = useAuth();
    const handleOrder = () => {
        if (isLoggedIn) {
            navigate("user/order");
        } else {
            navigate("/login", {state: { his: 'order'}})
        }
    };

    const handleDeleteItem = (id) => {
        console.log("delete")
        const updatedProducts = cart.filter((product) => product._id !== id);
        setCart(updatedProducts);
        // const updatedCart = {
        //     ...cart,
        //     products: updatedProducts
        // };
        // localStorage.setItem('cart', JSON.stringify(updatedCart));
        let tempTotal = 0;
        updatedProducts.forEach(product => {
            const productTotal = product.amount * product.price;
            tempTotal += productTotal;
        });

        setTotal(tempTotal);
        // const count = updatedCart.products.length;
        // setProductsCount(count)
        // setIsModalOpen(true)
    };

    useEffect(() => {
        if (cart) {
            let tempTotal = 0;
            cart.forEach(product => {
                const productTotal = product.amount * product.price;
                tempTotal += productTotal;
            });

            setTotal(tempTotal);
        }
    }, [cart])
    return (
        <div class="mini-shopping-cart">
            {cart.length > 0 ? (
                <div
                    class="flyout-cart-scroll-area"
                    style={{ maxHeight: '711px' }}
                >
                    <div class="items ps-container">
                        <div class="list-product-cart">
                            {cart.map((product) => (
                                <CartItem product={product} handleDeleteItem={handleDeleteItem} />
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
                            {total.toLocaleString('vi-VN')}đ
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
                <div className="ant-drawer-body">
                    <div className="CartClose___2qcP9">
                        <div role="button" tabIndex="0" style={{ fontSize: '25px', fontWeight: '300', color: 'black', cursor: 'pointer' }} >x</div>
                    </div>
                    <div className="Container___2ODfk">
                        <div className="InnerContainer___127AT">
                            <div className="Ilus___1VMHi">
                                <img src={nocart} alt="" />
                            </div>
                            <h5 className="Title___ELm2y"></h5>
                            <div className="Caption___2tnhx"></div>
                            <div className="">
                                <button type="button" className="ant-btn textButton___2wwqU Button___2IyZ2" >
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </div>
    )
}

export default Cart