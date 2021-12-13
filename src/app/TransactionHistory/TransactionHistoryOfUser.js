import React, { useEffect, useState } from "react";
import { getTransHisbyUserId } from "../../services/api/TransactionHistoryApi";
import { notification } from "antd";
import paths from "../../router/paths";
import { Table } from "antd/es";
import "./TransactionHistoryOfUser.scss"

const TransactionHistoryOfUser = (props) => {
    const userId = props.userId
    const [data, setData] = useState([])

    useEffect(() => {
        getDataTrans()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getDataTrans = async () => {
        const { data, success } = await getTransHisbyUserId(userId)
        if (success) {
            console.log("ndh3", data.data)
            setData(data.data)
        } else {
            notification.error("Không tìm thấy lịch sử giao dịch!")
        }

    }

    const column = [];
    for (let i = 0; i < data.length; i++) {
        column.push({
            key: data[i]._id,
            id: data[i]._id,
            FromUserId: data[i].from_user_id,
            FromUserName: data[i].from_user_name,
            ToUserId: data[i].to_user_id,
            ToUserName: data[i].to_user_name,
            FromPostId: data[i].from_post_id,
            FromPostName: data[i].from_post_name,
            ToPostId: data[i].to_post_id,
            ToPostName: data[i].to_post_name,
            status: data[i].status,
            extra: data[i].extra,
            updateAt: data[i].updatedAt,
        });
    }

    const { Column } = Table;

    return (
        <div className={"trans-his-container"}>
            <h5
                style={{ fontSize: "22px", marginBottom: "20px", fontWeight: "800", display: "inline" }}>Lịch sử trao đổi của bạn:
            </h5>

            <div className={"trans-his-content"}>
                <Table dataSource={column} pagination={{ pageSize: 5 }} className={"trans-his-content-mobile"}>
                    <Column className={"trans-his-content-mobile"} title="Người yêu cầu" dataIndex="FromUserId" key="FromUserId"
                        render={(text, record) => (<a href={paths.UserPage(record.FromUserId)}>{record.FromUserName}</a>)}
                    />
                    <Column className={"trans-his-content-mobile"} title="Người được yêu cầu" dataIndex="ToUserId" key="ToUserId"
                        render={(text, record) => (<a href={paths.UserPage(record.ToUserId)}>{record.ToUserName}</a>)}
                    />
                    <Column className={"trans-his-content-mobile"} title="Sản phẩm yêu cầu" dataIndex="FromPostId" key="FromPostId"
                        render={(text, record) => (<a href={paths.PostDetail(record.FromPostId)}>{record.FromPostName}</a>)}
                    />
                    <Column className={"trans-his-content-mobile"} title="Sản phẩm được yêu cầu" dataIndex="ToPostId" key="ToPostId"
                        render={(text, record) => (<a href={paths.PostDetail(record.ToPostId)}>{record.ToPostName}</a>)}
                    />
                    <Column className={"trans-his-content-mobile"} title="Trạng thái" dataIndex="status" key="status"
                        render={(text, record) => (<div style={record.status === "Thành công" ? { color: "green", fontWeight: "900" } :
                            record.status === "Thất bại" ? { color: "red", fontWeight: "900" } : { color: "blue", fontWeight: "900" }}>{record.status}</div>)}
                    />
                    <Column className={"trans-his-content-mobile"} title="Mô tả giao dịch" dataIndex="extra" key="extra" />
                    <Column className={"trans-his-content-mobile"} title="Thời điểm tạo" dataIndex="updateAt" key="updateAt" />
                </Table>
            </div>
        </div>
    )
}
export default TransactionHistoryOfUser