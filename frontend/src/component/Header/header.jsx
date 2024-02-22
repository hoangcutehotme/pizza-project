import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faCartShopping, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import logo from "../../assets/imgs/logoPizza.png"
import "../../assets/styles/1024.css"
import "./header.css"
import "../../assets/styles/Custom.css"
import "../../assets/styles/cart.css"

const Header = () => {
  return (
    <header id="_main-header" class="" style={{ paddingBottom: "20px" }}>
      <div class="container">
        <div class="top-wrap">
          <div class="left-wrap">
            <div class="logo">
              <a href="/" class="logo" style={{ textDecoration: 'none' }}>
                <img
                  alt="The Pizza Home"
                  title="The Pizza Company"
                  src={logo}
                  style={{ width: '100px', height: '90px' }}
                />
                <span style={{ marginLeft: '20px', color: '#006a31', fontSize: '20px', fontWeight: '700' }}>Pizza Home</span>
              </a>
            </div>
          </div>
          <div class="mid-wrap">
            <div class="form-group" style={{ width: '300px' }}>
              <div class="form-select div-autocomplete" id="select-address" style={{ borderColor: 'grey' }}>
                <label>
                  <em>
                    <FontAwesomeIcon icon={faSearch} />
                  </em>
                </label>
                <span
                  tabindex="-1"
                  role="presentation"
                  class="k-widget k-autocomplete input-autocomplete k-autocomplete-clearable k-state-default"
                ><input
                    id="autocomplete-address"
                    class="input-autocomplete k-input"
                    placeholder="Tìm kiếm món ăn"
                    autocomplete="off"
                  />
                  <span
                    unselectable="on"
                    class="k-icon k-clear-value k-i-close"
                    title="clear"
                    role="button"
                    tabindex="-1"
                  ></span>
                  <span class="k-icon k-i-loading" style={{ display: "none" }}></span>
                </span>
              </div>
            </div>
          </div>
          <div class="right-wrap">
            <div class="account">
              <div href="/customer/info" class="icon">
                <em> <FontAwesomeIcon icon={faCircleUser} /></em>
              </div>
              {/* <div class="login-and-register">
                <a href="/login?returnUrl=%2F" class="register" style={{ textDecoration: 'none' }}>Đăng nhập</a>
                <span>/</span>
                <a href="/register?returnUrl=%2F" class="login" style={{ textDecoration: 'none' }}
                >Tạo tài khoản</a>
              </div> */}
              <a href="/userInfo" class="opener" id="a-custom-id" style={{ color: 'black' }}>Huỳnh Thuận</a>
              <div class="profile-menu-box">
                <div class="close-side-menu" style={{ display: 'none' }}>
                  <span class="close-side-menu-text">0707252330</span>
                  <span class="close-side-menu-btn">Close</span>
                </div>
                <a href="/userInfo" className="menu-link" style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faCircleUser} style={{ marginRight: '10px' }} /> Tài khoản</a>
                <a href="/" className="menu-link" style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faArrowRightFromBracket} style={{ marginRight: '10px' }} />Đăng xuất</a>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-wrap">
          <div class="left-wrap">
            <ul
              class="main-menu mega-menu"
              data-isrtlenabled="false"
              data-enableclickfordropdown="false"
            >
              <li class=" ">
                <a href="/" class=""
                ><span> Trang chủ </span></a>
              </li>
              <li class=" ">
                <a href="/" class=""
                ><span> Pizza </span></a>
              </li>
            </ul>
          </div>
          <div class="right-wrap">
            <div class="mobile-flyout-wrapper">
              <div class="cart custom-cart" id="topcartlink">
                <div class="icon">
                  <a href="/cart">
                    <em><FontAwesomeIcon icon={faCartShopping} style={{ fontSize: '18px' }} /></em>
                  </a>
                </div>

                <p style={{ marginTop: '0px', marginBottom: '0px', marginLeft: '5px' }}>
                  <a href="/cart" style={{ textDecoration: 'none', color: '#006a31' }}> Giỏ hàng </a>
                </p>

                <div class="amount">
                  <span class="cart-qty" id="_TotalProducts"> 1 </span>
                </div>

                <div
                  id="flyout-cart"
                  class="flyout-cart"
                  data-removeitemfromcarturl="/EmporiumTheme/RemoveItemFromCart"
                  data-flyoutcarturl="/EmporiumTheme/FlyoutShoppingCart"
                >
                  <div class="mini-shopping-cart">
                    <div
                      class="flyout-cart-scroll-area"
                      style={{ maxHeight: '711px' }}
                    >
                      <div class="items ps-container">
                        <div class="list-product-cart">
                          <div class="item first" data-shoppingcartid="3600342">
                            <div class="product-item">
                              <div class="image">
                                <a href="/pizza-tom-cocktail-4" title="Hiển thị chi tiết cho Pizza Tôm Cocktail ">
                                  <img alt="Ảnh của Pizza Tôm Cocktail " src="http://thepizzacompany.vn/images/thumbs/000/0002216_shrimp-ctl_95.png" title="Hiển thị chi tiết cho Pizza Tôm Cocktail " />
                                </a>
                              </div>
                              <div class="content">
                                <div class="title">
                                  <div class="title-shopping-cart">Pizza Tôm Cocktail </div>
                                  <div class="item-child-detail">
                                    <div class="detail-content-child">
                                      <p>Kích thước - Vừa 9”</p>
                                      <p>Đế - Dày</p>

                                    </div>
                                  </div>
                                </div>

                                <div class="bottom">
                                  <div style={{ color: 'rgb(132, 135, 136)' }}>Số lượng: 1</div>
                                  <div class="price" style={{ color: '#000' }}> <span>239.000đ</span></div>
                                </div>

                              </div>
                              <div class="delete _flyout-cart-delete" onclick="">
                                  <em class='delete-icon'><FontAwesomeIcon icon={faTrash}/></em>
                              </div>
                            </div>
                          </div>
                          <div class="item" data-shoppingcartid="3599162">
                            <div class="product-item">
                              <div class="image">
                                <a href="/mirinda-soda-kem-lon" title="Hiển thị chi tiết cho Mirinda Soda Kem Lon">
                                  <img alt="Ảnh của Mirinda Soda Kem Lon" src="http://thepizzacompany.vn/images/thumbs/000/0002702_mirinda-soda-kem-can_95.png" title="Hiển thị chi tiết cho Mirinda Soda Kem Lon" />
                                </a>
                              </div>
                              <div class="content">
                                <div class="title">
                                  <div class="title-shopping-cart">Mirinda Soda Kem Lon</div>
                                </div>

                                <div class="bottom">
                                  <div style={{ color: 'rgb(132, 135, 136)' }}>Số lượng: 1</div>
                                  <div class="price" style={{ color: '#000' }}> <span>29.000đ</span></div>
                                </div>

                              </div>
                              <div class="delete _flyout-cart-delete" onclick="">
                                  <em class='delete-icon'><FontAwesomeIcon icon={faTrash}/></em>
                              </div>
                            </div>
                          </div>
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
                          288.000đ
                        </div>

                        <div class="buttons">
                          <input
                            type="button"
                            value="Thanh toán"
                            id="checkout"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header