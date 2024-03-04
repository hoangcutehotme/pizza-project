import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import logo from "../../assets/imgs/logoPizza.png"
import "../../assets/styles/1024.css"
import "./header.css"
import "../../assets/styles/Custom.css"
// import CartItem from "../Items/cartItem";
import Cart from "./cart";
import { useAuth, useLogout } from "../../service/authContext";
import { useUser } from "../../service/userContext";
const Header = () => {
  const navigate = useNavigate()

  const handleNav = (nav) => {
    navigate(`/${nav}`);
  };

  const { isLoggedIn } = useAuth();
  const logout = useLogout();
  const handleLogout = () => {
    logout();
    localStorage.removeItem("token");
    navigate("/")
  }

  const { cart, setCart } = useUser();

  return (
    <header id="_main-header" class="" style={{ paddingBottom: "20px" }}>
      <div class="container">
        <div class="top-wrap">
          <div class="left-wrap">
            <div class="logo">
              <a class="logo" style={{ textDecoration: 'none' }}>
                <img
                  alt="The Pizza Home"
                  title="The Pizza Company"
                  src={logo}
                  style={{ width: '100px', height: '90px', cursor: 'pointer' }}
                  onClick={() => handleNav("")}
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
              {isLoggedIn ? (
                <div>
                  <a href="/user/Info" class="opener" id="a-custom-id" style={{ color: 'black' }}>Huỳnh Thuận</a>
                  <div class="profile-menu-box">
                    <div class="close-side-menu" style={{ display: 'none' }}>
                      <span class="close-side-menu-text">0707252330</span>
                      <span class="close-side-menu-btn">Close</span>
                    </div>
                    <a className="menu-link" style={{ cursor: 'pointer' }} onClick={() => handleNav("user/Info")}><FontAwesomeIcon icon={faCircleUser} style={{ marginRight: '10px' }} /> Tài khoản</a>
                    <a className="menu-link" style={{ cursor: 'pointer' }} onClick={handleLogout}><FontAwesomeIcon icon={faArrowRightFromBracket} style={{ marginRight: '10px' }} />Đăng xuất</a>
                  </div>
                </div>
              ) : (
                <div class="login-and-register">
                  <a onClick={() => handleNav("login")} class="register" style={{ textDecoration: 'none' }}>Đăng nhập</a>
                  <span>/</span>
                  <a onClick={() => handleNav("signup")} class="login" style={{ textDecoration: 'none' }}
                  >Tạo tài khoản</a>
                </div>
              )}
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
              <li className="">
                <a href="/landingPage" class="" key="Trang chủ"
                ><span> Trang chủ </span></a>
              </li>
              <li class=" ">
                <a href="/pizza" class=""
                ><span> Pizza </span></a>
              </li>
            </ul>
          </div>
          <div class="right-wrap">
            <div class="mobile-flyout-wrapper">
              <div class="cart custom-cart" id="topcartlink">
                <div class="icon">
                  <a>
                    <em><FontAwesomeIcon icon={faCartShopping} style={{ fontSize: '18px' }} /></em>
                  </a>
                </div>

                <p style={{ marginTop: '0px', marginBottom: '0px', marginLeft: '5px' }}>
                  <a style={{ textDecoration: 'none', color: '#006a31' }}> Giỏ hàng </a>
                </p>

                <div class="amount">
                  <span class="cart-qty" id="_TotalProducts"> {cart.length} </span>
                </div>

                <div
                  id="flyout-cart"
                  class="flyout-cart"
                  data-removeitemfromcarturl="/EmporiumTheme/RemoveItemFromCart"
                  data-flyoutcarturl="/EmporiumTheme/FlyoutShoppingCart"
                >
                  <Cart cart={cart} setCart={setCart}/>
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