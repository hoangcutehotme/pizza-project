import React from "react";

const OrderHistoryItem = ({order}) => {
    return (
        <tr class='order-history-product'>
            <td>
                <ul style={{ padding: '10px' }}>
                {order.cart.map((product) => (
                    <li>{product.product}</li>
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
                    <li>{product.price}</li>
                ))}
                </ul>
            </td>
            <td style={{ textAlign: 'center' }}>{order.shipCost}</td>
            <td style={{ textAlign: 'center' }}>{order.totalPrice}</td>
            <td style={{ textAlign: 'center' }}>20/2/2024</td>
            <td style={{ textAlign: 'center' }}>{order.status}</td>
        </tr>
    )
}

export default OrderHistoryItem