import React, {useContext, useEffect, useState} from "react";
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {List, Avatar, Space, Form, Input, Upload, Button, notification} from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import "./CommentContainer.scss"
import {createComment, getCommentByUserId} from "../../services/api/Comment";
import AppContext from "../../AppContext";
import paths from "../../router/paths";

const CommentContainer = (props) => {

    const [listComment, setListComment] = useState([])
    const [checkComment, setCheckComment] = useState(false)
    const { user } = useContext(AppContext)
    const userData = props.user

    useEffect(() => {
        getCommentById()
    }, [checkComment])

    const getCommentById = async () => {
        const {data, success} = await getCommentByUserId(userData._id)
        if (success) {
            setListComment(data.data)
            console.log(data.data)
        } else {
            notification.error("Không tìm thấy bình luận nào!")
        }
    }

    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );

    const handleSubmit = async (e) => {
        const comment = {
            userIdFrom: user._id,
            userIdTo: userData._id,
            userNameFrom: user.username,
            userNameTo: userData.username,
            description: e.description,
            content: e.content
        }
        const {data, success} = await createComment(comment)
        if (success) {
            if (data.data.status_code === 200) {
                await notification.success({
                    message: "Success",
                    description: data.data.detail,
                })
            }
        } else {
            await notification.error({
                message: "Error",
                description: data.data.detail,
            })
        }
        setCheckComment(!checkComment)
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
                                <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                            ]}
                        >
                            <List.Item.Meta
                                // avatar={<Avatar src={item.avatar} />}
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

export default CommentContainer