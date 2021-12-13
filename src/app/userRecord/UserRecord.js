import { useContext } from 'react'
import AppContext from "../../AppContext";
import { Button, Form, Input, Modal, notification, Select, DatePicker } from "antd";
import { editUserData } from "../../services/api/getUserData";
import { loginApi } from "../../services/api/AccountApi";
import "./UserRecordContainer.scss"

const UserRecord = (props) => {

    const { setUser } = useContext(AppContext)
    const user = props.userData;

    const handleSubmit = async (value) => {
        let valueData = {}

        valueData._id = user._id
        valueData.email = value.email || user.email
        valueData.username = value.username || user.username
        valueData.password = value.password
        valueData.phoneNumber = value.phoneNumber || user.phoneNumber
        valueData.gender = value.gender || user.gender
        valueData.dateOfBirth = value.dateOfBirth ? value.dateOfBirth.format("DD-MM-YYYY") : user.dateOfBirth

        editUser(valueData)
    }

    const editUser = async (value) => {
        const password = prompt("Nhập mật khẩu để xác nhận")
        const { data, success } = await loginApi(user.email, password)
        if (success) {
            if (data.data.status_code === 200) {
                value.password = value.password || password
                const { data, success } = await editUserData(value)
                if (success) {
                    alert("Thay đổi thành công")
                    if (value.password !== password) {
                        window.location.href = "/login"
                    } else {
                        setUser(data.data.user)
                        window.location.reload()
                    }
                    notification.success({
                        message: "Success",
                        description: data.data.detail,
                    })
                }
                props.setVisible(false)
            }
        } else {
            alert("Mật khẩu không chính xác")
        }
    }

    return (
        <Modal
            visible={props.visible}
            title={`Chỉnh sửa thông tin của bạn`}
            onCancel={() => props.setVisible(false)}
            footer={null}
            width={"800px"}
            style={{ overflow: "hidden" }}
        >
            <Form
                labelCol={{
                    span: 5,
                }}
                wrapperCol={{
                    span: 17,
                }}
                onFinish={handleSubmit}

            >
                <Form.Item
                    name={'email'}
                    label={"Email"} >
                    <Input defaultValue={user.email} />
                </Form.Item>

                <Form.Item
                    name={'username'}
                    label={"Tên sử dụng"} >
                    <Input defaultValue={user.username} />
                </Form.Item>

                <Form.Item
                    name={'password'}
                    label={"Mật khẩu"} >
                    <Input defaultValue={user.password} />
                </Form.Item>

                <Form.Item
                    name={'phoneNumber'}
                    label={"Số điện thoại"} >
                    <Input defaultValue={user.phoneNumber} />
                </Form.Item>

                <Form.Item
                    name="gender"
                    label="Giới tính"

                >
                    <Select
                        allowClear
                    >
                        <Select.Option value="male">male</Select.Option>
                        <Select.Option value="female">female</Select.Option>
                        <Select.Option value="other">other</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Ngày sinh"
                    name="dateOfBirth"
                >
                    <DatePicker size="large" picker="date" style={{ width: "100%", height: "32px" }} />
                </Form.Item>

                <Form.Item wrapperCol={{
                    offset: 10,
                    span: 10,
                }}>
                    <Button className="record-button" type="primary" size="default" htmlType="submit" >
                        Lưu lại
                    </Button>
                </Form.Item>

            </Form>
        </Modal>
    )
}
export default UserRecord;