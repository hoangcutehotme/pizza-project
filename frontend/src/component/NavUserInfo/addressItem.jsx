import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck, faTrashCan } from "@fortawesome/free-regular-svg-icons";

const AddressItem = () => {
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
                                <td class="td-edit"  style={{cursor:'pointer'}}>
                                    <a class="edit">
                                        <em style={{marginRight:'5px'}}><FontAwesomeIcon icon={faPen}/></em>
                                        Sửa
                                    </a>
                                </td>
                                <td class="td-delete" style={{cursor:'pointer'}}>
                                        <a class="delete">
                                            <em  style={{marginRight:'5px'}}><FontAwesomeIcon icon={faTrashCan}/></em>
                                            Xóa
                                        </a>
                                </td>
                            </tr>
                            <tr>
                                <td>Địa chỉ</td>
                                <td>4634543, dfgdfhdfhgfjgkhk, Quận Phú Nhuận, Phường 2, Thành phố Hồ Chí Minh, Việt Nam</td>
                            </tr>
                            <tr>
                                <td>Số điện thoại</td>
                                <td colspan="3">0707252330</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
    )
}
export default AddressItem