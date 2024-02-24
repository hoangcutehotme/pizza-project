import React from "react";
import '../assets/styles/login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
    return (
        // <div class="master-wrapper-content container jCarousel-overflow-for-button-next-arrow" id="master-container" style="margin-top: 198px">
            <div class="master-column-wrapper custom-master-column-wrapper-min-height" id="_master-column-wrapper-id">
                <div class="center-1">


                    <div>

                        <div class="page-body">
                            <section class="the-pizza-dangky main-section">
                                <div class="container">
                                    <div class="form-wrapper">
                                        <h2 class="main-title line-2">Tạo tài khoản</h2>
                                        <form method="post" autocomplete="off" action="/register?returnurl=%2F" novalidate="novalidate">
                                            <div class="wrap-form">
                                                <div class="form-group">
                                                    <label>
                                                        Họ và Tên                                             <span class="required">*</span>
                                                    </label>
                                                    <input type="text" data-val="true" data-val-required="Tên bắt buộc nhập" id="FirstName" name="FirstName" value=""/>
                                                        <span class="field-validation-valid" data-valmsg-for="FirstName" data-valmsg-replace="true"></span>
                                                </div>
                                                <div class="form-group">
                                                    <label id="Username">Số điện thoại<span class="required">*</span></label>
                                                    <input type="text" data-val="true" data-val-required="Số điện thoại bắt buộc nhập" id="Username" name="Username" value=""/>
                                                        <span class="field-validation-valid" data-valmsg-for="Username" data-valmsg-replace="true"></span>




                                                </div>

                                                <div class="form-group">
                                                    <label>E-mail</label>
                                                    <input type="text" id="Email" name="Email" value=""/>
                                                        <span class="field-validation-valid" data-valmsg-for="Email" data-valmsg-replace="true"></span>
                                                </div>



                                                <div class="form-group">
                                                    <label>Mật khẩu<span class="required">*</span></label>
                                                    <input type="password" data-val="true" data-val-regex="<p> Sai định dạng </p><ul><li>Phải chứa ít nhất  6 ký tự </li></ul>" data-val-regex-pattern="^.{6,}$" data-val-required="Mật khẩu bắt buộc nhập" id="Password" name="Password"/>
                                                        <span class="field-validation-valid" data-valmsg-for="Password" data-valmsg-replace="true"></span>
                                                </div>
                                                <div class="form-group">
                                                    <label>Xác nhận mật khẩu<span class="required">*</span></label>
                                                    <input type="password" data-val="true" data-val-equalto="Mật khẩu và mật khẩu xác nhận không khớp." data-val-equalto-other="*.Password" data-val-required="Mật khẩu bắt buộc nhập" id="ConfirmPassword" name="ConfirmPassword"/>
                                                        <span class="field-validation-valid" data-valmsg-for="ConfirmPassword" data-valmsg-replace="true"></span>
                                                </div>

                                                <div class="form-group form-accept">
                                                    <div class="checked">
                                                        <input type="checkbox" data-val="true" data-val-required="The AcceptPrivacyPolicy field is required." id="AcceptPrivacyPolicy" name="AcceptPrivacyPolicy" value="true"/>
                                                            <label for="AcceptPrivacyPolicy" id="label-AcceptPrivacyPolicy-custom">Khách hàng đồng ý cung cấp Thông Tin Cá Nhân và cho phép Pizza Home sử dụng Thông Tin Cá Nhân phù hợp với Chính sách bảo mật này.</label>
                                                            <a style={{marginLeft: '5px', fontSize: '15px', color: '#97c300', cursor: 'pointer', clear: 'none', transition: 'all .1s ease'}} class="read" id="read-privacyinfo" href="#">(đọc)</a>

                                                    </div>
                                                    <span class="field-validation-valid" data-valmsg-for="AcceptPrivacyPolicy" data-valmsg-replace="true"></span>
                                                </div>
                                                <div class="form-group form-submit">
                                                    <button type="submit" id="register-button" class="btn-creat-acc" name="register-button">
                                                        Đăng Ký<em class="mdi mdi-arrow-right"><FontAwesomeIcon icon={faArrowRight}/></em>
                                                    </button>
                                                </div>
                                            </div>
                                            </form>
                                            </div>
                                    </div>
                            </section>
                        </div>
                    </div>

                </div>

            </div>
    )
}

export default Register