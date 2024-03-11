import React, { useState, useEffect } from "react";
import moment from 'moment-timezone';
import { getProductById } from "../../service/userService";

const OrderHistoryItem = ({order}) => {
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
                console.log(res.data.name);
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
            <td>
                <ul style={{ padding: '10px' }}>
                {productNames.map((productName) => (
                    <li>{productName}</li>
                ))}
                </ul>
            </td>
            <td style={{ textAlign: 'center' }}>
                <ul style={{ padding: '0' }}>
                {order.cart.map((product) => (
                    <li>{product.quantity}</li>
                ))}
                </ul>
            </td>
            <td style={{ textAlign: 'center' }}>
                <ul style={{ padding: '0' }}>
                {order.cart.map((product) => (
                    <li>{formatCurrency(product.price)}</li>
                ))}
                </ul>
            </td>
            <td style={{ textAlign: 'center' }}>{formatCurrency(order.shipCost)}</td>
            <td style={{ textAlign: 'center' }}>{formatCurrency(order.totalPrice)}</td>
            <td style={{ textAlign: 'center' }}>{formatteOrderTime}</td>
            <td style={{ textAlign: 'center' }}>{order.status}</td>
        </tr>
    )
}

export default OrderHistoryItem