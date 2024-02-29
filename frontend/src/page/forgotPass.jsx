import React from "react";
import '../assets/styles/login.css'

const ForgotPass = () => {
    return (
        <div class="master-wrapper-content container jCarousel-overflow-for-button-next-arrow" id="master-container">
            <div class="master-column-wrapper custom-master-column-wrapper-min-height" id="_master-column-wrapper-id">
                <div class="center-1">
                    <div class="page password-recovery-page">
                        <div class="page-title" style={{padding:'0'}}>
                            <h1>Quên Mật Khẩu</h1>
                        </div>
                        <div class="page-body">
                            <form method="post" action="/verify" novalidate="novalidate">

                                {/* <p class="tooltip">Vui lòng nhập số điện thoại của bạn dưới đây. Bạn sẽ nhận được mã OTP để đặt lại mật khẩu của mình.</p> */}
                                <div class="fieldset">
                                    <div class="form-fields">
                                        <div class="inputs">
                                            <label for="PhoneNumber">Số điện thoại:</label>
                                            <input type="text" data-val="true" data-val-required="Số điện thoại bắt buộc nhập" id="PhoneNumber" name="PhoneNumber" value="" style={{marginBottom:'20px'}}/>
                                            <span class="required">*</span>
                                            <span class="field-validation-valid" data-valmsg-for="PhoneNumber" data-valmsg-replace="true"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="buttons">
                                    <input type="submit" name="send-email" class="button-1 password-recovery-button" value="Đổi Mật Khẩu" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPass