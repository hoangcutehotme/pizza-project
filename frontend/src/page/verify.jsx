import React from "react";
import '../assets/styles/login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

const Verify = () => {
    return (
        <div class="master-wrapper-content container jCarousel-overflow-for-button-next-arrow" id="master-container" >
            <div class="master-column-wrapper custom-master-column-wrapper-min-height" id="_master-column-wrapper-id" style={{ minHeight: '2px' }}>
                <div class="center-1">

                    <div id="opt-id">
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div class="otp-wrapper page-popup fancybox-content" style={{ display: 'inline-block' }}>

                                <div class="otp">
                                    <h2 class="product-title line"> Nhập mã OTP</h2>
                                    <p class="desc">
                                        Quý khách vui lòng nhập mã OTP đã được gửi về số điện thoại <br></br> <span id="modal-otp-label-phonenumber" data-gtm-vis-recent-on-screen171967356_14="872" data-gtm-vis-first-on-screen171967356_14="872" data-gtm-vis-total-visible-time171967356_14="100" data-gtm-vis-has-fired171967356_14="1">0707252330</span>
                                    </p>


                                    <div class="form-group">
                                        <input type="text" maxlength="6" autofocus="autofocus" id="otp" name="otp" placeholder="Nhập mã OTP ..." />

                                        <span id="Message" class="spanError" style={{ fontSize: '14px', color: 'red' }}></span>

                                        {/* <div style={{ marginTop: '10px', fontSize: '14px' }}>
                                            <span>Mã hết hạn sau: </span>
                                            <span id="time" style={{ color: 'red' }}>09:50</span>
                                            <br></br>
                                        </div> */}


                                        <button id="btnOtp" type="button"> <span>Gửi</span><em class="mdi mdi-arrow-right"><FontAwesomeIcon icon={faArrowRight} style={{fontSize:'20px'}}/></em></button>
                                    </div>

                                    <p class="desc">
                                        Không nhận được tin nhắn OTP
                                        <button id="btnResendOtp" style={{ border: 'none', backgroundColor: 'white', color: 'green' }} disabled="">
                                            Gửi lại mã
                                            <em class="ri-refresh-line" style={{marginLeft:'5px'}}><FontAwesomeIcon icon={faArrowsRotate}/></em>
                                        </button>
                                    </p>

                                    {/* <p>
                                        <span hidden="" id="timeExpired" style={{ color: 'red', fontSize: '14px' }}>
                                            Mã OTP đã hết hạn
                                        </span>
                                    </p> */}
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