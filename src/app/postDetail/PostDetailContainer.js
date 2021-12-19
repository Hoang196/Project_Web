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

    useEffect(() => {
        getPostData()
    }, [])

    const getPostData = async () => {
        const { data, success } = await getPostDataByPostId(postId)
        if (success) {
            setPostData(data.data);
            setMainImage(data.data.main_image);
            setAdditionalImages(data.data.image_url);
            setOwnerId(data.data.owner_id);
            getUserData(data.data.owner_id);
        }
    }

    const getUserData = async (id) => {
        const { data, success } = await getUserDataById(id)
        if (success) {
            setUserData(data.data)
        }
    }


    return (
        <div className={"post__detail container-fluid"}>
            <div className={"row"} style={{ display: "flex", justifyContent: "center" }}>
                <div className={"post__detail-content col-xl-10 col-11"}>

                    <div className="post__detail--header">
                        <div className="post__detail--header-title">
                            <h1 className="post__detail--header-title-1">
                                Chi tiết sản phẩm
                                <Button type="primary" htmlType="submit" size="default"
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

                    <div className={"post__detail-container"} >

                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <Image className="d-block w-100" src={mainImage} alt="" />
                                </div>
                                <div className="carousel-item">
                                    <Image className="d-block w-100" src={additionalImages[0]} alt="" />
                                </div>
                                <div className="carousel-item">
                                    <Image className="d-block w-100" src={additionalImages[1]} alt="" />
                                </div>
                                <div className="carousel-item">
                                    <Image className="d-block w-100" src={additionalImages[2]} alt="" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                               data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"/>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                               data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"/>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>

                        <div className={"post__detail-container-content col-xl-5 col-12"}>
                            <div className={"post__detail-container-product col-xl-12 col-12"} >
                                <div className="post__detail-container-product-info check-color">
                                    <div className="post__detail-container-product-info-label col-4">Tên sản phẩm:</div>
                                    <div className="post__detail-container-product-info-value col-8">{postData.name}</div>
                                </div>
                                <div className="post__detail-container-product-info">
                                    <div className="post__detail-container-product-info-label col-4">Phân loại:</div>
                                    <div className="post__detail-container-product-info-value col-8">{postData.type}</div>
                                </div>
                                <div className="post__detail-container-product-info check-color">
                                    <div className="post__detail-container-product-info-label col-4">Hãng sản xuất:</div>
                                    <div className="post__detail-container-product-info-value col-8">{postData.brand}</div>
                                </div>
                                <div className="post__detail-container-product-info">
                                    <div className="post__detail-container-product-info-label col-4">Số lượng:</div>
                                    <div className="post__detail-container-product-info-value col-8">{postData.amount}</div>
                                </div>
                                <div className="post__detail-container-product-info check-color">
                                    <div className="post__detail-container-product-info-label col-4">Mô tả:</div>
                                    <div className="post__detail-container-product-info-value col-8">{postData.description}</div>
                                </div>
                                <div className="post__detail-container-product-info">
                                    <div className="post__detail-container-product-info-label col-4">Trạng thái:</div>
                                    <div className="post__detail-container-product-info-value col-8">{postData.status}</div>
                                </div>
                                <div className="post__detail-container-product-info check-color">
                                    <div className="post__detail-container-product-info-label col-4">Ngày đăng:</div>
                                    <div className="post__detail-container-product-info-value col-8">{postData.createdAt}</div>
                                </div>
                            </div>

                            <div id="accordion">
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link collapsed" data-toggle="collapse"
                                                    data-target="#collapseOne" aria-expanded="false"
                                                    aria-controls="collapseOne">
                                                Thông tin chủ sản phẩm
                                            </button>
                                        </h5>
                                    </div>

                                    <div id="collapseOne" className="collapse post__detail-form"
                                         aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="card-body post__detail-form-userInfo">

                                            <div className="post__detail-container-product-info">
                                                <div className="post__detail-container-product-info-label col-4">Tên người dùng:</div>
                                                <div className="post__detail-container-product-info-value col-8">{userData.username}</div>
                                            </div>
                                            <div className="post__detail-container-product-info">
                                                <div className="post__detail-container-product-info-label col-4">Ngày sinh:</div>
                                                <div className="post__detail-container-product-info-value col-8">{userData.dateOfBirth}</div>
                                            </div>
                                            <div className="post__detail-container-product-info">
                                                <div className="post__detail-container-product-info-label col-4">Giới tính:</div>
                                                <div className="post__detail-container-product-info-value col-8">{userData.gender}</div>
                                            </div>
                                            <hr />
                                            <div className="post__detail-container-product-info">
                                                <div className="post__detail-container-product-info-label col-4">Email:</div>
                                                <div className="post__detail-container-product-info-value col-8">{userData.email}</div>
                                            </div>
                                            <div className="post__detail-container-product-info">
                                                <div className="post__detail-container-product-info-label col-4">Số điện thoại:</div>
                                                <div className="post__detail-container-product-info-value col-8">{userData.phoneNumber}</div>
                                            </div>
                                            <div className="post__detail-container-product-info">
                                                 <div className="post__detail-container-product-info-label col-4">Địa chỉ:</div>
                                                 <div className="post__detail-container-product-info-value col-8">{userData.address}</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className={"post__detail-trade mt-2"} >
                <PostDetailAdmin ownerPost={ownerId} props={props} />
            </div>

            <UserListPostModal postIdTo={postId} userIdTo={userData._id} visible={modalUserPostVisible} setVisible={setModalUserPostVisible} user={user} />

        </div>
    )
}
export default PostDetailContainer