/* eslint-disable no-restricted-globals */
import React, { useContext, useEffect } from 'react'
import AppContext from "../../AppContext";
import { renderRoutes } from "react-router-config";
import _ from 'lodash';
import "./AdminContainer.scss"
import { MenuOutlined } from '@ant-design/icons';
import paths from "../../router/paths";
import Footer from "../homepage/Footer";
import { removeLocalStorage } from "../../services/storage/LocalStorage";

const AdminContainer = ({ route }) => {
    const { user } = useContext(AppContext)

    useEffect(() => {
        if (_.isEmpty(user)) window.location.href = "/login"
        if (user.exist !== "ADMIN") {
            window.location.href = paths.HomePage
        }
    })

    const clickMenu = () => {
        let header = document.getElementById('admin');
        let isClose = header.clientHeight === 45;

        console.log("ndh", isClose, " ", header.clientHeight)

        if (isClose) {
            header.style.height = '302px';
            console.log("ndh 302", header.style.height)
        } else {
            header.style.height = '46px';
            console.log("ndh 46", header.style.height)
        }
    }

    return (
        <div>
            <div className="container-fluid adminPage col-xl-12 row" >
                <div id="admin" className="admin__navbar col-xl-2 row">

                    <ul className="admin__navbar--menu col-xl-12 col-10">
                        <div className="admin__navbar--menu-logo">
                            <div className="admin__navbar--menu-logo-img"/>
                        </div>
                        <li className={window.location.pathname === paths.homepage ? "admin_active" : ""}>
                            <a className="admin__navbar--menu-link" href={paths.homepage}> <i className="fas fa-home" /> Trang chủ</a>
                        </li>
                        <li className={window.location.pathname === paths.product ? "admin_active" : ""}>
                            <a className="admin__navbar--menu-link" href={paths.product}> <i className="fab fa-product-hunt" /> Sản phẩm</a>
                        </li>
                        <li className={window.location.pathname === paths.userList ? "admin_active" : ""}>
                            <a className="admin__navbar--menu-link" href={paths.userList}>
                                <i className="fas fa-users"/> Người dùng</a>
                        </li>
                        <li className={window.location.pathname === paths.transaction ? "admin_active" : ""}>
                            <a className="admin__navbar--menu-link" href={paths.transaction}>
                                <i className="fas fa-sync-alt" /> Giao dịch</a>
                        </li>
                        <li className={window.location.pathname === paths.UserInfo ? "admin_active" : ""}>
                            <a className="admin__navbar--menu-link" href={paths.UserInfo}>
                                <i className="fas fa-user" /> Tài khoản</a>
                        </li>
                        <li className={window.location.pathname === paths.Login ? "admin_active" : ""}>
                            <a className="admin__navbar--menu-link" onClick={() => { removeLocalStorage("user") }} href={paths.Login}>
                                <i className="fas fa-sign-out-alt" /> Đăng xuất</a>
                        </li>
                    </ul>

                    <div className="admin__navbar--menu-icon col-2" onClick={() => clickMenu()}>
                        <MenuOutlined className="admin__navbar-menu-icon-btn" />
                    </div>

                </div>

                <div className={"admin__content col-xl-10 col-12"}>
                    {renderRoutes(route.routes)}
                </div>
            </div>

            <Footer />

        </div>
    )

}
export default AdminContainer