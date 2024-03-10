import React, { useState } from "react";
import ModalUpdateAddress from "./modalUpdateAddress";
import "./pickAddress.css"
const PickAddress = ({ show, handleClose, user, selectedContact, setSelectedContact, contacts, setContacts, defaultContact, setDefaultContact }) => {
    const [showModal, setShowModal] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [action, setAction] = useState('');
    const [idContact, setIdContact] = useState('');

    const handleShowModal = (address1, phoneNumber1, action1, id) => {
        setAddress(address1)
        setPhoneNumber(phoneNumber1)
        setAction(action1)
        setIdContact(id)
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
        setAddress('')
        setPhoneNumber('')
    };

    const [selectedAddress, setSelectedAddress] = useState(selectedContact._id);

    const handleRadioChange = (contId) => {
        setSelectedAddress(contId);
    };

    const handleConfirm = () => {
        const selectedContact = contacts.find((contact) => contact._id === selectedAddress);

        if (selectedContact) {
            setSelectedContact(selectedContact)
        } else {
            console.error('Selected contact not found.');
        }
        handleClose();
    };

    return (
        <div>
            <div id="modal" style={{ zIndex: '1' }}>                
                <aside
                    zIndex='1'
                    tabindex="0"
                    role="dialog"
                    aria-modal="true"
                    aria-label="modal"
                    class="sfHJBJ"
                >
                    <div class="yIbrbf" style={{ zIndex: '1' }}>
                        <div class="BzP4cv">
                            <div class="uCImov">
                                <div class="EAsnVx"><div>Địa chỉ của tôi</div></div>
                                <div class="Fnz5GY UvGnhr">
                                    {/* <div class="stardust-spinner--hidden stardust-spinner">
                                        <div class="stardust-spinner__background">
                                            <div class="stardust-spinner__main" role="img">
                                                <svg width="34" height="12" viewBox="-1 0 33 12">
                                                    <circle
                                                        class="stardust-spinner__spinner"
                                                        cx="4"
                                                        cy="6"
                                                        r="4"
                                                        fill="#EE4D2D"
                                                    ></circle>
                                                    <circle
                                                        class="stardust-spinner__spinner"
                                                        cx="16"
                                                        cy="6"
                                                        r="4"
                                                        fill="#EE4D2D"
                                                    ></circle>
                                                    <circle
                                                        class="stardust-spinner__spinner"
                                                        cx="28"
                                                        cy="6"
                                                        r="4"
                                                        fill="#EE4D2D"
                                                    ></circle>
                                                </svg>
                                            </div>
                                        </div>
                                    </div> */}
                                    {contacts.map((cont) => (

                                        <div role="radiogroup" aria-label="Địa Chỉ Của Tôi">
                                            <div class="ri9qH4 fHrRlc">
                                                <div class="l5tAFe">
                                                    <input
                                                        class="stardust-radio stardust-radio--checked stardust-radio-button"
                                                        type="radio"
                                                        id={`address-radio-${cont._id}`}
                                                        name="address-radio-group"
                                                        value={cont._id}
                                                        checked={selectedAddress === cont._id}
                                                        onChange={() => handleRadioChange(cont._id)}
                                                    />
                                                </div>
                                                <label class="n4C_GM" htmlFor={`address-radio-${cont._id}`}>
                                                    {/* <div class="PcodYT"> */}

                                                    <div class="KecgYK O7E6Vs">
                                                        <div
                                                            id="address-card_32c92423-9fcd-4034-ba8f-cd538c93f96e_header"
                                                            class="nvJG8K ZYA1jJ"
                                                        >
                                                            <span class="v14nEg _VjY75"
                                                            ><div class="uekMWo">{user.firstName + " " + user.lastName}</div></span>
                                                            <div class="gmtfu3"></div>
                                                            <div role="row" class="byKxE2 RfNU9h g4fJe1">
                                                                {cont.phoneNumber}
                                                            </div>
                                                        </div>
                                                        <div class="kl5dTm">
                                                            <button onClick={() => handleShowModal(cont.address, cont.phoneNumber, 'update', cont._id)} class="fQQP_K">Cập nhật</button>
                                                        </div>
                                                    </div>
                                                    <div
                                                        id="address-card_32c92423-9fcd-4034-ba8f-cd538c93f96e_content"
                                                        class="KecgYK O7E6Vs"
                                                    >
                                                        <div class="nvJG8K ZYA1jJ">
                                                            <div class="RE4_GN">
                                                                <div role="row" class="g4fJe1">
                                                                    {cont.address}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="RnsSLo kl5dTm"></div>
                                                    </div>
                                                    {defaultContact === cont._id && (
                                                        <div
                                                            id="address-card_32c92423-9fcd-4034-ba8f-cd538c93f96e_badge"
                                                            role="row"
                                                            className="uSVjDc g4fJe1"
                                                        >
                                                            <span role="mark" className="_77S2H AK7PoC bBG6Vr" style={{fontSize:'12px'}}>Mặc định</span>
                                                        </div>
                                                    )}
                                                    {/* </div> */}
                                                </label>
                                            </div>
                                        </div>
                                    ))}

                                    <button class="uXNyKF ZkWDWb GTODXA" onClick={() =>
                                                handleShowModal('','','add')}>
                                        <svg viewBox="0 0 10 10" class="EnPcL0">
                                            <path
                                                stroke="none"
                                                d="m10 4.5h-4.5v-4.5h-1v4.5h-4.5v1h4.5v4.5h1v-4.5h4.5z"
                                            ></path></svg>Thêm địa chỉ mới
                                    </button>
                                </div>
                                <div class="bK0J3d">
                                    <button onClick={handleClose} class="fMZPBu uXNyKF ZkWDWb GTODXA">Hủy</button>
                                    <button onClick={handleConfirm} class="w3Rqy3 ZkWDWb tVVh4Q" style={{border:'none'}}>Xác nhận</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="g9sxyL"></div>
                </aside>
            </div>
            <ModalUpdateAddress show={showModal} handleClose={handleCloseModal} action = {action} address={{phoneNumber: phoneNumber, address: address}}   contactId={idContact} setContacts={setContacts} setDefaultContact={setDefaultContact}/>
        </div>
    )
}
export default PickAddress