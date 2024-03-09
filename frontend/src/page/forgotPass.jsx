import React, { useState } from "react";
import '../assets/styles/login.css'
import { useNavigate } from "react-router-dom";
import { forgotPass } from "../service/userService";
const ForgotPass = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email:''
    })
    const [error, setError] = useState("")
    const [error1, setError1] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        if(formData.email === "") {
            setError("Email bắt buộc nhập");
        } else {
            setError("");
            try {
                await forgotPass(formData);
                navigate("/verify", { state: { email: formData.email } });
            } catch (error) {
                setError1("Không tồn tại người dùng với địa chỉ email đã nhập!")
            }
        }
    }
    return (
        <div class="master-wrapper-content container jCarousel-overflow-for-button-next-arrow" id="master-container">
            <div class="master-column-wrapper custom-master-column-wrapper-min-height" id="_master-column-wrapper-id">
                <div class="center-1">
                    <div class="page password-recovery-page">
                        <div class="page-title" style={{padding:'0'}}>
                            <h1>Quên Mật Khẩu</h1>
                        </div>
                        <div class="page-body">
                                {/* <p class="tooltip">Vui lòng nhập số điện thoại của bạn dưới đây. Bạn sẽ nhận được mã OTP để đặt lại mật khẩu của mình.</p> */}
                                <div class="fieldset">
                                    <div class="form-fields">
                                        <div class="inputs">
                                            <label for="PhoneNumber">Email:</label>
                                            <input 
                                                class={`${error !== '' ? 'input-validation-error' : ''}`} 
                                                type="text" 
                                                id="email" 
                                                name="email" 
                                                placeholder="Nhập email đã đăng ký tài khoản tại đây ..."
                                                value={formData.email} 
                                                style={{marginBottom:'20px'}}  
                                                onChange={handleChange}   
                                            />
                                            <span class="required">*</span>
                                        </div>
                                    </div>
                                </div>
                                            {error && (
                                                <span style={{fontSize:'15px', marginBottom:'10px'}}
                                                    class="validate-required field-validation-error"
                                                >{error}</span>
                                                )}
                                {error1 && (
                                                <span style={{fontSize:'15px', marginBottom:'10px'}}
                                                    class="validate-required field-validation-error"
                                                >{error1}</span>
                                                )}
                                <div class="buttons" onClick={handleSubmit}>
                                    <input type="submit" name="send-email" class="button-1 password-recovery-button" value="Đổi Mật Khẩu" />
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPass