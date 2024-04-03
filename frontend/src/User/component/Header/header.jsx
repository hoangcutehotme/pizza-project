import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import logo from "../../assets/imgs/logoPizza.png"
import "../../assets/styles/1024.css"
import "./header.css"
import "../../assets/styles/Custom.css"
import Cart from "./cart";
import { useAuth, useLogout } from "../../service/authContext";
import { useUser } from "../../service/userContext";

const Header = ({ cartItems, removeToCart, deleteToCart }) => {
  console.log(cartItems)

  const navigate = useNavigate()

  const handleNav = (nav) => {
    navigate(`/${nav}`);
  };

  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const logout = useLogout();
  const handleLogout = () => {
    logout();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/")
  }
  const { userName, setUserName } = useUser();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = localStorage.getItem('user');
      setIsLoggedIn(true)
      const userData = (JSON.parse(user));
      setUserName(`${userData.lastName} ${userData.firstName}`)
    }
  }, [])


  return (
    <header id="_main-header" className="" style={{ paddingBottom: "20px" }}>
      <div className="container">
        <div className="top-wrap">
          <div className="left-wrap">
            <div className="">
              <a className="" style={{ textDecoration: 'none' }}>
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
          {/* <div className="mid-wrap">
            <div className="form-group" style={{ width: '300px' }}>
              <div className="form-select div-autocomplete" id="select-address" style={{ borderColor: 'grey' }}>
                <label>
                  <em>
                    <FontAwesomeIcon icon={faSearch} />
                  </em>
                </label>
                <span
                  tabindex="-1"
                  role="presentation"
                  className="k-widget k-autocomplete input-autocomplete k-autocomplete-clearable k-state-default"
                ><input
                    id="autocomplete-address"
                    className="input-autocomplete k-input"
                    placeholder="Tìm kiếm món ăn"
                    autocomplete="off"
                  />
                  <span
                    unselectable="on"
                    className="k-icon k-clear-value k-i-close"
                    title="clear"
                    role="button"
                    tabindex="-1"
                  ></span>
                  <span className="k-icon k-i-loading" style={{ display: "none" }}></span>
                </span>
              </div>
            </div>
          </div> */}
          <div className="right-wrap">
            <div className="account">
              <div href="/customer/info" className="icon">
                <em> <FontAwesomeIcon icon={faCircleUser} /></em>
              </div>
              {isLoggedIn ? (
                <div>
                  <a href="/user/Info" className="opener" id="a-custom-id" style={{ color: 'black' }}>{userName}</a>
                  <div className="profile-menu-box">
                    <a className="menu-link" style={{ cursor: 'pointer' }} onClick={() => handleNav("user/Info")}><FontAwesomeIcon icon={faCircleUser} style={{ marginRight: '10px' }} /> Tài khoản</a>
                    <a className="menu-link" style={{ cursor: 'pointer' }} onClick={handleLogout}><FontAwesomeIcon icon={faArrowRightFromBracket} style={{ marginRight: '10px' }} />Đăng xuất</a>
                  </div>
                </div>
              ) : (
                <div className="login-and-register">
                  <a onClick={() => handleNav("login")} className="register" style={{ textDecoration: 'none' }}>Đăng nhập</a>
                  <span>/</span>
                  <a onClick={() => handleNav("signup")} className="login" style={{ textDecoration: 'none' }}
                  >Tạo tài khoản</a>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="bottom-wrap">
          <div className="left-wrap">
            <ul
              className="main-menu mega-menu"
              data-isrtlenabled="false"
              data-enableclickfordropdown="false"
            >
              <li className="">
                <a href="/" className="" key="Trang chủ"
                ><span> Trang chủ </span></a>
              </li>
              <li className=" ">
                <a href="/pizza" className=""
                ><span> Pizza </span></a>
              </li>
            </ul>
          </div>
          <div className="right-wrap">
            <div className="mobile-flyout-wrapper">
              <div className="cart custom-cart" id="topcartlink">
                <div className="icon">
                  <a>
                    <em><FontAwesomeIcon icon={faCartShopping} style={{ fontSize: '18px' }} /></em>
                  </a>
                </div>

                <p style={{ marginTop: '0px', marginBottom: '0px', marginLeft: '5px' }}>
                  <a style={{ textDecoration: 'none', color: '#006a31' }}> Giỏ hàng </a>
                </p>

                <div className="amount">
                  <span className="cart-qty" id="_TotalProducts"> {cartItems.length} </span>
                </div>

                <div
                  id="flyout-cart"
                  className="flyout-cart"
                  data-removeitemfromcarturl="/EmporiumTheme/RemoveItemFromCart"
                  data-flyoutcarturl="/EmporiumTheme/FlyoutShoppingCart"

                >
                  <Cart cartItems={cartItems} removeToCart={deleteToCart} />
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