import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../../service/authContext";
import { useUser } from "../../service/userContext";
import './UserInfo.css'

const NavUserInfo = ({active, setActive}) => {
    const navigate = useNavigate()
    const { userName, setUserName } = useUser()
    const logout = useLogout()
    const handleLogout = () =>  {
        logout();
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/")
      }
    return (
        <div class="side-2">
            <div class="user-sidebar">
                <div class="head-box userinfo">
                    <p style={{ lineHeight: '20px', marginBottom: '5px', marginTop: '0px' }}>Tài khoản của</p>
                    <p class="user-name" style={{ marginBottom: '0px' }}>{userName}</p>
                </div>
                <div class="head-body user-sidelink">
                    <ul>
                        <li onClick={() => setActive("info")} className={`${active === 'info' ? 'active' : ''}`}>
                            <a class="router-tag-a" href="#" style={{ color: "inherit" }}>
                                Thông tin khách hàng
                            </a>
                        </li>
                        <li onClick={() => setActive("address")} className={`${active === 'address' ? 'active' : ''}`}>
                            <a class="router-tag-a" href="#" style={{ color: "inherit" }}>
                                Sổ địa chỉ
                            </a>
                        </li>
                        <li onClick={() => setActive("orderHistory")} className={`${active === 'orderHistory' ? 'active' : ''}`}>
                            <a class="router-tag-a" href="#" style={{ color: "inherit" }}>
                                Lịch sử mua hàng
                            </a>
                        </li>
                        <li onClick={() => setActive("changePass")} className={`${active === 'changePass' ? 'active' : ''}`}>
                            <a class="router-tag-a" href="#" style={{ color: "inherit" }}>
                                Đổi mật khẩu
                            </a>
                        </li>
                        <li onClick={handleLogout}>
                            <a class="router-tag-a" href="#" style={{ color: "inherit" }}>
                                Đăng xuất
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavUserInfo