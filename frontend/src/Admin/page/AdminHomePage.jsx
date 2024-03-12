import React, { useState } from 'react'
import './AdminHomePage.css'
import logo from "../assets/imgs/logoPizza.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import TableProduct from './Product/TableProduct'
import TestView from './text'
import { useNavigate } from "react-router-dom";
import { useLogout } from "../service/authContext";
import UserList from './ListUser/UserList'
import ListOrder from './ListOrder/ListOrder'

const AdminHomePage = () => {

    const [contentArea, setContentArea] = useState('update');

    // Function to handle menu item clicks
    const handleMenuItemClick = (area) => {
        setContentArea(area); // Update the content area state
    };

    const navigate = useNavigate();

    const logout = useLogout();

    const handleLogout = () => {
        logout();
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/")
    }

    return (
        <div>
            <div className='nav-admin'>
                <div className='left-nav-admin'>

                    <div className='logo'>
                        <img src={logo} alt="logo" />
                    </div>
                    <h3>Admin</h3>

                </div>
                <div className='right-nav-admin'>
                    <div className="btn-group btn-dropdown">
                        <button type="button" className="btn btn-dropdown dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                            <FontAwesomeIcon icon={faUser} />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-lg-end dropdown-menu-end">
                            <li><a className="dropdown-item right" onClick={handleLogout} >Đăng xuất</a></li>
                            <li><a className="dropdown-item right" href="#">Thông tin</a></li>
                        </ul>


                    </div>

                </div>
            </div>


            <div className="container-fluid" style={{ backgroundColor: 'whitesmoke' }} >
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 " style={{ height: '100vh', backgroundColor: 'whitesmoke' }}>
                        <div className="">

                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li className="nav-item">
                                    <a className="nav-link align-middle px-0 item" onClick={() => handleMenuItemClick('update')}>
                                        <span className="ms-1 d-none d-sm-inline text-black ">Cập nhật sản phẩm</span>
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link align-middle px-0 item" onClick={() => handleMenuItemClick('customers')}>
                                        <span className="ms-1 d-none d-sm-inline text-black ">Danh sách khách hàng</span>
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link align-middle px-0 item" onClick={() => handleMenuItemClick('orders')}>
                                        <span className="ms-1 d-none d-sm-inline text-black ">Đơn hàng</span>
                                    </a>
                                </li>

                            </ul>


                        </div>
                    </div>
                    <div className="col content">
                        {contentArea === 'update' && (
                            <TableProduct />
                        )}
                        {contentArea === 'customers' && (
                            <UserList />
                        )}
                        {contentArea === 'orders' && (
                            <ListOrder />
                        )}
                    </div>
                </div>
            </div>

        </div >
    )
}

export default AdminHomePage
