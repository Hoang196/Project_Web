import React, { useContext, useEffect, useState } from "react";
import paths from "../../../router/paths";
import 'antd/dist/antd.css';
import { Table, Space, Tooltip, notification } from "antd";
import { DoubleRightOutlined, InteractionOutlined } from '@ant-design/icons';
import './PostDetailAdmin.scss'
import { getAllPostWantToTrade } from "../../../services/api/PostData";
import { completeTrading } from "../../../services/api/Transaction";
import AppContext from "../../../AppContext";

const PostDetailAdmin = (props) => {
    const { user } = useContext(AppContext)
    const [Data, setData] = useState([])
    const postId = props.props.match.params.postId;

    useEffect(() => {
        getAllUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const getAllUser = async () => {
        const { data, success } = await getAllPostWantToTrade(postId)
        if (success) {
            setData(data.data)
        }
    }

    const dataUsers = [];
    for (let i = 0; i < Data.length; i++) {
        dataUsers.push({
            key: Data[i].trading_post._id,
            transactionId: Data[i].transaction_id,
            id: Data[i].trading_post._id,
            name: Data[i].trading_post.name,
            type: Data[i].trading_post.type,
            brand: Data[i].trading_post.brand,
            amount: Data[i].trading_post.amount,
            description: Data[i].trading_post.description,
        });
    }

    async function clickAccept(transactionId) {
        const { data } = await completeTrading(transactionId)
        if (data.data.status_code === 200) {
            window.location.href = paths.UserPage(user._id)
            alert("Giao dịch thành công")
        } else {
            await notification.error({
                message: "Error",
                description: data.data.details
            })
        }
    }

    const { Column } = Table;
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="post_admin col-xl-11 col-12" >
                <h1 className="post_admin-title" >
                    Danh sách sản phẩm muốn trao đổi
                </h1>
                <div className={"post_admin-table"}>
                    <Table dataSource={dataUsers} pagination={{ pageSize: 5 }} className={"post_admin-table-mobile"}>
                        {/* <Column title="Mã Số" dataIndex="id" key="id" className={"post_admin-table-mobile"} /> */}
                        <Column title="Hàng trao đổi" dataIndex="name" key="name" className={"post_admin-table-mobile"} />
                        <Column title="Kiểu hàng trao đổi" dataIndex="type" key="type" className={"post_admin-table-mobile"} />
                        <Column title="Nhãn hiệu" dataIndex="brand" key="brand" className={"post_admin-table-mobile"} />
                        <Column title="Số lượng" dataIndex="amount" key="amount" className={"post_admin-table-mobile"} />
                        <Column
                            className={"post_admin-table-mobile"}
                            title="Hoạt động"
                            key="action"
                            render={(text, record) => (
                                <Space size="large">
                                    <a href={`${paths.PostDetail(record.id)}`}>
                                        <Tooltip title={"Xem chi tiết"}>
                                            <DoubleRightOutlined style={{ color: "blue", fontSize: "16px" }} />
                                        </Tooltip>
                                    </a>
                                    {/* eslint-disable-next-line no-undef */}
                                    <div onClick={props.ownerPost === user._id ? () => clickAccept(record.transactionId, record.id) : null}>
                                        <Tooltip title={"Chấp nhận đổi"}>
                                            <InteractionOutlined style={props.ownerPost === user._id ? { color: "green", cursor: "pointer", fontSize: "16px" } : { color: "gray", fontSize: "16px" }} />
                                        </Tooltip>
                                    </div>
                                </Space>
                            )}
                        />
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default PostDetailAdmin;