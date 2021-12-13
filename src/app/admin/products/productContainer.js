import React, { useEffect, useState } from 'react';
import { Input, List } from "antd";
import PostDisplayCardAdmin from "./postDisplayCard";
import "./productContainer.scss"
import { getAllPostData, getPostBySearch } from "../../../services/api/PostData";
// import paths from "../../../router/paths";
const { Search } = Input;

const ProductContainerAdmin = (props) => {

    const [postData, setPostData] = useState([])
    const [totalPost, setTotalPost] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1)

    useEffect(() => {
        getAllPostDatas(page)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    const getAllPostSearch = async (event) => {
        setIsLoading(true)
        const { data, success } = await getPostBySearch(event)
        if (success) {
            setPostData(data.data)
            setIsLoading(false)
        }
    }

    function onSearch(event) {
        if (event !== "") {
            // window.location.reload()
            getAllPostSearch(event)
        }
    }

    const getAllPostDatas = async (page) => {
        setIsLoading(true)
        const { data, success } = await getAllPostData(page)
        if (success) {
            setPostData(data.data.posts)
            setTotalPost(data.data.totalPosts)
            setIsLoading(false)
        }
    }

    return (
        <div className={"productAdmin__page container-fluid mt-3 col-12"}>
            <div className={"productAdmin__page-container mt-3"}>
                <div className={"productAdmin__page-container-search mt-3"}>
                    <Search
                        placeholder="Tìm kiếm sản phẩm"
                        allowClear
                        enterButton="Tìm kiếm"
                        size="large"
                        className={"productAdmin__page-container-search-input"}
                        onSearch={onSearch}
                    />
                </div>
                <div style={{ border: "0.05px solid #dfe3e8" }} >
                    <div style={{ padding: "10px" }}>
                        <List
                            grid={{
                                gutter: 20,
                                xs: 2,
                                sm: 3,
                                md: 3,
                                lg: 3,
                                xl: 4,
                                xxl: 4,
                            }}
                            pagination={{
                                pageSize: 12,
                                onChange: page => {
                                    setPage(page);
                                },
                                total: totalPost,
                            }}
                            dataSource={postData}
                            loading={isLoading}
                            renderItem={post => {
                                return (
                                    <List.Item>
                                        <PostDisplayCardAdmin isChoosing={false} postData={post} />
                                    </List.Item>
                                )
                            }}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default ProductContainerAdmin