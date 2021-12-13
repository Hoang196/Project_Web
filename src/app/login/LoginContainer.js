import { notification } from "antd";
import 'antd/dist/antd.css';
import React, { useContext, useState, useEffect } from "react";
import AppContext from "../../AppContext";
import { loginApi, registerApi } from "../../services/api/AccountApi";
import firebase from "../firebase/index";
import "./LoginContainer.scss";
import paths from "../../router/paths";
import ValidatorLogin from "./ValidatorLogin";

const LoginContainer = () => {

    const [loading, setLoading] = useState(false)
    const { setUser } = useContext(AppContext)

    useEffect(() => {
        ValidatorLogin({
            form: '#form-login',
            formGroupSelector: '.login-form-group',
            errorSelector: '.login-form-message',
            rules: [
                ValidatorLogin.isEmail('#email'),
                ValidatorLogin.minLength('#password', 6)
            ],
            onSubmit: function (data) {
                //Call API
                onSubmit(data);
            }
        });
    })

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
        let google_provider = new firebase.auth.GoogleAuthProvider();
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
        let facebook_provider = new firebase.auth.FacebookAuthProvider();
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
            <div className={"login__page--container"}>
                <div className="login-main">
                    <form className="login-form" id="form-login" >
                        <h3 className="login-heading">Thành viên đăng nhập</h3>
                        <p className="login-desc">Chào mừng bạn đến với cộng đồng đồ cũ</p>

                        <div className="login-spacer" />

                        <div className="login-form-group">
                            <label htmlFor="email" className="login-form-label">Email</label>
                            <input id="email" name="email" type="text" placeholder="VD: 19020303@vnu.edu.vn"
                                className="login-form-control" />
                            <span className="login-form-message" />
                        </div>

                        <div className="login-form-group">
                            <label htmlFor="password" className="login-form-label">Mật khẩu</label>
                            <input id="password" name="password" type="password" placeholder="Nhập mật khẩu"
                                className="login-form-control" />
                            <span className="login-form-message" />
                        </div>

                        <a className="login-form-changePass" href={"/login"} onClick={() => { alert("Tính năng đang được bảo trì") }}>Quên mật khẩu?</a>

                        <button className="login-form-submit">Đăng nhập</button>
                    </form>
                </div>
                <div style={{ display: "flex" }}>
                    <hr style={{ width: "100%", marginTop: "15px" }} />
                    <p style={{ margin: "0 5px", fontSize: "17px", color: "#9b9b9bFF", fontWeight: "400" }} >hoặc</p>
                    <hr style={{ width: "100%", marginTop: "15px" }} />
                </div>

                <div className="login row">
                    <div className="login-box">
                        <div className="login-box-google" onClick={SignInWithGoogle}>
                            <div className="login-box-google-logo" />
                            <div className="login-box-google-label">Google</div>
                        </div>
                    </div>
                    <div className="login-box">
                        <div className="login-box-facebook" onClick={SignInWithFacebook}>
                            <div className="login-box-facebook-logo" />
                            <div className="login-box-facebook-label">Facebook</div>
                        </div>
                    </div>
                </div>

                <hr />
                <div className={"login__footer"}>
                    Bạn chưa có tài khoản? <a className="login-form-font" href={"/register"}>Đăng ký ngay</a>
                </div>
            </div>
        </div>
    )
}
export default LoginContainer