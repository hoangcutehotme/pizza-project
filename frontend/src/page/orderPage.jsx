import React, { useState, useEffect } from "react";
import OrderPageItem from "../component/Items/orderItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../service/userContext";
import PickAddress from "../component/Modal/pickAddress";
import { useNavigate } from "react-router-dom";
const OrderPage = () => {
    const navigate = useNavigate()
    const { cart, setCart } = useUser();
    const [total, setTotal] = useState(0);
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

    const updateTotalPrice = (id, quantity) => {
        const updatedProducts = cart.map(product => {
            if (product._id === id) {
                product.amount = quantity;
            }
            return product;
        });

        setCart(updatedProducts);
        let tempTotal = 0;
        updatedProducts.forEach(product => {
            const productTotal = product.amount * product.price;
            tempTotal += productTotal;
        });
        setTotal(tempTotal);
    };

    useEffect(() => {
        if (cart) {
            let tempTotal = 0;
            cart.forEach(product => {
                console.log(product)
                const productTotal = product.amount * product.price;
                tempTotal += productTotal;
            });

            setTotal(tempTotal);
        }
    }, [cart])
    const [user, setUser] = useState()
    const [selectedContact, setSelectedContact] = useState({})
    const [contacts, setContacts] = useState([])
    const [defaultContact, setDefaultContact] = useState("")
    const [userName, setUserName] = useState("")
    useEffect(() => {
        const user = localStorage.getItem("user");
        const userData = JSON.parse(user);
        const defaultContactId = userData.defaultContact;
        const defaultContact = userData.contact.find(contact => contact._id === defaultContactId);
        setDefaultContact(userData.defaultContact)
        setUser(userData);
        setSelectedContact(defaultContact)
        setUserName(userData.firstName + " " + userData.lastName)
        setContacts(userData.contact)
    }, []);

    const [showModalAddress, setShowModalAddress] = useState(false)
    const openModalAddress = () => {
        console.log("hahahahah")
        setShowModalAddress(true);
    };

    const closeModalAddress = () => {
        setShowModalAddress(false);
    };

    return (
        <div class="master-column-wrapper custom-master-column-wrapper-min-height" id="_master-column-wrapper-id">
            <div class="center-1">
                <div class="page shopping-cart-page">
                    <div class="page-body">
                        <div class="order-summary-content">
                            <section class="the-pizza-giohang main-section">
                                <div class="container pr-0">
                                    <div class="m6A2B1">
                                        <div class="xBNaac"></div>
                                        <div class="hYgtuo">
                                            <div class="SvK9MH">
                                                <div class="IZawzb">
                                                    <div class="qclVa9" style={{ fontSize: '25px' }}>
                                                        <FontAwesomeIcon icon={faLocationDot} />
                                                    </div>
                                                    <h2 style={{ fontSize: '30px' }}>Địa chỉ nhận hàng</h2>
                                                </div>
                                            </div>
                                            <div class="i1xLmh">
                                                <div>
                                                    <div class="y0jyrJ">
                                                        <div class="PzGLCh">{userName} | {selectedContact.phoneNumber}</div>
                                                        <div class="a9c4OR">
                                                            {selectedContact.address}
                                                        </div>
                                                        {(defaultContact && selectedContact._id === defaultContact) && (
                                                            <div class="dIzOca">Mặc định</div>
                                                        )}
                                                    </div>
                                                </div>
                                                <button class="VNkBIJ div-style" onClick={openModalAddress}>Thay đổi</button>
                                            </div>
                                            <div></div>
                                        </div>
                                    </div>

                                    <div class="cart-wrapper pl-0 pr-0">
                                        <h3 class="main-title" style={{ textAlign: 'left', color: '#006a31' }}>Sản phẩm</h3>
                                        {cart.map((product) => (
                                            <OrderPageItem
                                                product={product}
                                                handleDeleteItem={handleDeleteItem}
                                                updateTotalPrice={updateTotalPrice}
                                            />
                                        ))}
                                    </div>
                                    <div class="price-total" style={{ marginTop: '0px' }}>
                                        <div class="d-none d-sm-block">
                                            <div class="yHG0SE" aria-live="polite">
                                                <h3 class="o13Lc4 hERTPn cFXdGN">Tổng tiền hàng</h3>
                                                <div class="o13Lc4 X9R_0O cFXdGN">{total.toLocaleString('vi-VN')}₫</div>
                                                <h3 class="o13Lc4 hERTPn fwPZIN">Phí vận chuyển</h3>
                                                <div class="o13Lc4 X9R_0O fwPZIN">30.000₫</div>
                                                <h3 class="o13Lc4 hERTPn cNgneA">Tổng thanh toán</h3>
                                                <div class="o13Lc4 fYeyE4 X9R_0O cNgneA">₫{(total+30000).toLocaleString('vi-VN')}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-none d-sm-block">
                                        <div class="button-wrapper">
                                            <a class="btn-prev btn-prev-custom" style={{ cursor: 'pointer' }} onClick={() => { navigate("/pizza") }}>
                                                <em class="mdi mdi-arrow-left"><FontAwesomeIcon icon={faArrowLeft} /></em>
                                                <span>
                                                    Tiếp tục mua hàng
                                                </span>
                                            </a>
                                            <a class="btn-next" id="btn-next-in-cart">
                                                <span>Thanh toán</span>
                                                <em class="mdi mdi-arrow-right"><FontAwesomeIcon icon={faArrowRight} /></em>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            {showModalAddress && (
                <PickAddress show={showModalAddress} handleClose={closeModalAddress} user={user} selectedContact={selectedContact} setSelectedContact={setSelectedContact} contacts={contacts} setContacts={setContacts} defaultContact={defaultContact} setDefaultContact={setDefaultContact} />
            )}
        </div>
    )
}

export default OrderPage