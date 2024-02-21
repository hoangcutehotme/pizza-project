import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const Info = () => {
    return(
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
                                                    style={{fontWeight: '500'}}
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
                                                    style={{fontWeight: '500'}}
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
                                                    style={{fontWeight: '500'}}
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
    )
}

export default Info