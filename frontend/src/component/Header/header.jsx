import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHouse, faLocationDot, faShop, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import logo from "../../assets/imgs/logoBig.png"
import "../../assets/styles/Custom.css"
import "../../assets/styles/1024.css"
import "./header.css"

const Header = () => {
  return (
    <header id="_main-header" class="" style={{ paddingBottom: "8px" }}>
      <div class="container">
        <div class="top-wrap">
          <div class="left-wrap">
            <div class="logo">
              <a href="/" class="logo">
                <img
                  alt="The Pizza Home"
                  title="The Pizza Company"
                  src={logo}
                />
                {/* <img
                  class="logo-mobile"
                  alt="logo"
                  src={logo}
                /> */}
              </a>
            </div>
          </div>
          <div class="mid-wrap">
            <div class="form-group list-radio">
              <div class="form-radio">
                <input
                  type="radio"
                  id="order-delivery"
                  name="order"
                  checked="checked"
                />
                <label for="order-delivery">
                  <em>
                    <FontAwesomeIcon icon={faTruckFast} />
                  </em>
                  <span>Đặt giao hàng</span>
                </label>
              </div>
              <div class="form-radio">
                <input
                  type="radio"
                  id="put-to-get"
                  name="order"
                />
                <label for="put-to-get">
                  <em>
                    <FontAwesomeIcon icon={faShop} />
                  </em>
                  <span>Đặt đến lấy</span></label>
              </div>
            </div>
            <div class="form-group">
              <div class="form-select div-autocomplete" id="select-address" style={{ borderColor: 'grey' }}>
                <label>
                  <em>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </em>
                </label>
                <span
                  tabindex="-1"
                  role="presentation"
                  class="k-widget k-autocomplete input-autocomplete k-autocomplete-clearable k-state-default"
                ><input
                    id="autocomplete-address"
                    class="input-autocomplete k-input"
                    placeholder="Nhập địa chỉ của bạn"
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

              <div
                class="form-select d-none div-autocomplete"
                id="select-store"
              >
                <label> <em> <FontAwesomeIcon icon={faHouse} /></em></label>
                <span
                  tabindex="-1"
                  role="presentation"
                  class="k-widget k-autocomplete input-autocomplete k-autocomplete-clearable k-state-default"
                ><input
                    id="autocomplete-store"
                    class="input-autocomplete k-input"
                    autocomplete="off"
                    placeholder="Nhập cửa hàng"
                  />
                  <span
                    unselectable="on"
                    class="k-icon k-clear-value k-i-close"
                    title="clear"
                    role="button"
                    tabindex="-1"
                  ></span>
                  <span class="k-icon k-i-loading" style={{ display: 'none' }}></span></span>
              </div>
            </div>
          </div>
          <div class="right-wrap">
            <div class="account">
              <div href="/customer/info" class="icon">
                <em> <FontAwesomeIcon icon={faCircleUser} /></em>
              </div>
              <div class="login-and-register">
                <a href="/login?returnUrl=%2F" class="register">Đăng nhập</a>
                <span>/</span>
                <a href="/register?returnUrl=%2F" class="login"
                >Tạo tài khoản</a>
              </div>
            </div>
            <div class="language">
            </div>
          </div>
          <div class="button-hambuger">
            <div class="burger-bt-inner">
              <span></span>
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
                <a href="/promotion-4" class="" title="Khuyến mãi"
                ><span> Khuyến mãi</span></a>
              </li>

              <li class=" ">
                <a
                  href="https://thepizzacompany.vn/combo-unbox"
                  class=""
                  title="#unBOX"
                ><span> #unBOX</span></a>
              </li>

              <li class="has-sublist">
                <a href="/pizza" class="with-subcategories" title="Pizza"
                ><span> Pizza</span></a>

                {/* <div class="plus-button"></div> */}
                {/* <div class="sublist-wrap">
                  <ul class="sublist">
                    <li class="back-button">
                      <span>Back</span>
                    </li>

                    <li class=" ">
                      <a
                        href="/hai-san-pesto"
                        class=""
                        title="Công Thức Đặc Biệt"
                        ><span> Công Thức Đặc Biệt</span></a>
                    </li>

                    <li class=" ">
                      <a
                        href="/hai-san-cao-cap"
                        class=""
                        title="Hải Sản Cao Cấp "
                        ><span> Hải Sản Cao Cấp </span></a>
                    </li>

                    <li class=" ">
                      <a
                        href="/thap-cam-cao-cap"
                        class=""
                        title="Thập Cẩm Cao Cấp "
                        ><span> Thập Cẩm Cao Cấp </span></a>
                    </li>

                    <li class=" ">
                      <a href="/truyen-thong" class="" title="Truyền Thống"
                        ><span> Truyền Thống</span></a>
                    </li>

                    <li class=" ">
                      <a href="/pizza-chay" class="" title="Pizza Chay"
                        ><span> Pizza Chay</span></a>
                    </li>
                  </ul>
                </div> */}
              </li>

              <li class=" ">
                <a href="/khai-vi" class="" title="Khai vị"
                ><span> Khai vị</span></a>
              </li>

              <li class=" ">
                <a href="/my-y" class="" title="Mỳ Ý"><span> Mỳ Ý</span></a>
              </li>

              <li class=" ">
                <a href="/salad" class="" title="Salad"><span> Salad</span></a>
              </li>

              <li class=" ">
                <a href="/thuc-uong" class="" title="Thức uống"
                ><span> Thức uống</span></a>
              </li>

              <li class=" ">
                <a
                  href="https://thepizzacompany.vn/menu-the-moi-chat"
                  class=""
                  title="Thế Mới Chất!!"
                ><span> Thế Mới Chất!!</span></a>
              </li>
            </ul>
          </div>
          <div class="right-wrap">
            {/* <div class="mobile-flyout-wrapper">
              <div class="close-side-menu">
                <span class="close-side-menu-text">Giỏ hàng</span>
                <span class="close-side-menu-btn">Close</span>
              </div>
            </div> */}
            <div class="cart custom-cart" id="topcartlink">
              <div class="icon">
                <a href="/cart">
                  <em><FontAwesomeIcon icon={faCartShopping} /></em>
                </a>
              </div>

              <p>
                <a href="/cart" style={{textDecoration: 'none', color:'#006a31'}}> Giỏ hàng </a>
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
                    style={{maxHeight: '711px'}}
                  >
                    <div class="items ps-container">
                      <div class="list-product-cart">
                        <div class="item first" data-shoppingcartid="3599045">
                          <div class="product-item">
                            <div class="image">
                              <a
                                title="Hiển thị chi tiết cho #unBOX 3 - TẶNG BỘ LY khi mua cùng Pepsi"
                              >
                                <img
                                  alt="Ảnh của #unBOX 3 - TẶNG BỘ LY khi mua cùng Pepsi"
                                  src="http://thepizzacompany.vn/images/thumbs/000/0003771_combo-unbox-3-ec-ta_95.png"
                                  title="Hiển thị chi tiết cho #unBOX 3 - TẶNG BỘ LY khi mua cùng Pepsi"
                                />
                              </a>
                            </div>
                            <div class="content">
                              <div class="title">
                                <div class="title-shopping-cart">
                                  #unBOX 3 - TẶNG BỘ LY khi mua cùng Pepsi
                                </div>

                                <div class="item-child-detail">
                                  <span class="number-of-child">1</span>
                                  <div class="detail-content-child">
                                    <p class="name-of-child font-weight-bold">
                                      Pizza Rau Củ
                                      <span
                                        style={{

                                          marginLeft: '10px',
                                          color: '#088730',
                                          fontSize: '15px',
                                          fontWeight: 'bold'

                                        }}
                                      >x1</span>
                                    </p>
                                    <p>Kích thước - Nhỏ 6”</p>
                                    <p>Đế - Dày</p>
                                  </div>
                                </div>
                                <div class="item-child-detail">
                                  <span class="number-of-child">2</span>
                                  <div class="detail-content-child">
                                    <p class="name-of-child font-weight-bold">
                                      Bánh Mì Bơ Tỏi
                                      <span
                                        style={{

                                          marginLeft: '10px',
                                          color: '#088730',
                                          fontSize: '15px',
                                          fontWeight: 'bold'

                                        }}
                                      >x1</span>
                                    </p>
                                  </div>
                                </div>
                                <div class="item-child-detail">
                                  <span class="number-of-child">3</span>
                                  <div class="detail-content-child">
                                    <p class="name-of-child font-weight-bold">
                                      Gà Giòn Không Xương
                                      <span
                                        style={{

                                          marginLeft: '10px',
                                          color: '#088730',
                                          fontSize: '15px',
                                          fontWeight: 'bold'

                                        }}
                                      >x1</span>
                                    </p>
                                  </div>
                                </div>
                                <div class="item-child-detail">
                                  <span class="number-of-child">4</span>
                                  <div class="detail-content-child">
                                    <p class="name-of-child font-weight-bold">
                                      Mỳ Ý Cay Xúc Xích
                                      <span
                                        style={{

                                          marginLeft: '10px',
                                          color: '#088730',
                                          fontSize: '15px',
                                          fontWeight: 'bold'

                                        }}
                                      >x1</span>
                                    </p>
                                  </div>
                                </div>
                                <div class="item-child-detail">
                                  <span class="number-of-child">5</span>
                                  <div class="detail-content-child">
                                    <p class="name-of-child font-weight-bold">
                                      Pepsi Lon
                                      <span
                                        style={{

                                          marginLeft: '10px',
                                          color: '#088730',
                                          fontSize: '15px',
                                          fontWeight: 'bold'

                                        }}
                                      >x1</span>
                                    </p>
                                  </div>
                                </div>
                                <div class="item-child-detail">
                                  <span class="number-of-child">6</span>
                                  <div class="detail-content-child">
                                    <p class="name-of-child font-weight-bold">
                                      BộLyTPC
                                      <span
                                        style={{

                                          marginLeft: '10px',
                                          color: '#088730',
                                          fontSize: '15px',
                                          fontWeight: 'bold'

                                        }}
                                      >x1</span>
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div class="bottom">
                                <div style={{ color: 'rgb(132, 135, 136)' }}>
                                  Số lượng: 1
                                </div>
                                <div class="price" style={{ color: '#000' }}>
                                  <span>288.000đ</span>
                                </div>
                              </div>
                            </div>
                            <div
                              class="delete _flyout-cart-delete"
                              onclick="FlyOutCardDelete()"
                            >
                              <a
                                class="remove-item"
                                // href="javascript:;"
                                title="remove"
                              ><em
                                class="ri-delete-bin-fill"
                                onclick="updateTotalQuantity(1)"
                              ></em></a>
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
                          onclick="setLocation('/cart')"
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
    </header>
  )
}

export default Header