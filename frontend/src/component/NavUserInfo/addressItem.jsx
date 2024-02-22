import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck, faTrashCan } from "@fortawesome/free-regular-svg-icons";

const AddressItem = ({address, showModal, handleShowModal}) => {
    return(
        <div class="table-address">
                    <table>
                        <tbody>
                            <tr>
                                <td class="title addresses-tittle">Huỳnh Bá Thuận</td>
                                <td>
                                        <a class="default" href="#">
                                            <em  style={{marginRight:'5px'}}><FontAwesomeIcon icon={faCircleCheck}/></em>

                                            Địa chỉ mặc định

                                        </a>
                                </td>
                                <td class="td-edit"  >
                                    <a class="edit" style={{cursor:'pointer'}} onClick={()  => handleShowModal('update', address)}>
                                        <em style={{marginRight:'5px'}}><FontAwesomeIcon icon={faPen}/></em>
                                        Sửa
                                    </a>
                                </td>
                                <td class="td-delete" >
                                        <a class="delete" style={{cursor:'pointer'}}>
                                            <em  style={{marginRight:'5px'}}><FontAwesomeIcon icon={faTrashCan}/></em>
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
                </div>
    )
}
export default AddressItem