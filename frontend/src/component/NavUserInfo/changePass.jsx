import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const ChangePass = () => {
    return (
        <div class="center-2">
            <div class="col-lg-12">
                <h2 class="main-titles">Đổi mật khẩu</h2>
                <div class="form-wrappers">
                    <div class="wrap-forms">
                        <form
                            method="post"
                            enctype="multipart/form-data"
                            action="/customer/info"
                        >
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-4 col-md-3 mobile-custom-no-padding">
                                        <label
                                            id="custom-fullname"
                                            style={{ fontWeight: '500' }}
                                            class="custom-label-info-customer"
                                        >Mật khẩu cũ<span class="asterisk-color span"
                                        ><span class="required">*</span></span>
                                        </label>
                                    </div>
                                    <div class="col-7 col-md-8">
                                        <input
                                            type="password"
                                            name="oldPass"
                                            class="info-custom-input"
                                            id="oldPass"
                                        />
                                        <span
                                            class="validate-required field-validation-valid"
                                        ></span>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="row">
                                    <div class="col-4 col-md-3 mobile-custom-no-padding">
                                        <label
                                            id="custom-newPass"
                                            style={{ fontWeight: '500' }}
                                            class="custom-label-info-customer"
                                        >Mật khẩu mới<span class="asterisk-color span"
                                        ><span class="required">*</span></span>
                                        </label>
                                    </div>
                                    <div class="col-7 col-md-8">
                                        <input
                                            type="password"
                                            name="newPass"
                                            class="info-custom-input"
                                            id="newPass"
                                        />
                                        <span
                                            class="validate-required field-validation-valid"
                                        ></span>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="row">
                                    <div class="col-4 col-md-3 mobile-custom-no-padding">
                                        <label
                                            id="custom-confirmPass"
                                            style={{ fontWeight: '500' }}
                                            class="custom-label-info-customer"
                                        >Xác nhận mật khẩu mới<span class="asterisk-color span"
                                        ><span class="required">*</span></span>
                                        </label>
                                    </div>
                                    <div class="col-7 col-md-8">
                                        <input
                                            type="password"
                                            name="confirmPass"
                                            class="info-custom-input"
                                            id="confirmPass"
                                        />
                                        <span
                                            class="validate-required field-validation-valid"
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
                                            <em id="pencil-custom"><FontAwesomeIcon icon={faPen} /></em>Cập
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

export default ChangePass