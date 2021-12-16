// import { Button, Form } from "antd";
import React, { useState, useContext } from "react";
import "./UserRecordContainer.scss"
import UserRecord from "./UserRecord"
import AppContext from "../../AppContext";

const UserRecordContainer = () => {

    const { user } = useContext(AppContext)
    const [editUserModalVisible, setEditUserModalVisible] = useState(false)

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="container-fluid recordPage row col-lg-10 col-11">

                <div className="recordPage__header col-12">
                    <div className="recordPage__header--title">
                        <h1 className="recordPage__header--title-1">
                            Hồ sơ của tôi
                        </h1>
                        <div className="recordPage__header--title-2">
                            Quản lý thông tin hồ sơ để bảo mật tài khoản
                        </div>
                    </div>
                </div>

                <div className="recordPage__container col-12 row">
                    <div className="recordPage__container--menu col-lg-8 col-12">
                        <div className="recordPage__container--menu-items">
                            <div className="recordPage__container--menu-items-label col-4">Tên</div>
                            <div className="recordPage__container--menu-items-value col-8">{user.username}</div>
                        </div>
                        <div className="recordPage__container--menu-items">
                            <div className="recordPage__container--menu-items-label col-4">Email</div>
                            <div className="recordPage__container--menu-items-value col-8">{user.email}</div>
                        </div>
                        <div className="recordPage__container--menu-items">
                            <div className="recordPage__container--menu-items-label col-4">Số điện thoại</div>
                            <div className="recordPage__container--menu-items-value col-8">{user.phoneNumber}</div>
                        </div>
                        <div className="recordPage__container--menu-items">
                            <div className="recordPage__container--menu-items-label col-4">Mã thành viên</div>
                            <div className="recordPage__container--menu-items-value col-8">{user._id}</div>
                        </div>
                        <div className="recordPage__container--menu-items">
                            <div className="recordPage__container--menu-items-label col-4">Giới tính</div>
                            <div className="recordPage__container--menu-items-value col-8">{user.gender}</div>
                        </div>
                        <div className="recordPage__container--menu-items">
                            <div className="recordPage__container--menu-items-label col-4">Ngày sinh</div>
                            <div className="recordPage__container--menu-items-value col-8">{user.dateOfBirth}</div>
                        </div>
                        <div className="recordPage__container--menu-items" style={{ display: 'flex', justifyContent: 'center' }}>
                            <button className="recordPage__container--menu-items-btn" onClick={() => { setEditUserModalVisible(true) }}>
                                Thay đổi thông tin
                            </button>
                        </div>
                    </div>
                    <div className="recordPage__container--avatar col-lg-4 col-12">
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className="recordPage__container--avatar-img">
                                <h1>{user.username.charAt(0).toUpperCase()}</h1>
                            </div>
                            <div className="recordPage__container--avatar-select">
                                <button className="recordPage__container--avatar-select-btn">
                                    Chọn ảnh
                                </button>
                            </div>
                            <div className="recordPage__container--avatar-request">
                                Dụng lượng file tối đa 1 MB <br /> Định dạng: .JPEG, .PNG
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <UserRecord userData={user} visible={editUserModalVisible} setVisible={setEditUserModalVisible} />
        </div>
    )
}

export default UserRecordContainer;