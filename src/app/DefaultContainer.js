/* eslint-disable no-restricted-globals */
import React, { useContext, useEffect } from 'react'
import AppContext from "../AppContext";
import { renderRoutes } from "react-router-config";
import _ from 'lodash';
import "./DefaultContainer.scss"
import { MenuOutlined } from '@ant-design/icons';
import paths from "../router/paths";
import Footer from "./homepage/Footer";
import { removeLocalStorage } from "../services/storage/LocalStorage";
import { Input } from "antd";
const { Search } = Input;

const DefaultContainer = ({ route }) => {
    const { user } = useContext(AppContext)

    useEffect(() => {
        if (_.isEmpty(user)) window.location.href = "/login"
    })

    const onSearch = (key) => {
        localStorage.setItem('keySearch', key)
        window.location.href = paths.Product;
    }

    const clickMenu = () => {
        let header = document.getElementById('header');
        let isClose = header.clientHeight === 48;

        if (isClose) {
            header.style.height = '340px';
        } else {
            header.style.height = '48px';
        }
    }

    return (
        <div>
            <div className="container-fluid homePage" >

                <nav id="header" className="header__navbar row">

                    <ul className="header__navbar--menu col-xl-12 col-10">
                        <li className={window.location.pathname === paths.HomePage ? "active" : ""}>
                            <a className="header__navbar--menu-link" href={paths.HomePage}>Trang chủ</a>
                        </li>
                        <li className={window.location.pathname === paths.Product ? "active" : ""}>
                            <a className="header__navbar--menu-link" href={paths.Product}>Sản phẩm</a>
                        </li>
                        <li className={window.location.pathname === paths.UserList ? "active" : ""}>
                            <a className="header__navbar--menu-link " href={paths.UserList}>Người dùng</a>
                        </li>
                        <li className={window.location.pathname === paths.UserPage(user._id) ? "active" : ""}>
                            <a className="header__navbar--menu-link" href={paths.UserPage(user._id)}>Trang cá nhân</a>
                        </li>
                        <li>
                            <span className="header__navbar--menu-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown"
                                aria-haspopup="true">
                                Tài khoản
                            </span>
                            <span className="dropdown-menu" aria-labelledby="navbarDropdown" >
                                <a className="dropdown-item" href={paths.UserInfo}>Hồ sơ</a>
                                <span className="dropdown-divider"></span>
                                <a className="dropdown-item" onClick={() => { removeLocalStorage("user") }} href="/login">Đăng xuất</a>
                            </span>
                        </li>
                        <li className="header__navbar--search col-xl-5">
                            <Search className="header__navbar--search-input col-xl-9" placeholder="Nhập sản phẩm bạn muốn tìm" allowClear onSearch={(key) => onSearch(key)} size="large" />
                        </li>
                    </ul>

                    <div className="header__navbar--menu-icon col-2" onClick={() => clickMenu()}>
                        <MenuOutlined className="header__navbar-menu-icon-btn" />
                    </div>

                </nav>

                <div className={"content"}>
                    {renderRoutes(route.routes)}
                </div>
                {/* <div id={"prevent-warning"}></div> */}
            </div>

            <div class="bg2">
                <div className="bg2-title col-xl-12 col-12"> <strong>FAQs</strong> </div>
                <div className="faq col-xl-9 col-10">
                    <div className="faq-ques grow ">
                        <h5>🔸Tại sao tôi nên dùng Old items exchange ?</h5>
                        <div className="faq-ans" style={{ display: "block" }}>
                            <p>↪️Old items exchange là một trang web hoàn toàn miễn phí giúp bạn tìm được những thứ mà mình muốn😍.
                                Đó là công cụ để bạn khai thác giá trị từ những món đồ cũ của mình,đồng thời giúp bạn tiết kiệm tiền bạc💵,
                                giảm thiểu lượng khí thải🌫 và kết nối với mọi người👨‍👨‍👧‍👦.
                            </p>
                        </div>
                    </div>
                    <div className="faq-ques grow">
                        <h5>🔸Tôi có thể đăng tải và trao đổi những loại mặt hàng nào ?</h5>
                        <div className="faq-ans" style={{ display: "block" }}>
                            <p>
                                ↪️Bạn có thể đăng tải rất nhiều thứ từ quần áo👚👕️👖, giầy dép, trang sức👟👠, máy tính💻, điện thoại📱, các thiết bị điện tử🖨🎮📸, đồ nội thất🏚🏘,
                                đồ chơi️🔫, sách vở📖📙, dụng cụ thể thao🎾️🏓, đồ sưu tầm như tem, thẻ,.... Có rất nhiều thứ đang chờ bạn trao đổi !
                            </p>
                        </div>
                    </div>
                    <div className="faq-ques grow">
                        <h5>🔸Quá trình trao đổi diễn ra như thế nào ?</h5>
                        <div className="faq-ans" style={{ display: "block" }}>
                            <p>
                                ↪️Làm theo các bước sau :
                                <p>Bước 1. Đăng tải sản phẩm bằng cách chụp vài bức ảnh và viết mô.</p>
                                <p>Bước 2. Chọn sản phẩm bạn muốn trao đổi.</p>
                                <p>Bước 3. Đợi xác nhận từ người đăng tải và liên hệ để thương lượng hợp lý.</p>
                            </p>
                        </div>
                    </div>
                    <div className="faq-ques grow2">
                        <h5>🔸Câu hỏi khác</h5>
                        <div className="faq-ans" style={{ display: "block" }}>
                            <p>
                                ↪️Hãy liên hệ với chúng tôi để nhận được phản hồi sớm nhất nhé !
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />

        </div>
    )

}
export default DefaultContainer