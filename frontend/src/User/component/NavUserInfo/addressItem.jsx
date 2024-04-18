import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import Notify from "../../Notify/Notify";
import DeleteConfirmationModal from "../Modal/deleteModal";

const AddressItem = ({ address, showModal, handleShowModal, defaultContact, setContacts }) => {
    const [actionDel, setActionDel] = useState('');
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [itemToDelete, setItemToDelete] = useState('');
    const [message, setMessage] = useState("")
    const [openNotify, setOpenNotify] = useState(false)
    const handleShowDeleteModal = (id, action) => {
        if(id === defaultContact) {
            setMessage("Không thể xóa địa chỉ mặc định. Hãy thử đổi địa chỉ mặc định sang địa chỉ khác!");
            setOpenNotify(true)
        } else {
            setActionDel(action)
            setItemToDelete(id);
            setShowDeleteModal(true);
        }
    };

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
        setItemToDelete('');

    };

    return (
        <div class="table-address">
            <table>
                <tbody>
                    <tr>
                        <td class="title addresses-tittle">Huỳnh Bá Thuận</td>
                        <td>
                            {address._id === defaultContact && (
                                <a class="default">
                                    <em style={{ marginRight: '5px' }}><FontAwesomeIcon icon={faCircleCheck} /></em>
                                    Địa chỉ mặc định
                                </a>
                            )}
                        </td>
                        <td class="td-edit"  >
                            <a class="edit" style={{ cursor: 'pointer' }} onClick={() => handleShowModal('update', address, address._id)}>
                                <em style={{ marginRight: '5px' }}><FontAwesomeIcon icon={faPen} /></em>
                                Sửa
                            </a>
                        </td>
                        <td class="td-delete" >
                            <a class="delete" style={{ cursor: 'pointer' }} onClick={() => handleShowDeleteModal(address._id, 'contact')}>
                                <em style={{ marginRight: '5px' }}><FontAwesomeIcon icon={faTrashCan} /></em>
                                Xóa
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Địa chỉ</td>
                        <td>{address.address}</td>
                    </tr>
                    <tr>
                        <td>Số điện thoại</td>
                        <td colspan="3">{address.phoneNumber}</td>
                    </tr>
                </tbody>
            </table>
            {openNotify && (<Notify message={message} setOpenNotify={setOpenNotify} />)}
            <DeleteConfirmationModal show={showDeleteModal} handleClose={handleCloseDeleteModal} id={itemToDelete} action={actionDel} setData={setContacts}/>
        </div>
    )
}
export default AddressItem