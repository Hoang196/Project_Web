import React from "react"
import { useState } from "react"
import "./UserInfoContainer.scss"
import Chat from "../../chat/Chat"
// import { Button } from "antd"

const UserInfoContainer = (props) => {

    const [newPostModalVisible, setNewPostModalVisible] = useState(false)

    const user = props.user
    // const isOwner = props.isOwner
    const name = user.username

    return (
        <div className={"info-content"}>
            <h5>Thông tin cá nhân</h5>
            <div>
                <strong>Tên:</strong> <span>{user.username}</span>
            </div>
            <div>
                <strong>Ngày sinh:</strong> <span>{user.dateOfBirth}</span>
            </div>
            <div>
                <strong>Giới tính:</strong> <span>{user.gender}</span>
            </div>
            <hr />
            <div>
                <strong>Mã ID:</strong> <span>{user._id}</span>
            </div>
            <div>
                <strong>Email:</strong> <span>{user.email}</span>
            </div>
            <div>
                <strong>Số điện thoại: </strong> <span>{user.phoneNumber}</span>
            </div>
            {/* <Button className={"message"} disabled={isOwner === true ? true : false}
                type={"primary"} size={"large"} onClick={() => setNewPostModalVisible(true)}>
                Nhắn tin cá nhân
            </Button> */}

            <Chat name={name} visible={newPostModalVisible} setVisible={setNewPostModalVisible} />
        </div>
    )
}
export default UserInfoContainer;