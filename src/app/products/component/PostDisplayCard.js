import React, { useContext, useState } from 'react'
import { Tooltip } from "antd";
import "./PostDisplayCard.scss"
import { DoubleRightOutlined, InteractionOutlined } from '@ant-design/icons';
import paths from "../../../router/paths";
import AppContext from "../../../AppContext";
import UserListPostModal from "../../user/component/UserListPostModal";

const PostDisplayCard = (props) => {
    const { user } = useContext(AppContext)
    const post = props.postData
    const isChoosing = props.isChoosing
    const isSelected = props.isSelected
    const setPostSelected = props.setPostSelected
    const [modalUserPostVisible, setModalUserPostVisible] = useState(false)

    const checkOwner = (id) => {
        if (user._id === id) return true
        else return false
    }

    return (
        <div className={post._id !== isSelected ? "post-card-item-card" : "post-card-item-card selected-post"}
            onClick={isChoosing ? () => { setPostSelected(post._id) } : null}>
            <Tooltip title={"Sản phẩm có sẵn"}>
                <img className={"post-card-image"} src={post.main_image} alt={"Can't load this img"} />
            </Tooltip>
            <div className={"post-card-item-card__text-wrapper"}>
                <h2 className={"post-card-item-card-title"}>{post.name} </h2>
                {!isChoosing ? <div className={"post-card-item-card__text-details-wrapper"}>

                    <Tooltip title={!checkOwner(post.owner_id) ? "Đổi sản phẩm" : "Vô hiệu hóa với bạn"} placement={"bottom"}>
                        <span onClick={!checkOwner(post.owner_id) ? () => setModalUserPostVisible(true) : null} className="mx-1 post-action-btn">
                            <InteractionOutlined className={checkOwner(post.owner_id) ? "disable-action-btn" : ""}
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
        </div>
    )
}
export default React.memo(PostDisplayCard);