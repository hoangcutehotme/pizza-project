import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faPen } from "@fortawesome/free-solid-svg-icons";
import { changePass } from "../../service/userService";
import Notify from "../../Notify/Notify";
const ChangePass = () => {
    const [error, setError] = useState("");
    const [error1, setError1] = useState("");
    const [error2, setError2] = useState("");
    const [error3, setError3] = useState("");
    const [formData, setFormData] = useState({
        oldPass: '',
        newPass: '',
        confirmedPass: ''
    })

    const [openNotify, setOpenNotify] = useState(false);
    const [message, setMessage] = useState("")



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        let check = 1;
        if (formData.oldPass === '') {
            setError("Thông tin bắt buộc");
            check = 0;
        } else {
            setError("")
        }

        if (formData.newPass === '') {
            setError1("Thông tin bắt buộc");
            check = 0;
        } else {
            setError1("")
        }

        if (formData.confirmedPass === '') {
            setError2("Thông tin bắt buộc");
            check = 0;
        } else {
            setError2("")
        }

        if (check) {
            console.log(formData)
            if (formData.newPass !== formData.confirmedPass) {
                setError3("Mật khẩu và xác nhận mật khẩu không khớp");
            } else {
                setError3("")
                try {
                    const token = localStorage.getItem("token");
                    const decodedToken = JSON.parse(atob(token.split(".")[1]));
                    const res = await changePass(formData, decodedToken.id);
                    console.log(res);
                    setMessage("Thay đổi mật khẩu thành công");
                    setOpenNotify(true);
                } catch (error) {
                    setMessage("Thay đổi mật khẩu thất bại");
                    setOpenNotify(true);
                } finally {
                    setFormData({
                        oldPass: '',
                        newPass: '',
                        confirmedPass: ''
                    })
                }
            }
        }
    }
    return (
        <div class="center-2">
            <div class="col-lg-12">
                <h2 class="main-titles">Đổi mật khẩu</h2>
                <div class="form-wrappers">
                    <div class="wrap-forms">
                        <div class="form-group">
                            <div class="row">
                                <div class="col-4 col-md-3 mobile-custom-no-padding">
                                    <label
                                        id="custom-fullname"
                                        style={{ fontWeight: '500' }}
                                        class="custom-label-info-customer"
                                    >Mật khẩu cũ<span class="asterisk-color span"
                                    ><span class="required">*</span></span>
                                    </label>
                                </div>
                                <div class="col-7 col-md-8">
                                    <input
                                        type="password"
                                        name="oldPass"
                                        class={`info-custom-input ${error !== '' ? 'input-validation-error' : ''}`}
                                        id="oldPass"
                                        value={formData.oldPass}
                                        onChange={handleChange}
                                    />
                                    {error && (
                                        <span
                                            class="validate-required field-validation-error"
                                        >{error}</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="row">
                                <div class="col-4 col-md-3 mobile-custom-no-padding">
                                    <label
                                        id="custom-newPass"
                                        style={{ fontWeight: '500' }}
                                        class="custom-label-info-customer"
                                    >Mật khẩu mới<span class="asterisk-color span"
                                    ><span class="required">*</span></span>
                                    </label>
                                </div>
                                <div class="col-7 col-md-8">
                                    <input
                                        type="password"
                                        name="newPass"
                                        class={`info-custom-input ${error1 !== '' ? 'input-validation-error' : ''}`}
                                        id="newPass"
                                        value={formData.newPass}
                                        onChange={handleChange}
                                    />
                                    {error1 && (
                                        <span
                                            class="validate-required field-validation-error"
                                        >{error1}</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="row">
                                <div class="col-4 col-md-3 mobile-custom-no-padding">
                                    <label
                                        id="custom-confirmedPass"
                                        style={{ fontWeight: '500' }}
                                        class="custom-label-info-customer"
                                    >Xác nhận mật khẩu mới<span class="asterisk-color span"
                                    ><span class="required">*</span></span>
                                    </label>
                                </div>
                                <div class="col-7 col-md-8">
                                    <input
                                        type="password"
                                        name="confirmedPass"
                                        class={`info-custom-input ${error2 !== '' ? 'input-validation-error' : ''}`}
                                        id="confirmedPass"
                                        value={formData.confirmedPass}
                                        onChange={handleChange}
                                    />
                                    {error2 && (
                                        <span
                                            class="validate-required field-validation-error"
                                        >{error2}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                        {error3 && (

                            <div class="form-group">
                                <div class="row" style={{ textAlign: 'center' }}>
                                    <span
                                        class="validate-required field-validation-error"
                                        style={{fontSize:'16px'}}
                                    >{error3}</span>
                                </div>
                            </div>
                        )}


                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-3"></div>
                                <div class="col-md-8">
                                    <button
                                        class="btn-creat-acc btn-creat-acc-custom"
                                        id="btn-create"
                                        onClick={handleSubmit}
                                    >
                                        <em id="pencil-custom"><FontAwesomeIcon icon={faPen} /></em>Cập
                                        nhật
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {openNotify && (<Notify message={message} setOpenNotify={setOpenNotify} />)}
        </div>
    )
}

export default ChangePass