import React, { useContext, useEffect, useState } from "react";
import "./PostDetailContainer.scss";
import { getPostDataByPostId } from "../../services/api/PostData";
import { getUserDataById } from "../../services/api/getUserData";
import PostDetailAdmin from "./component/PostDetailAdmin";
import { Image } from "antd";
import AppContext from "../../AppContext";
import Chat from "../chat/Chat";
import { Button } from "antd";
import UserListPostModal from "../user/component/UserListPostModal";


const PostDetailContainer = (props) => {
    const { user } = useContext(AppContext)
    const [postData, setPostData] = useState([]);
    const [userData, setUserData] = useState({});
    const [additionalImages, setAdditionalImages] = useState([]);
    const [mainImage, setMainImage] = useState();
    const postId = props.match.params.postId;
    const [ownerId, setOwnerId] = useState();
    const [newPostModalVisible, setNewPostModalVisible] = useState(false)
    const [modalUserPostVisible, setModalUserPostVisible] = useState(false)
    const name = userData.username

    useEffect(() => {
        getPostData()
    }, [])

    const getPostData = async () => {
        const { data, success } = await getPostDataByPostId(postId)
        if (success) {
            setPostData(data.data);
            setMainImage(data.data.main_image);
            setAdditionalImages(data.data.image_url)
            setOwnerId(data.data.owner_id)
            getUserData(data.data.owner_id)
        }
    }

    const getUserData = async (id) => {
        const { data, success } = await getUserDataById(id)
        if (success) {
            setUserData(data.data)
        }
    }

    const showAdditionalImages = () => {
        return additionalImages.map(imgURL => {
            return (
                <Image className={"image-post-list"} src={imgURL} alt="" style={{ maxHeight: "200px" }} />
            )
        })
    }



    return (
        <div className={"post__detail container-fluid"}>
            <div className={"row"} style={{ display: "flex", justifyContent: "center" }}>
                <div className={"post__detail-content col-xl-10 col-11"}>

                    <div className="post__detail--header">
                        <div className="post__detail--header-title">
                            <h1 className="post__detail--header-title-1">
                                Chi tiết sản phẩm
                                <Button className={"post__detail--header-btn"} type="primary" htmlType="submit" size="default"
                                    onClick={() => { setModalUserPostVisible(true) }} style={user._id === userData._id ? { display: "none" } : { display: "inline-block" }}
                                >
                                    Đổi sản phẩm
                                </Button>
                            </h1>
                            <div className="post__detail--header-title-2">
                                Thông tin từ chủ sản phẩm đăng tải trực tiếp
                            </div>
                        </div>
                    </div>

                    <div className={"post__detail-container row"} >
                        <div className={"post__detail-container-image col-xl-6 col-12"}>
                            <div style={{ marginBottom: "10px" }}>
                                <strong>Ảnh chính sản phẩm:</strong>
                            </div>
                            <div style={{ marginBottom: "10px" }}>
                                <Image src={mainImage} alt="Ảnh" className={"post__detail-container-image-img"} />
                            </div>
                            {additionalImages.length >= 1 ? <div style={{ marginBottom: "10px" }}> <strong>Ảnh mô tả sản phẩm:</strong> </div> : <div />}
                            <div style={{ marginBottom: "10px" }}> {showAdditionalImages()} </div>
                        </div>
                        <div className={"post__detail-container-content col-xl-6 col-12"}>
                            <div className={"post__detail-container-product col-xl-12 col-12"} >
                                <h5 style={{ paddingLeft: "15px" }}>Thông tin sản phẩm</h5>
                                <div className="post__detail-container-product-info">
                                    <div className="post__detail-container-product-info-label col-4">Tên sản phẩm:</div>
                                    <div className="post__detail-container-product-info-value col-8">{postData.name}</div>
                                </div>
                                <div className="post__detail-container-product-info">
                                    <div className="post__detail-container-product-info-label col-4">Phân loại:</div>
                                    <div className="post__detail-container-product-info-value col-8">{postData.type}</div>
                                </div>
                                <div className="post__detail-container-product-info">
                                    <div className="post__detail-container-product-info-label col-4">Hãng sản xuất:</div>
                                    <div className="post__detail-container-product-info-value col-8">{postData.brand}</div>
                                </div>
                                <div className="post__detail-container-product-info">
                                    <div className="post__detail-container-product-info-label col-4">Số lượng:</div>
                                    <div className="post__detail-container-product-info-value col-8">{postData.amount}</div>
                                </div>
                                <div className="post__detail-container-product-info">
                                    <div className="post__detail-container-product-info-label col-4">Mô tả:</div>
                                    <div className="post__detail-container-product-info-value col-8">{postData.description}</div>
                                </div>
                                <div className="post__detail-container-product-info">
                                    <div className="post__detail-container-product-info-label col-4">Trạng thái:</div>
                                    <div className="post__detail-container-product-info-value col-8">{postData.status}</div>
                                </div>
                                <div className="post__detail-container-product-info">
                                    <div className="post__detail-container-product-info-label col-4">Ngày đăng:</div>
                                    <div className="post__detail-container-product-info-value col-8">{postData.createdAt}</div>
                                </div>
                            </div>

                            <div className={"post__detail-form col-xl-12 col-12"} >
                                <div className={"post__detail-form-userInfo"}>
                                    <h5>Thông tin chủ sản phẩm</h5>
                                    <div>
                                        <span>Tên: </span> <span>{userData.username}</span>
                                    </div>
                                    <div>
                                        <span>Ngày sinh: </span> <span>{userData.dateOfBirth}</span>
                                    </div>
                                    <div>
                                        <span>Giới tính: </span> <span>{userData.gender}</span>
                                    </div>
                                    <hr />
                                    <div>
                                        <span>Mã ID: </span> <span>{userData._id}</span>
                                    </div>
                                    <div>
                                        <span>Email: </span> <span>{userData.email}</span>
                                    </div>
                                    <div>
                                        <span>Số điện thoại: </span> <span>{userData.phoneNumber}</span>
                                    </div>

                                    <Chat name={name} visible={newPostModalVisible} setVisible={setNewPostModalVisible} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className={"post__detail-trade mt-2 col-12"} >
                    {user._id === ownerId ? <PostDetailAdmin ownerPost={ownerId} props={props} /> : <div></div>}
                </div>
            </div>

            <UserListPostModal postIdTo={postId} userIdTo={userData._id} visible={modalUserPostVisible} setVisible={setModalUserPostVisible} user={user} />

        </div>
    )
}
export default PostDetailContainer