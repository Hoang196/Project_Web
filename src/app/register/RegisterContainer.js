import React, { useState } from "react";
import { Button, DatePicker, Form, Input, notification, Select } from "antd";
import "./RegisterContainer.scss"
import 'antd/dist/antd.css';
import { registerApi } from "../../services/api/AccountApi";


const RegisterForm = () => {

    const [loading, setLoading] = useState(false)

    const onSubmit = async (values) => {
        values.dob = values.dob.format("DD-MM-YYYY")
        setLoading(true)
        const { data, success } =
            await registerApi(values.email, values.username, values.password, values.phone_number, values.gender, values.dob)

        if (success) {
            if (data.data.status_code === 200) {
                window.location.reload()
                setLoading(false)
                alert("Bạn đã đăng kí thành công!")
                window.location.href = "/login"
            }
        } else {
            setLoading(false)
            await notification.error({
                message: "Error",
                description: data.data.detail
            })
        }
    }


    return (
        <div className="register__page container-fluid">
            <div className={"register-form"}>
                <div>
                    <p style={{ fontSize: "25px", fontWeight: "600", color: "red" }}>
                        Đăng ký
                    </p>
                </div>
                <div>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 7,
                        }}
                        wrapperCol={{
                            span: 20,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onSubmit}
                    // onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    type: "email",
                                    message: 'Please input your email!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Tên sử dụng"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Mật khẩu"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            label="Số điện thoại"
                            name="phone_number"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone number!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="gender"
                            label="Giới tính"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select your gender!',
                                },
                            ]}
                        >
                            <Select
                                placeholder="Select a option gender"
                                allowClear
                            >
                                <Select.Option value="male">male</Select.Option>
                                <Select.Option value="female">female</Select.Option>
                                <Select.Option value="other">other</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="Ngày sinh"
                            name="dob"
                        >
                            <DatePicker size="large" picker="date" className={"register-form-dob"} />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 7,
                                span: 16,
                            }}
                        >
                            <Button className="button" loading={loading} type="primary" htmlType="submit" size="default">
                                Đăng ký
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <hr />
                <div className={"register__footer"}>
                    Bạn đã có tài khoản? <a href={"/login"}>Đăng nhập</a>
                </div>
            </div>
        </div>
    )
}
export default RegisterForm