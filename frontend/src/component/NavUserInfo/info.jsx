import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const Info = () => {
    const [formData, setFormData] = useState({
        name : 'Huỳnh Bá Thuận',
        phoneNumber : '0707252330',
        email: 'thuan@gmail.com',
        address: '241 Mai Đăng Chơn, Ngũ Hành Sơn, Đà Nẵng'
    })
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value,
            });
        };
    const handleUpdate  = () =>  {
        console.log(formData)
    }
    return(
        <div class="center-2">
                    <div class="col-lg-12">
                        <h2 class="main-titles">Thông tin khách hàng</h2>
                        <div class="form-wrappers">
                            <div class="wrap-forms">
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-4 col-md-3 mobile-custom-no-padding">
                                                <label
                                                    id="custom-fullname"
                                                    style={{fontWeight: '500'}}
                                                    class="custom-label-info-customer"
                                                >Họ và tên<span class="asterisk-color span"
                                                ><span class="required">*</span></span>
                                                </label>
                                            </div>
                                            <div class="col-7 col-md-8">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    class="info-custom-input"
                                                    value={formData.name}
                                                    onChange={handleChange}
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
                                                    style={{fontWeight: '500'}}
                                                >Số điện thoại</label>
                                            </div>
                                            <div class="col-7 col-md-8">
                                                <input
                                                    type="text"
                                                    name="phoneNumber"
                                                    class="info-custom-input"
                                                    id="Username"
                                                    value={formData.phoneNumber}
                                                    onChange={handleChange}
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
                                                    style={{fontWeight: '500'}}
                                                >E-mail</label>
                                            </div>
                                            <div class="col-7 col-md-8">
                                                <input
                                                    type="text"
                                                    name="email"
                                                    class="info-custom-input"
                                                    value={formData.email}
                                                    disabled="disabled"
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
                                            <div class="col-4 col-md-3 mobile-custom-no-padding">
                                                <label
                                                    id="custom-email"
                                                    class="custom-label-info-customer"
                                                    style={{fontWeight: '500'}}
                                                >Địa chỉ</label>
                                            </div>
                                            <div class="col-7 col-md-8">
                                                <input
                                                    type="text"
                                                    name="address"
                                                    class="info-custom-input"
                                                    value={formData.address}
                                                    onChange={handleChange}
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
                                                    onClick={handleUpdate}
                                                >
                                                    <em id="pencil-custom"><FontAwesomeIcon icon={faPen}/></em>Cập
                                                    nhật
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Info