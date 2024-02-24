import React, { useState } from "react";
import AddressItem from "./addressItem";
import ModalUpdateAddress from "../Modal/modalUpdateAddress";
const Address = () => {
    const addresses = [{phoneNumber:'1111111111', address:'4634543, dfgdfhdfhgfjgkhk, Quận Phú Nhuận, Phường 2, Thành phố Hồ Chí Minh, Việt Nam'}, 
    { phoneNumber:'2222222222', address:'Đà Nẵng'}]
    const [address, setAddress] = useState({
        phoneNumber: '',
        address: ''
    })
    const [action, setAction] = useState('')
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = (action, address1) => {
        console.log(address1)
        setAddress({...address1})
        setAction(action)
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <div>
            <div class="center-2">
                <div class="col-lg-12">
                    <h2 class="main-titles">Sổ địa chỉ</h2>
                    {addresses.map((address) => 
                        <AddressItem address={address} showModal={showModal} handleShowModal={handleShowModal}/>
                    )}
                    <div class="col-12">
                        <div class="total-wrapper">
                            <button class="btn-next"  value="Add" name="buttonType" onClick={() => handleShowModal('add', {phoneNumber:'',address:''})}>Thêm</button>
                        </div>
                    </div>
                </div>
            </div>
            <ModalUpdateAddress show={showModal} handleClose={handleCloseModal} action={action} address={address}/>
        </div>
    )
}

export default Address