import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../assets/styles/modal.css'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
// import LoadingModal from '../Loading/Loading';
import Notify from '../../Notify/Notify';
import { addContact, updateDefaultContact, updateContact } from '../../service/userService';
// const ModalUpdateAddress = ({ show, handleClose, action, address }) => {
    const ModalUpdateAddress = ({ show, handleClose, address, action, contactId, setContacts, setDefaultContact}) => {
    // const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("");
    const [openNotify, setOpenNotify] = useState(false)
    const [message, setMessage] = useState("")
    const [formData, setFormData] = useState({
        phoneNumber: address.phoneNumber,
        address: address.address,
    });

    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // const handleSubmit = () => {
    //     console.log(formData)
    // }

    const handleSubmit = async (e) => {
        if (/^\d{10}$/.test(formData.phoneNumber)) {
            // setIsLoading(true)
            if (action === 'add') {
                try {  
                    
                    console.log(action)                
                    const response = await addContact(formData);
                    console.log(response)                
                    localStorage.setItem("user", JSON.stringify(response.data));
                    setContacts(response.data.contact); 
                    setDefaultContact(response.data.defaultContact)
                    setMessage("Thêm địa chỉ thành công")
                    setOpenNotify(true)
                    handleClose()
                } catch (error) {
                    setMessage("Thêm địa chỉ thất bại")
                    setOpenNotify(true)
                    handleClose()
                }
            }
             else {
                try { 
                    if(isChecked) {
                        try {
                            await updateDefaultContact(contactId)
                        } catch (error) {
                        }
                    }                  
                    const response = await updateContact(formData, contactId)
                    localStorage.setItem("user", JSON.stringify(response.data.data));
                    setContacts(response.data.data.contact);
                    setDefaultContact(response.data.data.defaultContact)
                    setMessage("Cập nhật liên hệ thành công")
                    setOpenNotify(true)
                    handleClose()
                } catch (error) {
                    setMessage("Cập nhật liên hệ thất bại")
                    setOpenNotify(true)
                    handleClose()
                }
            }
            setFormData({
                phoneNumber: '',
                address: '',
            });
            setIsChecked(false)
            // setIsLoading(false)
        } else {
            setError('Số điện thoại không hợp lệ')
        }


    }

    const handleReset = () => {
        handleClose()
        setFormData({
            phoneNumber: '',
            address: '',
        });
        // setError('')
        setIsChecked(false)
    }
    useEffect(() => {
        setFormData({
            ...formData,
            phoneNumber: address.phoneNumber,
            address: address.address,
        });
    }, [address]);

    

    return (
        <div>

            <Modal className="modal fade modal-change-address" show={show} onHide={handleReset} size="lg" style={{ zIndex: '10000' }}>
                <Modal.Body style={{ zIndex: '10000' }}>
                    <Modal.Title style={{ color: '#006a31' }}>Cập nhật địa chỉ</Modal.Title>
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <span class="close" data-dismiss="modal" onClick={handleReset}><FontAwesomeIcon icon={faCircleXmark} style={{ color: 'red' }} /></span>
                            <form>
                                {error && <div className="alert-danger">{error}</div>}
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col col-12 form-group input-field">
                                            <label for="phone" style={{marginBottom:'10px', fontWeight:'500'}}>
                                                Số điện thoại
                                                <span class="txt-red font-weight-bold" style={{color:'red'}}>*</span>
                                            </label>
                                            <input
                                                style={{marginBottom:'10px'}}
                                                type="text"
                                                class="form-control"
                                                placeholder='Số điện thoại'
                                                name="phoneNumber"
                                                maxLength={10}
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col col-12 form-group input-field">
                                            <label for="address" style={{marginBottom:'10px', fontWeight:'500'}}>
                                                Địa chỉ
                                                <span class="txt-red font-weight-bold" style={{color:'red'}}>*</span>
                                            </label>
                                            <input
                                                type='text'
                                                style={{marginBottom:'10px'}}
                                                name="address"
                                                placeholder='Nhập địa chỉ'
                                                class="form-control"
                                                value={formData.address}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    {action !== 'add' && (
                                    <div class="pqpMRq">
                                        <label class="kbCWJr" style={{color:'black'}}>
                                        <div class={`ciVq4v ${isChecked ? 'wb33QF' : ''}`} onClick={() => {setIsChecked(!isChecked)}}></div>
                                            Đặt làm địa chỉ mặc định
                                        </label>
                                    </div>
                                    )}
                                </div>
                                <div class="modal-footer content-right" style={{border:'none'}}>
                                    <button
                                        type="button"
                                        class="btn btn-gray text-uppercase"
                                        onClick={handleReset}
                                    >
                                        Đóng</button>
                                    <button type="button" class="btn btn-red text-uppercase"
                                    onClick={handleSubmit}
                                    >
                                        OK
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            {/* {isLoading && (<LoadingModal />)} */}
            {openNotify && (<Notify message={message} setOpenNotify={setOpenNotify} handleClose={handleClose}/>)}
        </div>
    )
}
export default ModalUpdateAddress

