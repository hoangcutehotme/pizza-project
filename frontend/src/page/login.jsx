import React from "react";
import '../assets/styles/login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Login = () => {
    return (
        <div class="master-column-wrapper custom-master-column-wrapper-min-height" id="_master-column-wrapper-id" style={{minHeight: '2px'}}>
            <div class="center-1">
                <div>

                    <div class="page-body">
                        <section class="main-section" id="main-section-id">
                            <div class="container">
                                <div class="form-wrapper">
                                    <h2 class="main-title line-2">Đăng nhập</h2>
                                    <form method="post" autocomplete="off" action="" novalidate="novalidate">
                                        <div class="wrap-form">

                                            <div class="form-group">
                                                <label for="Username">Số điện thoại<span class="required">*</span></label>
                                                <input class="username" autofocus="autofocus" placeholder="Nhập số điện thoại của bạn tại đây" type="text" data-val="true" data-val-required="Số điện thoại bắt buộc nhập" id="Username" name="Username" value="" />
                                                {/* <span class="field-validation-valid" data-valmsg-for="Username" data-valmsg-replace="true">hahahaha</span> */}
                                                {/* <input type="text" className="input-validation-error"/> */}
                                            </div>

                                            <div class="form-group">
                                                <label for="Password">Mật khẩu<span class="required">*</span></label>
                                                <input placeholder="Nhập mật khẩu của bạn tại đây" class="password" type="password" id="Password" name="Password" />
                                                <span class="field-validation-valid" data-valmsg-for="Password" data-valmsg-replace="true"></span>
                                            </div>
                                            <div class="form-group">
                                                <a class="forgot-pass" href="/forgotPass">Quên mật khẩu</a>
                                                <p>Bạn đã có tài khoản chưa? <a class="forgot-pass" href="/signup">Tạo tài khoản</a></p>
                                            </div>
                                            <div class="form-group form-submit">
                                                <button class="btn-creat-acc" type="submit" name="buttonCheckoutLogin" id="btn-login">
                                                    Đăng nhập<em class="mdi mdi-arrow-right"><FontAwesomeIcon icon={faArrowRight}/></em>
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

export default Login