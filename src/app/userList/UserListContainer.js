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
            console.log("ndh", data);
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
        console.log("ndh22", dataUserSearch)
        setData(dataUserSearch)
    }

    const onSearch = (e) => {
        e.preventDefault()
    }

    const { Column } = Table;
    return (
        <div className={"container-fluid mt-3 user__base col-11 col-lg-10"}>

            <div className={"user__header"}>
                <form className="form-inline user__header--search" onSubmit={(e) => onSearch(e)}
                    onChange={(key) => onchange(key)}>
                    <input className="user__header--search-input" type="search" placeholder="Nhập tên, email"
                           aria-label="Search"/>
                    <button className="user__header--search-btn" type="submit" >Tìm kiếm</button>
                </form>
            </div>

            <div className={"user__container col-12"}>
                <Table dataSource={Data} pagination={{ pageSize: 8 }} className="user-table-mobile">
                    <Column title="Email" dataIndex="email" key="email" className="user-table-mobile" />
                    <Column title="Tên người dùng" dataIndex="username" key="username" className="user-table-mobile" />
                    <Column title="Phone Number" dataIndex="phoneNumber" key="phoneNumber" className="user-table-mobile" />
                    <Column title="Giới tính" dataIndex="gender" key="gender" className="user-table-mobile" />
                     <Column title="Địa chỉ" dataIndex="address" key="address" className="user-table-mobile" />
                    <Column
                        title="Hoạt động"
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