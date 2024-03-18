import React, { useState, useEffect } from "react";
import moment from 'moment-timezone';
import { getProductById } from "../../service/userService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const OrderHistoryItem = ({order, index, handleShowDetailOrder}) => {
    function formatCurrency(price) {
        return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }
    const formatteOrderTime = moment.utc(order.dateOrdered).format('DD/MM/YYYY HH:mm');
    const [productNames, setProductNames] = useState([])
    useEffect(() => {
        const getProductName = async () => {
            const names = [];
            for (const product of order.cart) {
                let res = await getProductById(product.product);
                names.push(res.data.name);
            }
            setProductNames(names)
        };
        if(order.cart) {         
            getProductName();
        }
    },[])
    return (
        <tr class='order-history-product'>
            <td style={{ textAlign: 'center' }}>
                <ul style={{ padding: '10px' }}>
                    {index}
                </ul>
            </td>
            <td style={{ textAlign: 'center' }}>
                <ul style={{ padding: '0' }}>
                    {order._id}
                </ul>
            </td>
            <td style={{ textAlign: 'center' }}>{formatCurrency(order.shipCost)}</td>
            <td style={{ textAlign: 'center' }}>{formatCurrency(order.totalPrice)}</td>
            <td style={{ textAlign: 'center' }}>{formatteOrderTime}</td>
            <td style={{ textAlign: 'center' }}>
                <FontAwesomeIcon icon={faEye} style={{cursor:'pointer'}} className="detail_order-button" onClick={() => handleShowDetailOrder(order._id)}/>
            </td>
        </tr>
    )
}

export default OrderHistoryItem