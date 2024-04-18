import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../assets/styles/login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { signupUser } from "../service/userService";
import Notify from "../Notify/Notify";
const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [error1, setError1] = useState("");
    const [error2, setError2] = useState("");
    const [error3, setError3] = useState("");
    const [error4, setError4] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        address: '',
        passwordConfirm: '',
        password: ''
    })
    const [message, setMessage] = useState("");
    const [openNotify, setOpenNotify] = useState(false);
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

    const handleSubmit = async () => {
        let check = 1;
        if (formData.firstName === '') {
            setError('Tên là bắt buộc');
            check = 0;
        } else {
            setError('')
        }

        if (formData.email === '') {
            check = 0;
            setError1('Email là bắt buộc');
        } else {
            setError1('')
        }

        if (formData.password === '') {
            check = 0;
            setError2('Mật khẩu là bắt buộc');
        } else {
            setError2('')
        }

        if (formData.passwordConfirm === '') {
            check = 0;
            setError3('Xác nhận mật khẩu là bắt buộc');
        } else {
            setError3('')
        }

        if (formData.password !== formData.passwordConfirm) {
            check = 0;
            setError4('Mât khẩu và xác nhận mật khẩu không khớp');
        } else {
            setError4('')
        }
        
        if (check) {
            if (!isChecked) {
                window.alert("Vui lòng chấp nhận chính sách bảo mật")
            }  else {
                console.log(formData)
                try {
                    await signupUser(formData);
                    setMessage("Đăng kí tài khoản thành công!")
                    setOpenNotify(true)
                } catch (error) {
                    setError4("Email đã tồn tại! Mời bạn sử dụng email khác để thử lại!")
                }
            }
        }
    }

    const handleNavLogin = () => {
        navigate("/login")
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
                                                <label>Tên<span class="required">*</span></label>
                                                <input type="text"
                                                    class={`name ${error !== '' ? 'input-validation-error' : ''}`}
                                                    id="firstName"
                                                    name="firstName"
                                                    placeholder="Nhập tên của bạn tại đây"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                />
                                                {error && (
                                                    <span
                                                        class="validate-required field-validation-error"
                                                    >{error}</span>
                                                )}
                                            </div>

                                            <div class="form-group">
                                                <label>Họ</label>
                                                <input type="text"
                                                    id="lastName"
                                                    name="lastName"
                                                    placeholder="Nhập họ của bạn tại đây"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                />
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

                                            <div class="form-group" style={{textAlign:'center'}}>
                                                {error4 && (
                                                    <span
                                                    style={{fontSize:'16px'}}
                                                        class="validate-required field-validation-error"
                                                    >{error4}</span>
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
            {openNotify && (<Notify message={message} setOpenNotify={setOpenNotify} handleClose={handleNavLogin}/>)}
        </div>
    )
}

export default Register