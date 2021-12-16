import React, {useContext, useEffect, useState} from "react";
import { getTransHisbyUserId } from "../../services/api/TransactionHistoryApi";
import { notification } from "antd";
import paths from "../../router/paths";
import { Table } from "antd/es";
import "./TransactionHistoryOfUser.scss"
import AppContext from "../../AppContext";

let dataTransBase;
let dataTrans = [];

const TransactionHistoryOfUser = (props) => {
    const [data, setData] = useState([])
    const { user } = useContext(AppContext)

    useEffect(() => {
        getDataTrans()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getDataTrans = async () => {
        const { data, success } = await getTransHisbyUserId(user._id)
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

    const onSearch = (e) => {
        e.preventDefault()
    }

    return (
        <div className="trans-his-page">
            <div className={"trans-his-container col-xl-10 col-12"}>
                <div className={"trans__header"}>
                    <form className="form-inline trans__header--search" onSubmit={(e) => onSearch(e)}
                          onChange={(key) => onchange(key)}>
                        <input className="trans__header--search-input" type="search" placeholder="Nhập tên người dùng hoặc sản phẩm"
                               aria-label="Search"/>
                        <button className="trans__header--search-btn" type="submit" >Tìm kiếm</button>
                    </form>
                </div>

                <div className={"trans-his-content"}>
                    <Table dataSource={data} pagination={{ pageSize: 6 }} className={"trans-his-content-mobile"}>
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
        </div>
    )
}
export default TransactionHistoryOfUser