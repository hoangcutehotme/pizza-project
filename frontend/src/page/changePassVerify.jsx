import React, {useState} from "react";
import '../assets/styles/login.css'
import { useNavigate, useLocation } from "react-router-dom";
import { resetPass } from "../service/userService";
import Notify from "../Notify/Notify";
import { faL } from "@fortawesome/free-solid-svg-icons";
const ChangePassVerify = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [newPass, setNewPass] = useState(""); 
    const [confirm, setConfirm] = useState(""); 
    const [error, setError] = useState("");
    const [error1, setError1] = useState("");
    const [error2, setError2] = useState("");
    const email = location.state.email;
    const token = location.state.token;
    const [loadingAPI, setLoadingAPI] = useState(false)
    const [message, setMessage] = useState("")
    const [openNotify, setOpenNotify] = useState(false);
    const [navFunction, setNavFunction] = useState(null);
    const handleResetPass = async () => {
        setError("")
        let check = 1;
        if(newPass === "") {
            setError1("Mật khẩu là bắt buộc")
            check = 0;
        } else {
            setError1("");
        }

        if(confirm === "") {
            setError2("Xác nhận mật khẩu là bắt buộc")
            check = 0;
        } else {
            setError2("");
        }

        if(check) {
            if(newPass.trim() !== confirm.trim()) {
                setError("Mật khẩu và xác nhận mật khẩu không khớp");
            } else {
                setError("")
                // setLoadingAPI(true)
                try {
                    const resetPasswordData = {
                        token: token,
                        password: newPass,
                        passwordConfirm: confirm
                    };
                    console.log(email)
                    console.log(resetPasswordData)
                    const res = await resetPass(email, resetPasswordData)
                    console.log(res)
                    setMessage("Thay đổi mật khẩu thành công. Mời bạn đăng nhập  lại!");
                    setOpenNotify(true)
                    setNavFunction(handleNav);
                } catch (error) {
                    setMessage("Thay đổi mật khẩu thất bại!");
                    setNavFunction(null);
                    setOpenNotify(true)
                    console.log(error)
                }
                // setLoadingAPI(false)
            }
        }
    }
    const handleNav = () =>{
        navigate("/login")
    }

    return (
        <div class="master-wrapper-content container jCarousel-overflow-for-button-next-arrow" id="master-container" style={{ marginTop: '198px' }}>
            <div class="master-column-wrapper custom-master-column-wrapper-min-height" id="_master-column-wrapper-id">
                <div class="center-1">
                    <div class="page account-page change-password-page">
                        <div class="page-body">
                                <div class="fieldset">
                                    <div class="form-fields">
                                        <div class="inputs">
                                            <label for="NewPassword">Mật khẩu mới:</label>
                                            <input 
                                                type="password" 
                                                id="newPass" 
                                                name="newPass" 
                                                style={{marginBottom:'15px'}} 
                                                value={newPass} 
                                                onChange={(e) => setNewPass(e.target.value)}
                                                class={`${error1 !== '' ? 'input-validation-error' : ''}`}
                                            />
                                            <span class="required">*</span>
                                            {error1 && (
                                                <span style={{float:'none'}}
                                                    class="validate-required field-validation-error"
                                                >{error1}</span>
                                                )}
                                        </div>

                                        <div class="inputs">
                                            <label for="ConfirmNewPassword">Xác nhận mật khẩu:</label>
                                            <input 
                                                type="password" 
                                                id="confirm" 
                                                name="confirm" 
                                                style={{marginBottom:'15px'}} 
                                                value={confirm} 
                                                onChange={(e) => setConfirm(e.target.value)}
                                                class={`${error2 !== '' ? 'input-validation-error' : ''}`}
                                            />
                                            <span class="required" style={{top:'100px'}}>*</span>
                                            {error2 && (
                                                <span style={{float:'none'}}
                                                    class="validate-required field-validation-error"
                                                >{error2}</span>
                                                )}
                                {error && (
                                                <span style={{fontSize:'16px', float:'none'}}
                                                    class="validate-required field-validation-error"
                                                >{error}</span>
                                                )}
                                        </div>
                                    </div>
                                </div>
                                <div class="buttons" style={{ textAlign: 'center' }}>
                                    <input type="submit" class="button-1 change-password-button" value="Đổi mật khẩu" style={{marginTop:'15px'}} onClick={handleResetPass}/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            {openNotify && <Notify message={message} setOpenNotify={setOpenNotify} handleClose={navFunction}/>}
        </div>
    )
}

export default ChangePassVerify