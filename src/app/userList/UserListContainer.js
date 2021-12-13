import React, { useEffect, useState } from 'react'
import "./UserListContainer.scss"
import paths from "../../router/paths";
import 'antd/dist/antd.css';
import { Table, Space } from "antd";
import { getAllUserData } from "../../services/api/getUserData";

let dataUsersBase;
let dataUsers = [];

const UserListContainer = (props) => {
    const [Data, setData] = useState([])

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
                    dateOfBirth: dataUsersBase[i].dateOfBirth,
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
                    dateOfBirth: dataUsersBase[i].dateOfBirth,
                });
            }
        }
        console.log("ndh22", dataUserSearch)
        setData(dataUserSearch)
    }

    const { Column } = Table;
    return (
        <div className={"container-fluid mt-3 user__base col-12 col-lg-10"}>

            <div className={"user__header"}>
                <div className={"user__header--search"}>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">Tìm kiếm</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Default" placeholder="Nhập tên, email" onChange={(event) => onchange(event)} />
                </div>
            </div>

            <div className={"user__container col-12 col-lg-12"}>
                <Table dataSource={Data} className="user-table-mobile">
                    <Column title="Email" dataIndex="email" key="email" className="user-table-mobile" />
                    <Column title="Tên người dùng" dataIndex="username" key="username" className="user-table-mobile" />
                    <Column title="Phone Number" dataIndex="phoneNumber" key="phoneNumber" className="user-table-mobile" />
                    <Column title="Gender" dataIndex="gender" key="gender" className="user-table-mobile" />
                    {/* <Column title="Date Of Birth" dataIndex="dateOfBirth" key="dateOfBirth" className="user-table-mobile" /> */}
                    <Column
                        title="Action"
                        key="action"
                        render={(text, record) => (
                            <Space size="middle">
                                <a href={`${paths.UserPage(record.id)}`}>Xem {record.username}</a>
                            </Space>
                        )}
                        className="user-table-mobile"
                    />
                </Table>
            </div>

        </div>
    )
}
export default UserListContainer