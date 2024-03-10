import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../service/authContext";
import { useUser } from "../../service/userContext";
import { updateUser } from "../../service/userService";
import Notify from "../../Notify/Notify";
const Info = () => {
    const { isLoggedIn } = useAuth();
    // const {user, setUser, defaultContact, setDefaultContact} = useUser();
    const [error, setError] = useState("");
    const [error1, setError1] = useState("");
    const { userName, setUserName } = useUser();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        address: ''
    })
    const [openNotify, setOpenNotify] = useState(false)
    const [message, setMessage] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleUpdate = async () => {
        if (formData.firstName === "") {
            setError("Tên là bắt buộc");
        } else {
            setError("");
            try {
                const token = localStorage.getItem("token");
                const decodedToken = JSON.parse(atob(token.split(".")[1]));
                let res = await updateUser(formData, decodedToken.id);
                // const userData = res.data.data;
                localStorage.setItem("user", JSON.stringify(res.data.data));
                setUserName(formData.lastName + " " + formData.firstName);
                console.log(res);
                setMessage("Cập nhật thông tin thành công");
                setOpenNotify(true);
            } catch (error) {
                setMessage("Cập nhật thông tin thất bại");
                setOpenNotify(true);
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const user = localStorage.getItem("user");
            const userData = JSON.parse(user);
            const defaultContactId = userData.defaultContact;
            const defaultContact = userData.contact.find(contact => contact._id === defaultContactId);
            setFormData({
                ...formData,
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: userData.email,
                phoneNumber: defaultContact.phoneNumber,
                address: defaultContact.address,
            });
        }
    }, [])
    return (
        <div class="center-2">
            <div class="col-lg-12">
                <h2 class="main-titles">Thông tin khách hàng</h2>
                <div class="form-wrappers">
                    <div class="wrap-forms">
                        <div class="form-group">
                            <div class="row">
                                <div class="col-4 col-md-3 mobile-custom-no-padding">
                                    <label
                                        id="lastName"
                                        style={{ fontWeight: '500' }}
                                        class="custom-label-info-customer"
                                    >Họ<span class="asterisk-color span"
                                    ></span>
                                    </label>
                                </div>
                                <div class="col-7 col-md-8">
                                    <input
                                        type="text"
                                        name="lastName"
                                        class="info-custom-input"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="row">
                                <div class="col-4 col-md-3 mobile-custom-no-padding">
                                    <label
                                        id="firstName"
                                        style={{ fontWeight: '500' }}
                                        class="custom-label-info-customer"
                                    >Tên<span class="asterisk-color span"
                                    ><span class="required">*</span></span>
                                    </label>
                                </div>
                                <div class="col-7 col-md-8">
                                    <input
                                        type="text"
                                        name="firstName"
                                        class={`info-custom-input ${error !== '' ? 'input-validation-error' : ''}`}
                                        value={formData.firstName}
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
                                        id="custom-username"
                                        class="custom-label-info-customer"
                                        style={{ fontWeight: '500' }}
                                    >Số điện thoại</label>
                                </div>
                                <div class="col-7 col-md-8">
                                    <input
                                        type="text"
                                        name="phoneNumber"
                                        maxLength={10}
                                        class="info-custom-input"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-4 col-md-3 mobile-custom-no-padding">
                                    <label
                                        id="custom-email"
                                        class="custom-label-info-customer"
                                        style={{ fontWeight: '500' }}
                                    >E-mail</label>
                                </div>
                                <div class="col-7 col-md-8">
                                    <input
                                        type="text"
                                        name="email"
                                        class="info-custom-input"
                                        value={formData.email}
                                        disabled="disabled"
                                    />
                                    <span
                                        class="validate-required field-validation-valid"
                                        data-valmsg-for="Email"
                                        data-valmsg-replace="true"
                                    ></span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-4 col-md-3 mobile-custom-no-padding">
                                    <label
                                        id="custom-email"
                                        class="custom-label-info-customer"
                                        style={{ fontWeight: '500' }}
                                    >Địa chỉ</label>
                                </div>
                                <div class="col-7 col-md-8">
                                    <input
                                        type="text"
                                        name="address"
                                        class="info-custom-input"
                                        value={formData.address}
                                        onChange={handleChange}
                                    />
                                    <span
                                        class="validate-required field-validation-valid"
                                        data-valmsg-for="Email"
                                        data-valmsg-replace="true"
                                    ></span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-3"></div>
                                <div class="col-md-8">
                                    <button
                                        class="btn-creat-acc btn-creat-acc-custom"
                                        id="btn-create"
                                        onClick={handleUpdate}
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

export default Info