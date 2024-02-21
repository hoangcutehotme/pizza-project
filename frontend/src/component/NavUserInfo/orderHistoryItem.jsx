import React from "react";

const OrderHistoryItem = () => {
    return (
        <tr class='order-history-product'>
            <td>
                <ul style={{ padding: '10px' }}>
                    <li>Pizza hải sản</li>
                    <li>Pizza thịt bò</li>
                    <li>Coca</li>
                    <li>7 Up</li>
                </ul>
            </td>
            <td style={{ textAlign: 'center' }}>
                <ul style={{ padding: '0' }}>
                    <li>1</li>
                    <li>2</li>
                    <li>4</li>
                    <li>4</li>
                </ul>
            </td>
            <td style={{ textAlign: 'center' }}>
                <ul style={{ padding: '0' }}>
                    <li>200.000</li>
                    <li>250.000</li>
                    <li>15.000</li>
                    <li>15.000</li>
                </ul>
            </td>
            <td style={{ textAlign: 'center' }}>820.000</td>
            <td style={{ textAlign: 'center' }}>20/2/2024</td>
        </tr>
    )
}

export default OrderHistoryItem