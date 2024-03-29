import React from 'react'
import style from './Footer.css'
import Item_Footer from './Item_Footer'
import logo from "../../assets/imgs/logoPizza.png"

function Footer() {
    return (
        <div class="Footer_container">
            <div class="container">
                <div class="Footer_logo">
                    <img src={logo} alt="" />
                </div>
                <div class="Pooter_infor">
                    <div class="Item_Footer">
                        <div class="t_h5">
                            Giới Thiệu
                        </div>
                        <span class="t_h6">Hệ thống nhà hàng</span>
                        <span class="t_h6">Câu chuyện thương hiệu</span>
                        <span class="t_h6">Ưu đãi thành viên</span>
                        <span class="t_h6">THÔNG BÁO LỊCH HOẠT ĐỘNG TẾT NGUYÊN ĐÁN GIÁP THÌN 2024</span>

                    </div>
                    <div class="Item_Footer">
                        <div class="t_h5">
                            VĂN PHÒNG ĐẠI DIỆN
                        </div>
                        <span class="t_h6">Công ty Cổ phần Pizza Ngon  77 Trần Nhân Tôn, Phường 9, Quận 5, Thành phố Hồ Chí Minh





                        </span>
                        <span class="t_h6">SĐT: +84 (028) 7308 3377</span>
                        <span class="t_h6">MST: 0104115527</span>
                        <span class="t_h6">Cấp lần đầu ngày 17 tháng 08 năm 2009 và có thể được sửa đổi vào từng thời điểm</span>

                    </div>
                    <div class="Item_Footer">
                        <div class="t_h5">
                            LIÊN HỆ
                        </div>
                        <span class="t_h6">Điều khoản và Điều kiện</span>
                        <span class="t_h6">Hướng dẫn mua hàng</span>
                        <span class="t_h6">Chính sách giao hàng</span>
                        <span class="t_h6">Chính sách bảo mật</span>

                    </div>
                    <div class="Item_Footer">
                        <div class="t_h5">
                            TỔNG ĐÀI HỖ TRỢ
                        </div>
                        <span class="t_h6">Đặt hàng: 1900 6066 (9:30 – 21:30)
                        </span>
                        <span class="t_h6">Tổng đài CSKH: 1900 633 606 (9:30 - 21:30)</span>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Footer
