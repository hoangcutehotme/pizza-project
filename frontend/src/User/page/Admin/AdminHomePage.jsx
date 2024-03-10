import React from 'react'
import './AdminHomePage.css'
import logo from "../../assets/imgs/logoPizza.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Category from './page/Product/TableProduct'
import UserList from './page/ListUser/UserList'
import ContainerFluidBreakpointExample from './page/updateProductScreen'
import TableProduct from './page/Product/TableProduct'

const AdminHomePage = () => {

    const [contentArea, setContentArea] = useState('update');

    // Function to handle menu item clicks
    const handleMenuItemClick = (area) => {
        setContentArea(area); // Update the content area state
    };

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
                            <li><a className="dropdown-item right" href="#">Đăng xuất</a></li>
                            <li><a className="dropdown-item right" href="#">Thông tin</a></li>
                        </ul>


                    </div>

                </div>
            </div>


            <div className="container-fluid" style={{ backgroundColor: 'whitesmoke' }} >
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 " style={{ height: '100vh', backgroundColor: 'whitesmoke' }}>
                        <div className="">
                            <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-black text-decoration-none" onClick={() => handleMenuItemClick('home')}>
                                <h3 className="">Menu</h3>
                            </a>
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li className="nav-item">
                                    <a href="#" className="nav-link align-middle px-0 item" onClick={() => handleMenuItemClick('update')}>
                                        <span className="ms-1 d-none d-sm-inline text-black ">Cập nhật sản phẩm</span>
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a href="#" className="nav-link align-middle px-0 item" onClick={() => handleMenuItemClick('customers')}>
                                        <span className="ms-1 d-none d-sm-inline text-black ">Danh sách khách hàng</span>
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
                            <ContainerFluidBreakpointExample />
                        )}
                    </div>
                </div>
            </div>









        </div >
    )
}

export default AdminHomePage
