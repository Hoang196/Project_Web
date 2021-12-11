import { Button, Checkbox, Form, Input, notification } from "antd";
import 'antd/dist/antd.css';
import React, { useContext, useState } from "react";
import AppContext from "../../AppContext";
import { loginApi, registerApi } from "../../services/api/AccountApi";
import firebase from "../firebase/index";
import "./LoginContainer.scss";
import paths from "../../router/paths";

const LoginContainer = () => {

    const [loading, setLoading] = useState(false)
    const { setUser } = useContext(AppContext)

    const handleSignIn = async (user) => {
        const { data, success } = await loginApi(user.email, user.password)
        if (success) {
            if (data.data.status_code === 200) {
                setUser(data.data.user)
                window.location.href = paths.HomePage
                setLoading(false)
                await notification.success({
                    message: "Login success",
                    description: data.data.detail,
                })
            }
        } else {
            const { data, success } = await registerApi(user.email, user.username, user.password, user.phone_number, user.gender, user.dob)
            if (success) {
                if (data.data.status_code === 200) {
                    onSubmit(user)
                }
            } else {
                await notification.error({
                    message: "Error",
                    description: data.data.detail
                    // description: "Đăng nhập không thành công"
                })
            }
        }
    }

    const SignInWithGoogle = () => {
        var google_provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(google_provider)
            .then((re) => {
                const newUser = re.additionalUserInfo.profile;
                const user = {
                    email: newUser.email,
                    username: newUser.name,
                    password: newUser.id,
                    phone_number: "Chưa có",
                    gender: "Chưa có",
                    dob: "Chưa có"
                }
                // console.log("ndhh", user)
                handleSignIn(user);
            })
            .catch((err) => {
                notification.error({
                    message: "Error",
                    description: "Đăng nhập không thành công"
                })
            })
    }

    const SignInWithFacebook = () => {
        var facebook_provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(facebook_provider)
            .then((re) => {
                console.log("ndhh", re)
                const newUser = re.additionalUserInfo.profile;
                const user = {
                    email: newUser.email,
                    username: newUser.name,
                    password: newUser.id,
                    phone_number: "Chưa có",
                    gender: "Chưa có",
                    dob: "Chưa có"
                }
                console.log("ndhh", user)
                // handleSignIn(user);
            })
            .catch((err) => {
                notification.error({
                    message: "Error",
                    description: "Đăng nhập không thành công"
                })
            })
    }

    const onSubmit = async (values) => {
        setLoading(true)
        const { data, success } = await loginApi(values.email, values.password)
        if (success) {
            if (data.data.status_code === 200) {
                setUser(data.data.user)
                if (data.data.user.admin === true) {
                    window.location.href = paths.product
                } else {
                    window.location.href = paths.HomePage
                }
                setLoading(false)
                await notification.success({
                    message: "Login success",
                    description: data.data.detail,
                })
            }
        } else {
            setLoading(false)
            notification.error({
                message: "Error",
                description: data.data.detail
            })
        }
    }


    return (
        <div className="login__page container-fluid">
            <div className={"login-form"}>
                <div className={"title"}>
                    <p style={{ fontSize: "25px", fontWeight: "600", color: "red" }} >
                        Đăng nhập
                    </p>
                </div>
                <div className={"content"}>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 5,
                        }}
                        wrapperCol={{
                            span: 20,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onSubmit}
                    >
                        <Form.Item
                            label="Email"
                            name="email"
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
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 5,
                                span: 20,
                            }}
                        >
                            <Checkbox>Nhớ tài khoản</Checkbox>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 6,
                                span: 16,
                            }}
                        >
                            <Button className={"button"} loading={loading} type="primary" htmlType="submit" size="large">
                                Đăng nhập
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <div style={{ display: "flex" }}>
                    <hr style={{ width: "100%" }} />
                    <p style={{ margin: "0 5px", fontSize: "17px", color: "#9b9b9bFF", fontWeight: "400" }} >hoặc</p>
                    <hr style={{ width: "100%" }} />
                </div>

                <div className="login row">
                    <div className="login-box">
                        <div className="login-box-google" onClick={SignInWithGoogle}>
                            <div className="login-box-google-logo"></div>
                            <div className="login-box-google-label">Google</div>
                        </div>
                    </div>
                    <div className="login-box">
                        <div className="login-box-facebook" onClick={SignInWithFacebook}>
                            <div className="login-box-facebook-logo"></div>
                            <div className="login-box-facebook-label">Facebook</div>
                        </div>
                    </div>
                </div>

                <hr />
                <div className={"login__footer"}>
                    Bạn chưa có tài khoản? <a href={"/register"}>Đăng ký ngay</a> <br />
                    <a href={"/login"} onClick={() => { alert("Tính năng đang được bảo trì") }}>Quên mật khẩu?</a>
                </div>
            </div>
        </div>
    )
}
export default LoginContainer