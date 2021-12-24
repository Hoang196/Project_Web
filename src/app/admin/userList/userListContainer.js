import React, { useEffect, useState } from 'react'
import "./userListContainer.scss"
import paths from "../../../router/paths";
import 'antd/dist/antd.css';
import { Table, Space } from "antd";
import { getAllUserData, deleteUser, getUserDataById } from "../../../services/api/getUserData";
import { notification, Tooltip } from "antd";
import {DoubleRightOutlined, DeleteOutlined, ToolOutlined} from '@ant-design/icons';
import UserRecord from "../../userRecord/UserRecord";
import {getPostDataByUserId} from "../../../services/api/PostData";

let dataUsersBase;
let dataUsers = [];

const UserListContainerAdmin = (props) => {
    const [Data, setData] = useState([])
    const [userSelected, setUserSelected] = useState({})
    const [editUserModalVisible, setEditUserModalVisible] = useState(false)

    useEffect(() => {
        getAllUser()
    }, [])

    const getAllUser = async () => {
        const { data, success } = await getAllUserData()
        if (success) {
            dataUsersBase = data.data;
            for (let i = 0; i < dataUsersBase.length; i++) {
                dataUsers.push({
                    key: dataUsersBase[i]._id,
                    id: dataUsersBase[i]._id,
                    email: dataUsersBase[i].email,
                    username: dataUsersBase[i].username,
                    phoneNumber: dataUsersBase[i].phoneNumber,
                    gender: dataUsersBase[i].gender,
                    address: dataUsersBase[i].address,
                });
            }
            setData(dataUsers)
        }
    }

    let dataUserSearch = [];
    function onchange(event) {
        for (let i = 0; i < dataUsersBase.length; i++) {
            if (dataUsersBase[i].email.includes(event.target.value) || dataUsersBase[i].username.includes(event.target.value)) {
                dataUserSearch.push({
                    key: dataUsersBase[i]._id,
                    id: dataUsersBase[i]._id,
                    email: dataUsersBase[i].email,
                    username: dataUsersBase[i].username,
                    phoneNumber: dataUsersBase[i].phoneNumber,
                    gender: dataUsersBase[i].gender,
                    address: dataUsersBase[i].address,
                });
            }
        }
        setData(dataUserSearch)
    }

    const unavailableUser = async (id) => {
        if (window.confirm('Bạn đồng ý xóa người dùng này?')) {
            const { data, success } = await deleteUser(id)
            if (success) {
                window.location.reload()
                await notification.success({
                    message: "Success",
                    description: data.data.detail,
                })
            }
            else {
                notification.error({
                    message: "Error",
                    description: data.data.detail
                })
            }
        }
    }

    const exitRecord = async (id) => {
        const { data, success } = await getUserDataById(id)
        if (success) {
            setUserSelected(data.data)
            setEditUserModalVisible(true)
        }
    }

    const onSearch = (e) => {
        e.preventDefault()
    }

    const { Column } = Table;
    return (
        <div className={"container-fluid userAdmin__base"}>

            <div className={"userAdmin__header"}>
                <form className="form-inline userAdmin__header--search" onSubmit={(e) => onSearch(e)}
                      onChange={(key) => onchange(key)}>
                    <input className="userAdmin__header--search-input" type="search" placeholder="Nhập tên, email"
                           aria-label="Search"/>
                    <button className="userAdmin__header--search-btn" type="submit" >Tìm kiếm</button>
                </form>
            </div>

            <div className={"userAdmin__container col-12 col-lg-12"}>
                <Table dataSource={Data} className="userAdmin-table-mobile">
                    <Column title="Email" dataIndex="email" key="email" className="userAdmin-table-mobile" />
                    <Column title="Tên người dùng" dataIndex="username" key="username" className="userAdmin-table-mobile" />
                    <Column title="Phone Number" dataIndex="phoneNumber" key="phoneNumber" className="userAdmin-table-mobile" />
                    <Column title="Giới tính" dataIndex="gender" key="gender" className="userAdmin-table-mobile" />
                    <Column title="Địa chỉ" dataIndex="address" key="address" className="userAdmin-table-mobile" />
                    <Column
                        title="Hoạt động"
                        key="action"
                        render={(text, record) => (
                            <Space size="middle">
                                <Tooltip title={"Xem chi tiết"} placement={"bottom"}>
                                    <span className="mx-1 post-action-btn">
                                        <DoubleRightOutlined style={{ color: "blue", fontSize: "14px", marginBottom: "6px" }} onClick={() => {
                                            window.location.href = paths.UserPage(record.id)
                                        }} />
                                    </span>
                                </Tooltip>
                                <Tooltip title={"Sửa thông tin người dùng"} placement={"bottom"}>
                                    <span className="mx-1 post-action-btn" onClick={() => { exitRecord(record.id)}}>
                                        <ToolOutlined style={{ color: "black", fontSize: "14px", marginBottom: "6px" }} />
                                    </span>
                                </Tooltip>
                                <Tooltip title={"Xóa người dùng"} placement={"bottom"}>
                                    <span className="mx-1 post-action-btn" onClick={() => { unavailableUser(record.id) }}>
                                        <DeleteOutlined style={{ color: "red", fontSize: "14px", marginBottom: "6px" }} />
                                    </span>
                                </Tooltip>
                            </Space>
                        )}
                        className="userAdmin-table-mobile"
                    />
                </Table>
            </div>
            <UserRecord userData={userSelected} visible={editUserModalVisible} setVisible={setEditUserModalVisible} />
        </div>
    )
}
export default UserListContainerAdmin