import React from "react";
import OrderHistoryItem from "./orderHistoryItem";

const OrderHistory = () => {
    return (
        <div class="center-2">
            <div class="col-lg-12">
                <h2 class="main-titles">Lịch sử đơn hàng</h2>
                <div class="table-history" style={{ padding: '15px' }}>
                    <table>
                        <thead>
                            <tr>
                                <th class="code" style={{ textAlign: 'center', width: '30%' }}>Sản Phẩm</th>
                                <th class="code" style={{ textAlign: 'center', width: '15%' }}>Số lượng</th>
                                <th class="code" style={{ textAlign: 'center', width: '15%' }}>Đơn giá</th>
                                <th class="code" style={{ textAlign: 'center', width: '15%' }}>Tổng tiền</th>
                                <th class="code" style={{ textAlign: 'center', width: '25%' }}>Ngày mua</th>
                            </tr>
                        </thead>
                        <tbody>
                            <OrderHistoryItem/>
                            <OrderHistoryItem/>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default OrderHistory