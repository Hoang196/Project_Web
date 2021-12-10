import React from "react";
import "./Footer.css"


const Footer = (props) => {
    return (
        <div class="footer">
            <div class="">
                <div class="download-apps">
                    <a class='download-link' href="">
                        <img id='download-img-appstore'
                            src="https://e-cdns-files.dzcdn.net/cache/images/unlogged/common/storebadges/appstore-badge-en-US.2928664fe1fc6aca88583a6f606d60ba.svg"
                            alt="Download with appstore" />
                    </a>
                    <a class='download-link' href="">
                        <img id='download-img-googleplay'
                            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                            alt="Download with googeplay" />
                    </a>
                </div>
            </div>

            <div class="container cell-navigation col-12 col-xl-11">
                <div class="container-columns row">
                    <div class="container-column col-10 col-md-5 col-lg-3"  >
                        <ul class="category">
                            <li class="category-title">Đồ cũ</li>
                            <li class="category-item">
                                <a href="" class="category-item-link">Ưu đãi</a>
                            </li>
                            <li class="category-item">
                                <a href="" class="category-item-link">Đặc trưng</a>
                            </li>
                            <li class="category-item">
                                <a href="" class="category-item-link">Thiết bị</a>
                            </li>
                            <li class="category-item">
                                <a href="" class="category-item-link">Sự giúp đỡ</a>
                            </li>
                            <li class="category-item">
                                <a href="" class="category-item-link">Các bên liên quan</a>
                            </li>
                            <li class="category-item">
                                <a href="" class="category-item-link">Nghề nghiệp</a>
                            </li>
                        </ul>
                    </div>
                    <div class="container-column col-10 col-md-5 col-lg-3" >
                        <ul class="category">
                            <li class="category-title">Khám phá</li>
                            <li class="category-item">
                                <a href="" class="category-item-link">Tất cả các lĩnh vực</a>
                            </li>
                            <li class="category-item">
                                <a href="" class="category-item-link">Lượt dùng hàng đầu</a>
                            </li>
                            <li class="category-item">
                                <a href="" class="category-item-link">Cửa hàng phổ biến nhất</a>
                            </li>
                            <li class="category-item">
                                <a href="" class="category-item-link">Điểm đến mới</a>
                            </li>
                            <li class="category-item">
                                <a href="" class="category-item-link">Trao đổi tại nhà</a>
                            </li>
                        </ul>
                    </div>
                    <div class="container-column col-10 col-md-5 col-lg-3" >
                        <ul class="category">
                            <li class="category-title">Chúng ta là ai?</li>
                            <li class="category-item">
                                <a href="" class="category-item-link">Người tiêu dùng thông thái</a>
                            </li>
                            <li class="category-item">
                                <a href="" class="category-item-link">Nhà phát triển tương lai</a>
                            </li>
                            <li class="category-item">
                                <a href="" class="category-item-link">Người tiên phong công nghệ</a>
                            </li>
                            <li class="category-item">
                                <a href="" class="category-item-link">Bắt kịp xu thế</a>
                            </li>
                        </ul>
                    </div>
                    <div class="container-column col-10 col-md-5 col-lg-3" >
                        <ul class="category">
                            <li class="category-title">Hợp pháp</li>
                            <li class="category-item">
                                <a href="" class="category-item-link">Thông tin hợp pháp</a>
                            </li>
                            <li class="category-item">
                                <a href="" class="category-item-link">Điều khoản dịch vụ</a>
                            </li>
                            <li class="category-item">
                                <a href="" class="category-item-link">Chính sách bảo vệ dữ liệu</a>
                            </li>
                            <li class="category-item">
                                <a href="" class="category-item-link">Duy trì trạng thái</a>
                            </li>
                            <li class="category-item">
                                <a href="" class="category-item-link">Hội nhập thế giới</a>
                            </li>
                            <li class="category-item">
                                <a href="" class="category-item-link">Tích cực thay đổi</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer