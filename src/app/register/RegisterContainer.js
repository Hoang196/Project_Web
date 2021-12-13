import React, { useState, useEffect } from "react";
import { notification } from "antd";
import "./RegisterContainer.scss"
import 'antd/dist/antd.css';
import { registerApi } from "../../services/api/AccountApi";
import ValidatorRegister from './ValidatorRegister';


const RegisterForm = () => {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        ValidatorRegister({
            form: '#form-register',
            formGroupSelector: '.register-form-group',
            errorSelector: '.register-form-message',
            rules: [
                ValidatorRegister.isEmail('#email'),
                ValidatorRegister.isRequired('#name', 'Vui lòng nhập tên của bạn'),
                ValidatorRegister.isRequired('#phoneNumber', 'Vui lòng nhập số điện thoại'),
                ValidatorRegister.minLength('#password', 6),
                ValidatorRegister.isConfirmed('#password_confirmation', function () {
                    return document.querySelector('#form-register #password').value;
                }, 'Mật khẩu nhập lại không chính xác'),
            ],
            onSubmit: function (data) {
                //Call API
                onSubmit(data);
            }
        });
    })

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
            <div className={"register__page--container"}>
                <div className="register-main">
                    <form className="register-form" id="form-register">
                        <h3 className="register-heading">Thành viên đăng ký</h3>
                        <p className="register-desc">Chào mừng bạn đến với cộng đồng đồ cũ</p>

                        <div className="register-spacer" />

                        <div className="register-form-group">
                            <label htmlFor="email" className="register-form-label">Email</label>
                            <input id="email" name="email" type="text" placeholder="VD: 19020303@vnu.edu.vn"
                                className="register-form-control" />
                            <span className="register-form-message" />
                        </div>

                        <div className="register-form-group">
                            <label htmlFor="name" className="register-form-label">Tên</label>
                            <input id="name" name="name" type="name" placeholder="VD: HoangCosNY"
                                className="register-form-control" />
                            <span className="register-form-message" />
                        </div>

                        <div className="register-form-group">
                            <label htmlFor="phoneNumber" className="register-form-label">Số điện thoại</label>
                            <input id="phoneNumber" name="phoneNumber" type="text" placeholder="VD: 0123456789"
                                className="register-form-control" />
                            <span className="register-form-message" />
                        </div>

                        <div className="register-form-group">
                            <label htmlFor="password" className="register-form-label">Mật khẩu</label>
                            <input id="password" name="password" type="password" placeholder="Cần có ít nhất 6 kí tự"
                                className="register-form-control" />
                            <span className="register-form-message" />
                        </div>

                        <div className="register-form-group">
                            <label htmlFor="password_confirmation" className="register-form-label">Nhập lại mật khẩu</label>
                            <input id="password_confirmation" name="password_confirmation" type="password" placeholder="Nhập lại mật khẩu"
                                className="register-form-control" />
                            <span className="register-form-message" />
                        </div>

                        <button className="register-form-submit">Đăng ký</button>
                    </form>
                </div>

                <hr />
                <div className={"register__footer"}>
                    Bạn đã có tài khoản? <a className="register-form-font" href={"/login"}>Đăng nhập ngay</a>
                </div>
            </div>
        </div>
    )
}
export default RegisterForm