import React, {useState} from "react";
import '../assets/styles/login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import { verifyEmail } from "../service/userService";
const Verify = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState("");
    const [error, setError] = useState("");
    const location = useLocation();
    const email = location.state.email;
    const isButtonDisabled = token.length !== 6;
    // const [openNotify, setOpenNotify] = useState(false)
    // const [message, setMessage] = useState("")
    const handleVerify = async () => {
        try {
            await verifyEmail(email, token)    
            navigate("/changePassVerify", {state: {email: email, token: token}})
        } catch (error) {
            setError("Mã xác thực không hợp lệ")
        }
    };
    // const handleNavSignin = () => {
    //     navigate("/signin")
    // }
    return (
        <div class="master-wrapper-content container jCarousel-overflow-for-button-next-arrow" id="master-container" >
            <div class="master-column-wrapper custom-master-column-wrapper-min-height" id="_master-column-wrapper-id" style={{ minHeight: '2px' }}>
                <div class="center-1">

                    <div id="opt-id">
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div class="otp-wrapper page-popup fancybox-content" style={{ display: 'inline-block' }}>

                                <div class="otp">
                                    <h2 class="product-title line"> Nhập mã xác thực</h2>
                                    <p class="desc">
                                        Quý khách vui lòng nhập mã xác thực đã được gửi về email <br></br> <span id="modal-otp-label-phonenumber" data-gtm-vis-recent-on-screen171967356_14="872" data-gtm-vis-first-on-screen171967356_14="872" data-gtm-vis-total-visible-time171967356_14="100" data-gtm-vis-has-fired171967356_14="1">0707252330</span>
                                    </p>


                                    <div class="form-group">
                                        <input type="text" maxlength="6" autofocus="autofocus" onChange={(e) => setToken(e.target.value)} id="token" name="token" placeholder="Nhập mã xác thực ..." value={token}/>
                                        {error && (
                                                <span
                                                    class="validate-required field-validation-error"
                                                >{error}</span>
                                                )}
                                        <button id="btnOtp" type="button" disabled={isButtonDisabled} onClick={handleVerify}> <span>Gửi</span><em class="mdi mdi-arrow-right"><FontAwesomeIcon icon={faArrowRight} style={{fontSize:'20px'}}/></em></button>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>


        </div>
    )
}

export default Verify