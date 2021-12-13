import { Modal } from "antd";
import React, { useContext, useState } from "react";
import AppContext from "../../AppContext";
import "./Chat.scss"

const Chat = (props) => {
    const { user } = useContext(AppContext)
    const name = props.name


    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <Modal
            visible={props.visible}
            title={`Nhắn tin với: ${name}`}
            onCancel={() => props.setVisible(false)}
            footer={null}
            width={"600px"}
        >
            <div className="chat__container">
                <ul className="chat__container--message"></ul>
                <form className="chat__container--send">
                    <input type="text" className="chat__container--send-input"></input>
                    <button className="chat__container--send-btn" onSubmit={(e) => handleSubmit(e)}>Gửi</button>
                </form>
            </div>

        </Modal>
    )
}
export default Chat;