import { List, Modal, notification } from "antd";
import PostDisplayCard from "../../post/PostDisplayCard";
import React, { useEffect, useState, useCallback } from "react";
import Search from "antd/lib/input/Search";
import { getPostDataByUserId, getPostOfUserBySearch } from "../../../services/api/PostData";
import { createTransaction } from "../../../services/api/Transaction";


const UserListPostModal = (props) => {
    const postIdTo = props.postIdTo
    const userIdTo = props.userIdTo
    const visible = props.visible
    const user = props.user
    const setVisible = props.setVisible
    const [postData, setPostData] = useState([])
    const [postDataSource, setPostDataSource] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isSelected, setIsSelected] = useState()

    useEffect(() => {
        getPostData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getPostData = useCallback(async () => {
        setIsLoading(true)
        const { data, success } = await getPostDataByUserId(user._id)
        if (success) {
            setPostData(data.data)
            setPostDataSource(data.data)
            setIsLoading(false)
        } else {
            setIsLoading(false)
        }
    }, [])

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

    const createNewTransaction = async () => {
        const { data, success } = await createTransaction(isSelected, postIdTo, user._id, userIdTo)
        if (success) {
            if (data.data.status_code === 200) {
                await notification.success({
                    message: "Success",
                    description: "Thêm giao dịch thành công"
                })
            }
            else {
                await notification.error({
                    message: "Error",
                    description: "Thêm giao dịch không thành công"
                })
            }
        }
        setVisible(false)
    }

    return (
        <Modal visible={visible} onOk={() => createNewTransaction()} onCancel={() => { setVisible(false) }}
            width={"1000px"}
        >
            <div style={{ padding: "10px" }}><h5 style={{ fontSize: "22px", fontWeight: "800", display: "inline" }}>Chọn sản phẩm bạn muốn trao đổi:</h5>
                <div className={"search_post"}
                    style={{ paddingTop: "10px", paddingBottom: "20px", display: "flex", justifyContent: "center" }}>
                    <Search
                        placeholder="Tìm kiếm sản phẩm "
                        allowClear
                        enterButton="Tìm kiếm"
                        size="large"
                        style={{ width: "75%" }}
                        onSearch={(value) => onSearch(value)}
                    />
                </div>
                <div className={"list_post_content_border"}
                    style={{ margin: "10px", border: "0.05px solid #dfe3e8" }}>
                    <div className={"list_post_content"} style={{ padding: "10px" }}>
                        <List
                            grid={{
                                gutter: 20,
                                xs: 1,
                                sm: 2,
                                md: 2,
                                lg: 3,
                                xl: 3,
                                xxl: 4,
                            }}
                            dataSource={postData}
                            loading={isLoading}
                            renderItem={post => {
                                return (
                                    <List.Item>
                                        <PostDisplayCard isChoosing={true} isOwner={true} postData={post} isSelected={isSelected} setPostSelected={setIsSelected} />
                                    </List.Item>
                                )
                            }}
                        />
                    </div>
                </div>
            </div>
        </Modal>
    )
}
export default React.memo(UserListPostModal)