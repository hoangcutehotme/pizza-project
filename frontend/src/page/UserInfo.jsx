import React from "react";
import './UserInfo.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const UserInfo = () => {
    return (
        <div class="master-wrapper-content container jCarousel-overflow-for-button-next-arrow" id="master-container">
            <div
                class="master-column-wrapper custom-master-column-wrapper-min-height"
                id="_master-column-wrapper-id"
                style={{ minHeight: '2px' }}
            >
                <div class="side-2">
                    <div class="user-sidebar">
                        <div class="head-box userinfo">
                            <p style={{ lineHeight: '20px', marginBottom: '5px', marginTop: '0px' }}>Tài khoản của</p>
                            <p class="user-name" style={{ marginBottom: '0px' }}>Huỳnh Thuận</p>
                        </div>
                        <div class="head-body user-sidelink">
                            <ul>
                                <li className="active">
                                    <a class="router-tag-a" href="/" style={{ color: "inherit" }}>
                                        Thông tin khách hàng
                                    </a>
                                </li>
                                <li>
                                    <a class="router-tag-a" href="/" style={{ color: "inherit" }}>
                                        Sổ địa chỉ
                                    </a>
                                </li>
                                <li>
                                    <a class="router-tag-a" href="/" style={{ color: "inherit" }}>
                                        Lịch sử mua hàng
                                    </a>
                                </li>
                                <li>
                                    <a class="router-tag-a" href="/" style={{ color: "inherit" }}>
                                        Đổi mật khẩu
                                    </a>
                                </li>
                                <li>
                                    <a class="router-tag-a" href="/" style={{ color: "inherit" }}>
                                        Đăng xuất
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="center-2">
                    <div class="col-lg-12">
                        <h2 class="main-titles">Thông tin khách hàng</h2>
                        <div class="form-wrappers">
                            <div class="wrap-forms">
                                <form
                                    method="post"
                                    enctype="multipart/form-data"
                                    action="/customer/info"
                                    novalidate="novalidate"
                                >
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-4 col-md-3 mobile-custom-no-padding">
                                                <label
                                                    id="custom-fullname"
                                                    style={{fontWeight: '700'}}
                                                    class="custom-label-info-customer"
                                                >Họ và tên<span class="asterisk-color span"
                                                ><span class="required">*</span></span>
                                                </label>
                                            </div>
                                            <div class="col-7 col-md-8">
                                                <input
                                                    type="text"
                                                    name="FirstName"
                                                    class="info-custom-input"
                                                    data-val="true"
                                                    data-val-required="Tên bắt buộc nhập"
                                                    id="FirstName"
                                                    value="Huỳnh Thuận"
                                                />
                                                <span
                                                    class="validate-required field-validation-valid"
                                                    data-valmsg-for="FirstName"
                                                    data-valmsg-replace="true"
                                                ></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-4 col-md-3 mobile-custom-no-padding">
                                                <label
                                                    id="custom-username"
                                                    class="custom-label-info-customer"
                                                    style={{fontWeight: '700'}}
                                                    for="Username"
                                                >Số điện thoại</label>
                                            </div>
                                            <div class="col-7 col-md-8">
                                                <input
                                                    type="text"
                                                    name=""
                                                    disabled="disabled"
                                                    class="info-custom-input"
                                                    id="Username"
                                                    value="0707252330"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-4 col-md-3 mobile-custom-no-padding">
                                                <label
                                                    id="custom-email"
                                                    class="custom-label-info-customer"
                                                    style={{fontWeight: '700'}}
                                                >E-mail</label>
                                            </div>
                                            <div class="col-7 col-md-8">
                                                <input
                                                    type="text"
                                                    name="Email"
                                                    class="info-custom-input"
                                                    data-val="true"
                                                    data-val-email="Email không hợp lệ"
                                                    id="Email"
                                                    value="huynhbathuan2672002@gmail.com"
                                                />
                                                <span
                                                    class="validate-required field-validation-valid"
                                                    data-valmsg-for="Email"
                                                    data-valmsg-replace="true"
                                                ></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-3"></div>
                                            <div class="col-md-8">
                                                <button
                                                    class="btn-creat-acc btn-creat-acc-custom"
                                                    id="btn-create"
                                                    type="submit"
                                                >
                                                    <em id="pencil-custom"><FontAwesomeIcon icon={faPen}/></em>Cập
                                                    nhật
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfo