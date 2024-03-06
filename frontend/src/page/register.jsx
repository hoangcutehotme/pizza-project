import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../assets/styles/login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [error1, setError1] = useState("");
    const [error2, setError2] = useState("");
    const [error3, setError3] = useState("");
    const [error4, setError4] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        address: '',
        passwordConfirm: '',
        password: ''
    })
    const checked = () => {
        setIsChecked(!isChecked)
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        if (formData.name === '') {
            setError('Bạn chưa nhập họ và tên');
        } else {
            setError('')
        }

        if (formData.email === '') {
            setError1('Bạn chưa nhập email');
        } else {
            setError1('')
        }

        if (formData.password === '') {
            setError2('Bạn chưa nhập mật khẩu');
        } else {
            setError2('')
        }

        if (formData.passwordConfirm === '') {
            setError3('Bạn chưa nhập xác nhận mật khẩu');
        } else {
            setError3('')
        }
        
        if (formData.name !== '' && formData.email !== '' && formData.password !== '' && formData.passwordConfirm !== '') {
            if (!isChecked) {
                window.alert("Vui lòng chấp nhận chính sách bảo mật")
            }  else {
                console.log(formData)
            }
        }
    }
    return (
        <div>

            <div class="master-column-wrapper custom-master-column-wrapper-min-height" id="_master-column-wrapper-id">
                <div class="center-1">


                    <div>

                        <div class="page-body">
                            <section class="the-pizza-dangky main-section">
                                <div class="container">
                                    <div class="form-wrapper">
                                        <h2 class="main-title line-2">Tạo tài khoản</h2>
                                        <div class="wrap-form">
                                            <div class="form-group">
                                                <label>Họ và Tên<span class="required">*</span></label>
                                                <input type="text"
                                                    class={`name ${error !== '' ? 'input-validation-error' : ''}`}
                                                    id="name"
                                                    name="name"
                                                    placeholder="Nhập họ và tên của bạn tại đây"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                                {error && (
                                                    <span
                                                        class="validate-required field-validation-error"
                                                    >{error}</span>
                                                )}
                                            </div>
                                            <div class="form-group">
                                                <label id="Username">Số điện thoại</label>
                                                <input
                                                    type="text"
                                                    id="phoneNumber"
                                                    name="phoneNumber"
                                                    value={formData.phoneNumber}
                                                    placeholder="Nhập số điện thoại của bạn tại đây"
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div class="form-group">
                                                <label>E-mail<span class="required">*</span></label>
                                                <input
                                                    class={`email ${error1 !== '' ? 'input-validation-error' : ''}`}
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    placeholder="Nhập email của bạn tại đây"
                                                    onChange={handleChange}
                                                />
                                                {error1 && (
                                                    <span
                                                        class="validate-required field-validation-error"
                                                    >{error1}</span>
                                                )}
                                            </div>

                                            <div class="form-group">
                                                <label>Địa chỉ</label>
                                                <input type="text"
                                                    id="address"
                                                    name="address"
                                                    value={formData.address}
                                                    placeholder="Nhập địa chỉ của bạn tại đây"
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div class="form-group">
                                                <label>Mật khẩu<span class="required">*</span></label>
                                                <input
                                                    class={`password ${error2 !== '' ? 'input-validation-error' : ''}`}
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    value={formData.password}
                                                    placeholder="Nhập mật khẩu của bạn tại đây"
                                                    onChange={handleChange}
                                                />
                                                {error2 && (
                                                    <span
                                                        class="validate-required field-validation-error"
                                                    >{error2}</span>
                                                )}
                                            </div>

                                            <div class="form-group">
                                                <label>Xác nhận mật khẩu<span class="required">*</span></label>
                                                <input
                                                    class={`passwordConfirm ${error3 !== '' ? 'input-validation-error' : ''}`}
                                                    type="password"
                                                    id="passwordConfirm"
                                                    name="passwordConfirm"
                                                    value={formData.passwordConfirm}
                                                    placeholder="Nhập xác nhận mật khẩu của bạn tại đây"
                                                    onChange={handleChange}
                                                />
                                                {error3 && (
                                                    <span
                                                        class="validate-required field-validation-error"
                                                    >{error3}</span>
                                                )}
                                            </div>

                                            <div class="form-group form-accept">
                                                <div class="checked">
                                                    <input type="checkbox" data-val="true" data-val-required="The AcceptPrivacyPolicy field is required." id="AcceptPrivacyPolicy" name="AcceptPrivacyPolicy" value="true" onClick={checked} />
                                                    <label for="AcceptPrivacyPolicy" id="label-AcceptPrivacyPolicy-custom">Khách hàng đồng ý cung cấp Thông Tin Cá Nhân và cho phép Pizza Home sử dụng Thông Tin Cá Nhân phù hợp với Chính sách bảo mật này.</label>
                                                    <a style={{ marginLeft: '5px', fontSize: '15px', color: '#97c300', cursor: 'pointer', clear: 'none', transition: 'all .1s ease' }} class="read" id="read-privacyinfo" href="#">(đọc)</a>

                                                </div>
                                                <span class="field-validation-valid" data-valmsg-for="AcceptPrivacyPolicy" data-valmsg-replace="true"></span>
                                            </div>
                                            <div class="form-group form-submit">
                                                <button onClick={handleSubmit} id="register-button" class="btn-creat-acc" name="register-button">
                                                    Đăng Ký<em class="mdi mdi-arrow-right"><FontAwesomeIcon icon={faArrowRight} /></em>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Register