import React, { useContext, useState } from 'react'
import { notification, Tooltip } from "antd";
import "./PostDisplayCard.scss"
import { DeleteOutlined, DoubleRightOutlined, ToolOutlined, InteractionOutlined } from '@ant-design/icons';
import paths from "../../router/paths";
import AppContext from "../../AppContext";
import UserListPostModal from "../user/component/UserListPostModal";
import { deletePost } from "../../services/api/PostData";
import EditPost from "./EditPost";

const PostDisplayCard = (props) => {

    const { user } = useContext(AppContext)
    const post = props.postData
    const isOwner = props.isOwner
    const isChoosing = props.isChoosing
    const isSelected = props.isSelected
    const setPostSelected = props.setPostSelected
    const [editPostModalVisible, setEditPostModalVisible] = useState(false)

    const unavailablePost = async (id) => {
        if (window.confirm('Bạn đồng ý xóa sản phẩm?')) {
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

    const [modalUserPostVisible, setModalUserPostVisible] = useState(false)

    return (
        <div className={post._id !== isSelected ? "post-card-item-card" : "post-card-item-card selected-post"}
            onClick={isChoosing ? () => { setPostSelected(post._id) } : null}>
            <Tooltip title={"Sản phẩm có sẵn"}>
                <img className={"post-card-image"} src={post.main_image} alt={"Can't load this img"} />
            </Tooltip>
            <div className={"post-card-item-card__text-wrapper"}>
                <h2 className={"post-card-item-card-title"}>{post.name} </h2>
                {!isChoosing ? <div className={"post-card-item-card__text-details-wrapper"}>

                    <Tooltip title={isOwner ? "Sửa thông tin sản phẩm" : "Vô hiệu hóa với bạn"} placement={"bottom"}>
                        <span className="mx-1 post-action-btn" onClick={isOwner ? () => { setEditPostModalVisible(true) } : null}>
                            <ToolOutlined className={!isOwner ? "disable-action-btn" : ""}
                                style={{ color: "black", fontSize: "20px" }} />
                        </span>
                    </Tooltip>

                    <Tooltip title={isOwner ? "Xóa sản phẩm" : "Vô hiệu hóa với bạn"} placement={"bottom"}>
                        <span className="mx-1 post-action-btn" onClick={isOwner ? () => { unavailablePost(post._id) } : null}>
                            <DeleteOutlined className={!isOwner ? "disable-action-btn" : ""}
                                style={{ color: "red", fontSize: "20px" }} />
                        </span>
                    </Tooltip>

                    <Tooltip title={!isOwner ? "Đổi sản phẩm" : "Vô hiệu hóa với bạn"} placement={"bottom"}>
                        <span onClick={!isOwner ? () => setModalUserPostVisible(true) : null} className="mx-1 post-action-btn">
                            <InteractionOutlined className={isOwner ? "disable-action-btn" : ""}
                                style={{ color: "green", fontSize: "20px" }} />
                        </span>
                    </Tooltip>

                    <Tooltip title={"Xem chi tiết"} placement={"bottom"}>
                        <span className="mx-1 post-action-btn">
                            <DoubleRightOutlined style={{ color: "blue", fontSize: "20px" }} onClick={() => {
                                window.location.href = paths.PostDetail(post._id)
                            }} />
                        </span>
                    </Tooltip>
                </div> : <div />}
            </div>
            <UserListPostModal postIdTo={post._id} userIdTo={post.owner_id} visible={modalUserPostVisible} setVisible={setModalUserPostVisible} user={user} />
            <EditPost postData={post} newPostId={post._id} visible={editPostModalVisible} setVisible={setEditPostModalVisible} />
        </div>
    )
}
export default PostDisplayCard;