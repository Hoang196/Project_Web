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
                                Chi ti???t s???n ph???m
                                <Button type="primary" htmlType="submit" size="default"
                                    onClick={() => { setModalUserPostVisible(true) }} style={user._id === userData._id ? { display: "none" } : { display: "inline-block" }}
                                >
                                    ?????i s???n ph???m
                                </Button>
                            </h1>
                            <div className="post__detail--header-title-2">
                                Th??ng tin t??? ch??? s???n ph???m ????ng t???i tr???c ti???p
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
                                    <div className="post__detail-container-product-info-label col-4">T??n s???n ph???m:</div>
                                    <div className="post__detail-container-product-info-value col-8">{postData.name}</div>
                                </div>
                                <div className="post__detail-container-product-info">
                                    <div className="post__detail-container-product-info-label col-4">Ph??n lo???i:</div>
                                    <div className="post__detail-container-product-info-value col-8">{postData.type}</div>
                                </div>
                                <div className="post__detail-container-product-info check-color">
                                    <div className="post__detail-container-product-info-label col-4">H??ng s???n xu???t:</div>
                                    <div className="post__detail-container-product-info-value col-8">{postData.brand}</div>
                                </div>
                                <div className="post__detail-container-product-info">
                                    <div className="post__detail-container-product-info-label col-4">S??? l?????ng:</div>
                                    <div className="post__detail-container-product-info-value col-8">{postData.amount}</div>
                                </div>
                                <div className="post__detail-container-product-info check-color">
                                    <div className="post__detail-container-product-info-label col-4">M?? t???:</div>
                                    <div className="post__detail-container-product-info-value col-8">{postData.description}</div>
                                </div>
                                <div className="post__detail-container-product-info">
                                    <div className="post__detail-container-product-info-label col-4">Tr???ng th??i:</div>
                                    <div className="post__detail-container-product-info-value col-8">{postData.status}</div>
                                </div>
                                <div className="post__detail-container-product-info check-color">
                                    <div className="post__detail-container-product-info-label col-4">Ng??y ????ng:</div>
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
                                                Th??ng tin ch??? s???n ph???m
                                            </button>
                                        </h5>
                                    </div>

                                    <div id="collapseOne" className="collapse post__detail-form"
                                         aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="card-body post__detail-form-userInfo">

                                            <div className="post__detail-container-product-info">
                                                <div className="post__detail-container-product-info-label col-4">T??n ng?????i d??ng:</div>
                                                <div className="post__detail-container-product-info-value col-8">{userData.username}</div>
                                            </div>
                                            <div className="post__detail-container-product-info">
                                                <div className="post__detail-container-product-info-label col-4">Ng??y sinh:</div>
                                                <div className="post__detail-container-product-info-value col-8">{userData.dateOfBirth}</div>
                                            </div>
                                            <div className="post__detail-container-product-info">
                                                <div className="post__detail-container-product-info-label col-4">Gi???i t??nh:</div>
                                                <div className="post__detail-container-product-info-value col-8">{userData.gender}</div>
                                            </div>
                                            <hr />
                                            <div className="post__detail-container-product-info">
                                                <div className="post__detail-container-product-info-label col-4">Email:</div>
                                                <div className="post__detail-container-product-info-value col-8">{userData.email}</div>
                                            </div>
                                            <div className="post__detail-container-product-info">
                                                <div className="post__detail-container-product-info-label col-4">S??? ??i???n tho???i:</div>
                                                <div className="post__detail-container-product-info-value col-8">{userData.phoneNumber}</div>
                                            </div>
                                            <div className="post__detail-container-product-info">
                                                 <div className="post__detail-container-product-info-label col-4">?????a ch???:</div>
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