import React from "react";
import '../assets/styles/login.css'

const ChangePassVerify = () => {
    return (
        <div class="master-wrapper-content container jCarousel-overflow-for-button-next-arrow" id="master-container" style={{ marginTop: '198px' }}>
            <div class="master-column-wrapper custom-master-column-wrapper-min-height" id="_master-column-wrapper-id">
                <div class="center-1">
                    <div class="page account-page change-password-page">
                        <div class="page-body">
                            <form method="post" autocomplete="off" action="" novalidate="novalidate">

                                <div class="fieldset">
                                    <div class="form-fields">
                                        <div class="inputs">
                                            <label for="NewPassword">Mật khẩu mới:</label>
                                            <input onkeypress="ClearErrorMessageBySpanId('error-new-password')" type="password" data-val="true" data-val-regex="<p> Sai định dạng </p><ul><li>Phải chứa ít nhất  6 ký tự </li></ul>" data-val-regex-pattern="^.{6,}$" data-val-required="Mật khẩu bắt buộc nhập" id="NewPassword" name="NewPassword" style={{marginBottom:'15px'}}/>
                                            <span class="required">*</span>
                                            <span id="error-new-password" class="field-validation-valid" data-valmsg-for="NewPassword" data-valmsg-replace="true"></span>
                                        </div>

                                        <div class="inputs">
                                            <label for="ConfirmNewPassword">Xác nhận mật khẩu:</label>
                                            <input onkeypress="ClearErrorMessageBySpanId('error-confirm-new-password')" type="password" id="ConfirmNewPassword" name="ConfirmNewPassword" style={{marginBottom:'15px'}}/>
                                            <span class="required">*</span>
                                            <span id="error-confirm-new-password" class="field-validation-valid" data-valmsg-for="ConfirmNewPassword" data-valmsg-replace="true"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="buttons" style={{ textAlign: 'center' }}>
                                    <input type="submit" class="button-1 change-password-button" value="Đổi mật khẩu" style={{marginTop:'15px'}}/>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePassVerify