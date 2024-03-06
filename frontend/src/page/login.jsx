import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import '../assets/styles/login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { loginAPI } from "../service/userService";
import { useAuth } from "../service/authContext";
const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [error1, setError1] = useState("");
    const [error2, setError2] = useState("");
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const {isLoggedIn, setIsLoggedIn}  = useAuth();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit  = () =>  {
        if(formData.email === '') {
            setError('Bạn chưa nhập email');
        } else {
            setError('')
        }
        if(formData.password === '') {
            setError1('Bạn chưa nhập password');
        } else {
            setError1('')
        }
        if(formData.email !== '' && formData.password !== '') {
            if(loginAPI(formData.email, formData.password)) {
                localStorage.setItem("token", "login")
                navigate("/user/Info");
                setIsLoggedIn(true)
                console.log(isLoggedIn)
            }
            else {
                setError2("Tên đăng nhập hoặc mật khẩu không đúng");
            }
        }
    }
    return (
        <div class="master-column-wrapper custom-master-column-wrapper-min-height" id="_master-column-wrapper-id" style={{minHeight: '2px'}}>
            <div class="center-1">
                <div>

                    <div class="page-body">
                        <section class="main-section" id="main-section-id">
                            <div class="container">
                                <div class="form-wrapper">
                                    <h2 class="main-title line-2">Đăng nhập</h2>
                                        <div class="wrap-form">

                                            <div class="form-group">
                                                <label for="Email">Email<span class="required">*</span></label>
                                                <input 
                                                    class={`email ${error !== '' ? 'input-validation-error' : ''}`} 
                                                    autofocus="autofocus" 
                                                    placeholder="Nhập email của bạn tại đây" 
                                                    type="email"  
                                                    name="email" 
                                                    value={formData.email} 
                                                    onChange={handleChange}
                                                />
                                                {error && (
                                                <span
                                                    class="validate-required field-validation-error"
                                                >{error}</span>
                                                )}
                                                {/* <input type="text" className="input-validation-error"/> */}
                                            </div>

                                            <div class="form-group">
                                                <label for="Password">Mật khẩu<span class="required">*</span></label>
                                                <input 
                                                    placeholder="Nhập mật khẩu của bạn tại đây" 
                                                    class={`password ${error1 !== '' ? 'input-validation-error' : ''}`}
                                                    type="password" 
                                                    id="Password" name="password" 
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                />
                                                {error1 && (
                                                <span
                                                    class="validate-required field-validation-error"
                                                >{error1}</span>
                                                )}
                                            </div>
                                            {error2 && (
                                                <span style={{fontSize:'15px'}}
                                                    class="validate-required field-validation-error"
                                                >{error2}</span>
                                                )}
                                            <div class="form-group">
                                                <a class="forgot-pass" href="/forgotPass">Quên mật khẩu</a>
                                                <p>Bạn đã có tài khoản chưa? <a class="forgot-pass" href="/signup">Tạo tài khoản</a></p>
                                            </div>
                                            <div class="form-group form-submit">
                                                <button class="btn-creat-acc" type="submit" name="buttonCheckoutLogin" id="btn-login" onClick={handleSubmit}>
                                                    Đăng nhập<em class="mdi mdi-arrow-right"><FontAwesomeIcon icon={faArrowRight}/></em>
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
    )
}

export default Login