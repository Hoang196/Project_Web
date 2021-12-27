import React, {useContext, useEffect, useState} from "react";
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {List, Space, Form, Input, Button, notification} from 'antd';
import {MessageOutlined, LikeOutlined, DislikeOutlined, DeleteOutlined, EditOutlined} from '@ant-design/icons';
import "./CommentContainer.scss"
import {addEmoticon, createComment, deleteComment, getCommentByUserId} from "../../services/api/Comment";
import AppContext from "../../AppContext";
import paths from "../../router/paths";
import {getUserDataById} from "../../services/api/getUserData";

let checkLike = false
let checkDislike = false

const CommentContainer = (props) => {

    const [listComment, setListComment] = useState()
    const [userData, setUserData] = useState([])
    const [checkComment, setCheckComment] = useState(1)
    const { user } = useContext(AppContext)
    const userDataId = props.userId

    useEffect(() => {
        getUserData()
        getCommentById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checkComment])

    const getUserData = async () => {
        const { data, success } = await getUserDataById(userDataId)
        if (success) {
            setUserData(data.data)
        } else {
            notification.error({
                message: "Error",
                description: data.data.detail
            })
        }
    }

    const getCommentById = async () => {
        const {data, success} = await getCommentByUserId(userDataId)
        if (success) {
            setListComment(data.data)
        } else {
            notification.error("Không tìm thấy bình luận nào!")
        }
    }

    const handleSubmit = async (e) => {
        const comment = {
            userIdFrom: user._id,
            userIdTo: userData._id,
            userNameFrom: user.username,
            userNameTo: userData.username,
            description: e.description.trim(),
            content: e.content.trim()
        }
        const {data, success} = await createComment(comment)
        if (success) {
            if (data.data.status_code === 200) {
                await notification.success({
                    message: "Success",
                    description: data.data.detail,
                })
                setCheckComment(checkComment => checkComment + 1)
            }
        } else {
            await notification.error({
                message: "Error",
                description: data.data.detail,
            })
        }
    }

    const handleDelete = async (id) => {
        if (window.confirm('Bạn đồng ý xóa bình luận?')) {
            const {data, success} = await deleteComment(id)
            if (success) {
                await notification.success({
                    message: "Success",
                    description: data.data.detail,
                })
                setCheckComment(checkComment => checkComment + 1)
            } else {
                notification.error({
                    message: "Error",
                    description: data.data.detail
                })
            }
        }
    }

    const handleLike = async (item) => {
        checkLike = true
        let element = document.getElementById(item._id)
        let obj
        const arrayLike = item.numberLike
        for (let i = 0; i < arrayLike.length; i++) {
            if (arrayLike[i] === user._id) {
                obj = {
                    id: item._id,
                    userId: user._id,
                    event: "unlike"
                }
                element.style.color = "#999"
                checkLike = false
                break
            }
        }
        if (checkLike === true) {
            obj = {
                id: item._id,
                userId: user._id,
                event: "like"
            }
            element.style.color = "blue"
        }
        const {data, success} = await addEmoticon(obj)
        if (success) {
            setCheckComment(checkComment => checkComment + 1)
        }
    }

    const handleDislike = async (item) => {
        checkDislike = true
        let element = document.getElementById(item._id + "2")
        let obj
        const arrayDislike = item.numberDislike
        for (let i = 0; i < arrayDislike.length; i++) {
            if (arrayDislike[i] === user._id) {
                obj = {
                    id: item._id,
                    userId: user._id,
                    event: "unDislike"
                }
                element.style.color = "#999"
                checkDislike = false
                break
            }
        }
        if (checkDislike === true) {
            obj = {
                id: item._id,
                userId: user._id,
                event: "dislike"
            }
            element.style.color = "blue"
        }
        const {data, success} = await addEmoticon(obj)
        if (success) {
            setCheckComment(checkComment => checkComment + 1)
        }
    }

    return (
        <div className="container-fluid commentPage col-12">
            <div className="commentPage__header">
                <h2>Bình luận & Đánh giá người dùng</h2>
                <Form
                    labelCol={{
                        span: 3,
                    }}
                    wrapperCol={{
                        span: 19,
                    }}
                    onFinish={handleSubmit}
                >
                    <Form.Item
                        name={'description'}
                        label={"Mô tả"}
                        rules={[
                            {
                                required: true,
                            },
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={'content'}
                        label={"Nội dung"}
                        rules={[
                            {
                                required: true,
                            },
                        ]}>
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item wrapperCol={{
                        offset: 11,
                        span: 12,
                    }}>
                        <Button type="primary" style={{ right: "0px" }} htmlType="submit" size="large" className="comment-btn">
                            Bình luận
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div className="commentPage__container">
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        pageSize: 3,
                    }}
                    dataSource={listComment}
                    renderItem={item => (
                        <List.Item
                            key={item.userNameFrom}
                            actions={[
                                <Space>
                                    <LikeOutlined id={item._id}
                                                  className={item.numberLike.map((id) => {
                                                      return (id === user._id) ? "icon-text icon-like"  : "icon-text"
                                                  })}
                                                  onClick={() => handleLike(item)}/>
                                    {item.numberLike.length - 1}
                                </Space>,
                                <Space>
                                    <DislikeOutlined id={item._id + "2"}
                                                     className={item.numberDislike.map((id) => {
                                                         return (id === user._id) ? "icon-text icon-like"  : "icon-text"
                                                     })}
                                                     onClick={() => handleDislike(item)}/>
                                    {item.numberDislike.length - 1}
                                </Space>,
                                <Space>
                                    <MessageOutlined className="icon-text icon-message"/>
                                </Space>,
                                <Space className={user._id === item.userIdFrom || user.exist === "ADMIN" ? "" : "disable-icon"}>
                                    <DeleteOutlined className="icon-text icon-delete" onClick={() => handleDelete(item._id)}/>
                                </Space>,
                            ]}
                        >
                            <List.Item.Meta
                                avatar={<h1 className="avatar-comment">{item.userNameFrom.charAt(0).toUpperCase()}</h1>}
                                title={<a href={paths.UserPage(item.userIdFrom)}>{item.userNameFrom}</a>}
                                description={item.description}
                            />
                            {item.content}
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

export default React.memo(CommentContainer)