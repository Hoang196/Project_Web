import React, { useEffect, useState } from "react";
import { getAllTrans } from "../../../services/api/TransactionHistoryApi";
import { notification } from "antd";
import paths from "../../../router/paths";
import { Table } from "antd/es";
import "./transactionContainer.scss"

var dataTransBase;
var dataTrans = [];

const TransactionContainer = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        getDataTrans()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getDataTrans = async () => {
        const { data, success } = await getAllTrans()
        if (success) {
            dataTransBase = data.data;
            for (let i = 0; i < dataTransBase.length; i++) {
                dataTrans.push({
                    key: dataTransBase[i]._id,
                    id: dataTransBase[i]._id,
                    FromUserId: dataTransBase[i].from_user_id,
                    FromUserName: dataTransBase[i].from_user_name,
                    ToUserId: dataTransBase[i].to_user_id,
                    ToUserName: dataTransBase[i].to_user_name,
                    FromPostId: dataTransBase[i].from_post_id,
                    FromPostName: dataTransBase[i].from_post_name,
                    ToPostId: dataTransBase[i].to_post_id,
                    ToPostName: dataTransBase[i].to_post_name,
                    status: dataTransBase[i].status,
                    extra: dataTransBase[i].extra,
                    updateAt: dataTransBase[i].updatedAt,
                });
            }
            setData(dataTrans)
        } else {
            notification.error("Không tìm thấy lịch sử giao dịch!")
        }
    }

    let dataTransSearch = [];
    function onchange(event) {
        let message = event.target.value;
        for (let i = 0; i < dataTransBase.length; i++) {
            if (dataTransBase[i].from_user_name.includes(message) || dataTransBase[i].to_user_name.includes(message) ||
                dataTransBase[i].from_post_name.includes(message) || dataTransBase[i].to_post_name.includes(message)) {
                dataTransSearch.push({
                    key: dataTransBase[i]._id,
                    id: dataTransBase[i]._id,
                    FromUserId: dataTransBase[i].from_user_id,
                    FromUserName: dataTransBase[i].from_user_name,
                    ToUserId: dataTransBase[i].to_user_id,
                    ToUserName: dataTransBase[i].to_user_name,
                    FromPostId: dataTransBase[i].from_post_id,
                    FromPostName: dataTransBase[i].from_post_name,
                    ToPostId: dataTransBase[i].to_post_id,
                    ToPostName: dataTransBase[i].to_post_name,
                    status: dataTransBase[i].status,
                    extra: dataTransBase[i].extra,
                    updateAt: dataTransBase[i].updatedAt,
                });
            }
        }
        setData(dataTransSearch)
    }

    const { Column } = Table;

    return (
        <div className={"trans-Admin-his-container"}>
            <div className={"trans-Admin__header"}>
                <div className={"trans-Admin__header--search"}>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">Tìm kiếm</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Default" placeholder="Nhập tên người dùng hoặc sản phẩm" onChange={(event) => onchange(event)} />
                </div>
            </div>

            <div className={"trans-Admin-his-content"}>
                <Table dataSource={data} pagination={{ pageSize: 10 }} className={"trans-Admin-his-content-mobile"}>
                    <Column className={"trans-Admin-his-content-mobile"} title="Người yêu cầu" dataIndex="FromUserId" key="FromUserId"
                        render={(text, record) => (<a href={paths.UserPage(record.FromUserId)}>{record.FromUserName}</a>)}
                    />
                    <Column className={"trans-Admin-his-content-mobile"} title="Người được yêu cầu" dataIndex="ToUserId" key="ToUserId"
                        render={(text, record) => (<a href={paths.UserPage(record.ToUserId)}>{record.ToUserName}</a>)}
                    />
                    <Column className={"trans-Admin-his-content-mobile"} title="Sản phẩm yêu cầu" dataIndex="FromPostId" key="FromPostId"
                        render={(text, record) => (<a href={paths.PostDetail(record.FromPostId)}>{record.FromPostName}</a>)}
                    />
                    <Column className={"trans-Admin-his-content-mobile"} title="Sản phẩm được yêu cầu" dataIndex="ToPostId" key="ToPostId"
                        render={(text, record) => (<a href={paths.PostDetail(record.ToPostId)}>{record.ToPostName}</a>)}
                    />
                    <Column className={"trans-Admin-his-content-mobile"} title="Trạng thái" dataIndex="status" key="status"
                        render={(text, record) => (<div style={record.status === "Thành công" ? { color: "green", fontWeight: "900" } :
                            record.status === "Thất bại" ? { color: "red", fontWeight: "900" } : { color: "blue", fontWeight: "900" }}>{record.status}</div>)}
                    />
                    <Column className={"trans-Admin-his-content-mobile"} title="Mô tả giao dịch" dataIndex="extra" key="extra" />
                    <Column className={"trans-Admin-his-content-mobile"} title="Thời điểm tạo" dataIndex="updateAt" key="updateAt" />
                </Table>
            </div>
        </div>
    )
}
export default TransactionContainer