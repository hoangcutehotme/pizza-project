import React, { useState, useEffect } from "react";
import AddressItem from "./addressItem";
import ModalUpdateAddress from "../Modal/modalUpdateAddress";
const Address = () => {
    const [contacts, setContacts] = useState([])
    const [defaultContact, setDefaultContact] = useState("")
    const [address, setAddress] = useState({
        phoneNumber: '',
        address: ''
    })
    const [action, setAction] = useState('')
    const [idContact, setIdContact] = useState('');
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = (action, address1, id) => {
        console.log(address1)
        setAddress({...address1})
        setAction(action)
        setIdContact(id)
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token) {
            const user = localStorage.getItem("user");
            const userData = JSON.parse(user);
            setDefaultContact(userData.defaultContact);
            setContacts(userData.contact);
        }
    },[])
    return (
        <div>
            <div class="center-2">
                <div class="col-lg-12">
                    <h2 class="main-titles">Sổ địa chỉ</h2>
                    {contacts.map((address) => 
                        <AddressItem address={address} showModal={showModal} handleShowModal={handleShowModal} defaultContact={defaultContact} setContacts={setContacts}/>
                    )}
                    <div class="col-12">
                        <div class="total-wrapper">
                            <button class="btn-next"  value="Add" name="buttonType" onClick={() => handleShowModal('add', {phoneNumber:'',address:''})}>Thêm</button>
                        </div>
                    </div>
                </div>
            </div>
            <ModalUpdateAddress show={showModal} handleClose={handleCloseModal} action={action} address={address} contactId={idContact} setContacts={setContacts} setDefaultContact={setDefaultContact}/>
        </div>
    )
}

export default Address