import React, { useContext, useEffect, useState } from 'react'
import AppContext from "../../AppContext";
import UserInfoContainer from "./component/UserInfoContainer";
import { Button, Input, List, notification } from "antd";
import PostDisplayCard from "../post/PostDisplayCard";
import UploadPost from "../post/UploadPost";
import "./UserPageContainer.scss"
import { getUserDataById } from "../../services/api/getUserData";
import { getPostDataByUserId, getPostOfUserBySearch } from "../../services/api/PostData";
import { getPostDataByUserIdFake } from "../../services/api/PostData";
import TransactionHistoryOfUser from "../TransactionHistory/TransactionHistoryOfUser";

const { Search } = Input;


const UserPageContainer = (props) => {

    const { user } = useContext(AppContext)
    const [userData, setUserData] = useState({})
    const [postData, setPostData] = useState([])
    const [postDataSource, setPostDataSource] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [newPostModalVisible, setNewPostModalVisible] = useState(false)
    const userDataId = props.match.params.userId
    const [isOwner, setIsOwner] = useState(false)
    const [newPostId, setNewPostId] = useState()


    useEffect(() => {
        getUserData()
        getPostData()
        getPostDataFake()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const checkOwner = (id) => {

        if (user._id === id) return true
        else return false
    }

    const getUserData = async () => {
        const { data, success } = await getUserDataById(userDataId)
        if (success) {
            setUserData(data.data)
            setIsOwner(checkOwner(data.data._id))
        } else {
            notification.error({
                message: "Error",
                description: data.data.detail
            })
        }
    }

    const getPostData = async () => {
        setIsLoading(true)
        const { data, success } = await getPostDataByUserId(userDataId)
        if (success) {
            setPostData(data.data)
            setPostDataSource(data.data)
            setIsLoading(false)
        } else {
            setIsLoading(false)
        }
    }

    const getPostDataFake = async () => {
        setIsLoading(true)
        const { data, success } = await getPostDataByUserIdFake(userDataId)
        if (success) {
            if (data.data.length >= 1) setNewPostId(data.data.length + 1)
            else setNewPostId(1)
        } else {
            setNewPostId(Math.random())
        }
    }

    const getAllPostSearch = async (event) => {
        setIsLoading(true)
        const { data, success } = await getPostOfUserBySearch(user._id, event)
        if (success) {
            setPostData(data.data)
            setIsLoading(false)
        }
    }

    const onSearch = (value) => {
        if (value !== "") {
            getAllPostSearch(value)
        }
    }

    return (
        <div className={"user__page container-fluid"} >
            {/*{console.log("okok",window.location.pathname)}*/}
            {/*{ user.userId === postData.user.userID ? <div> hello admin</div> : <div/>}*/}
            <div className={"row"}>
                <div className={"user__page-content col-xl-9 col-12"}>
                    <div className={"user__page-container mt-3"} >

                        <div className={"user__page-container-header"} >
                            <h5 className={"user__page-container-header-title"}>
                                Danh sách các bài đăng:
                            </h5>
                            <Button className={"user__page-container-header-btn"} disabled={user._id === userDataId ? false : true}
                                type={"primary"} size={"large"} onClick={() => setNewPostModalVisible(true)}>
                                Tạo bài đăng mới
                            </Button>
                        </div>

                        <div className={"user__page-container-search"} >
                            <Search
                                className={"user__page-container-search-input"}
                                placeholder="Tìm kiếm sản phẩm "
                                allowClear
                                enterButton="Tìm kiếm"
                                size="large"
                                disabled={isLoading}
                                onSearch={(value) => onSearch(value)}
                            />
                        </div>
                        <div className={"user__page-container-listPosts"} >
                            <List
                                grid={{
                                    gutter: 20,
                                    xs: 2,
                                    sm: 2,
                                    md: 2,
                                    lg: 3,
                                    xl: 3,
                                    xxl: 4,
                                }}
                                pagination={{
                                    pageSize: 12
                                }}
                                dataSource={postData}
                                loading={isLoading}
                                renderItem={post => {
                                    return (
                                        <List.Item>
                                            <PostDisplayCard isChoosing={false} isOwner={isOwner} postData={post} />
                                        </List.Item>
                                    )
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className={"user__page-container-userInfo mt-3 col-xl-3 col-12"} >
                    <UserInfoContainer user={userData} isOwner={isOwner} />
                </div>
            </div>
            <div className="row">
                <div className={"mt-2 col-12 user__page--trans"} >
                    {isOwner === true ? <TransactionHistoryOfUser userId={userDataId} /> : <div />}
                </div>
            </div>
            <UploadPost newPostId={newPostId} visible={newPostModalVisible} setVisible={setNewPostModalVisible} />
        </div>
    )
}
export default UserPageContainer