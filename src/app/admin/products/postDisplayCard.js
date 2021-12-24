import React, { useContext, useState } from 'react'
import { notification, Tooltip } from "antd";
import "../../products/component/PostDisplayCard.scss"
import {DoubleRightOutlined, DeleteOutlined, ToolOutlined} from '@ant-design/icons';
import paths from "../../../router/paths";
import AppContext from "../../../AppContext";
import UserListPostModal from "../../user/component/UserListPostModal";
import { deletePost } from "../../../services/api/PostData";
import EditPost from "../../post/EditPost";

const PostDisplayCardAdmin = (props) => {
    const { user } = useContext(AppContext)
    const post = props.postData
    const [modalUserPostVisible, setModalUserPostVisible] = useState(false)
    const [editPostModalVisible, setEditPostModalVisible] = useState(false)

    const unavailablePost = async (id) => {
        if (window.confirm('Bạn đồng ý xóa sản phẩm này?')) {
            const { data, success } = await deletePost(id)
            if (success) {
                window.location.reload()
                await notification.success({
                    message: "Success",
                    description: data.data.detail,
                })
            }
            else {
                notification.error({
                    message: "Error",
                    description: data.data.detail
                })
            }
        }
    }

    return (
        <div className={"post-card-item-card"}>
            <Tooltip title={"Sản phẩm có sẵn"}>
                <img className={"post-card-image"} src={post.main_image} alt={"Can't load this img"} />
            </Tooltip>
            <div className={"post-card-item-card__text-wrapper"}>
                <h2 className={"post-card-item-card-title"}>{post.name} </h2>
                <div className={"post-card-item-card__text-details-wrapper"}>

                    <Tooltip title={"Sửa thông tin sản phẩm"} placement={"bottom"}>
                        <span className="mx-1 post-action-btn" onClick={() => { setEditPostModalVisible(true) }}>
                            <ToolOutlined style={{ color: "black", fontSize: "20px" }} />
                        </span>
                    </Tooltip>
                    <Tooltip title={"Xóa sản phẩm"} placement={"bottom"}>
                        <span className="mx-1 post-action-btn" onClick={() => { unavailablePost(post._id) }}>
                            <DeleteOutlined style={{ color: "red", fontSize: "20px" }} />
                        </span>
                    </Tooltip>
                    <Tooltip title={"Xem chi tiết"} placement={"bottom"}>
                        <span className="mx-1 post-action-btn">
                            <DoubleRightOutlined style={{ color: "blue", fontSize: "20px" }} onClick={() => {
                                window.location.href = paths.PostDetail(post._id)
                            }} />
                        </span>
                    </Tooltip>

                </div>
            </div>
            <UserListPostModal postIdTo={post._id} userIdTo={post.owner_id} visible={modalUserPostVisible} setVisible={setModalUserPostVisible} user={user} />
            <EditPost postData={post} newPostId={post._id} visible={editPostModalVisible} setVisible={setEditPostModalVisible} />
        </div>
    )
}
export default React.memo(PostDisplayCardAdmin);