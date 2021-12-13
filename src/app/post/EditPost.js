import { Button, Form, Input, Modal, notification, Upload } from "antd";
import React, { useContext, useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import UploadFirebase from "../firebase/UploadFirebase";
import AppContext from "../../AppContext";
import { editPostData } from "../../services/api/PostData";
import { getPostDataByUserIdFake } from "../../services/api/PostData";

const EditPost = (props) => {
    const post = props.postData
    const { user } = useContext(AppContext)
    const newPostId = props.newPostId

    const [imagePreview, setImagePreview] = useState();
    const [modalPreviewVisible, setModalPreviewVisible] = useState(false)
    const [listImageDescription, setListImageDescription] = useState([])
    const [mainImage, setMainImage] = useState([])
    const [postData, setPostData] = useState([])

    useEffect(() => {
        getPostDataFake()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getPostDataFake = async () => {
        const { data, success } = await getPostDataByUserIdFake(user._id)
        if (success) {
            setPostData(data.data)
        } else {
            notification.error({
                message: "Error",
                description: data.data.detail
            })
        }
    }

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    const uploadDataImageToStorage = async (data) => {
        return Promise.all(data.map(async (image) => {
            image.url = await UploadFirebase(image.originFileObj)
            return image.url
        }))
    }

    const handleSubmit = async (value) => {

        if (!(value.mainImage) || !(value.imageDescription)) {
            notification.error({
                message: "Phát hiện lỗi",
                description: "Thiếu ảnh chính hoặc ảnh mô tả sản phẩm!"
            })
        }

        let imageID;
        for (let i = 0; i < postData.length; i++) {
            if (postData[i]._id === newPostId) {
                imageID = i + 1;
            }
        }

        let valueData = {};
        let dataMainImage;
        let dataDescribeImages;
        if (value.mainImage && value.imageDescription) {
            value.mainImage.fileList = changeNameMainImage(value, imageID)
            dataMainImage = await uploadDataImageToStorage(value.mainImage.fileList)
            value.image_url = dataMainImage
            value.imageDescription.fileList = changeNameDescriptionImage(value, imageID)
            dataDescribeImages = await uploadDataImageToStorage(value.imageDescription.fileList)
            for (let i = 0; i < dataDescribeImages.length; i++) {
                value.image_url = value.image_url + " " + dataDescribeImages[i]
            }
        }

        valueData._id = post._id
        valueData.name = value.name
        valueData.description = value.description
        valueData.brand = value.brand
        valueData.type = value.type
        valueData.owner_id = user._id
        valueData.amount = Number(value.quantity)
        valueData.image_url = value.image_url

        editPost(valueData)
    }

    const editPost = async (value) => {
        const { data, success } = await editPostData(value)
        if (success) {
            notification.success({
                message: "Success",
                description: data.data.detail,
            })
            window.location.reload()
        }
        else {
            notification.error({
                message: "Error",
                description: data.data.detail
            })
        }
    }

    const changeNameMainImage = (value, imageID) => {
        value.mainImage.fileList[0].originFileObj.nameImage = `userId_${user._id}_postId_${imageID}_main`
        return value.mainImage.fileList
    }

    const changeNameDescriptionImage = (value, imageID) => {
        return value.imageDescription.fileList.map((image, index) => {
            image.originFileObj.nameImage = `userId_${user._id}_postId_${imageID}_${index + 1}`
            return image
        })
    }

    return (
        <Modal
            visible={props.visible}
            title={`Chỉnh sửa thông tin sản phẩm ${post.name}`}
            onCancel={() => props.setVisible(false)}
            footer={null}
            width={"800px"}
        >
            <Form
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 17,
                }}
                onFinish={handleSubmit}

            >
                <Form.Item
                    name={'name'}
                    label={"Tên sản phẩm"}>
                    <Input defaultValue={post.name} />
                </Form.Item>

                <Form.Item
                    name={'brand'}
                    label={"Thương hiệu"}>
                    <Input defaultValue={post.brand} />
                </Form.Item>

                <Form.Item
                    name={'type'}
                    label={"Thể loại sản phẩm"}>
                    <Input defaultValue={post.type} />
                </Form.Item>

                <Form.Item
                    name={'quantity'}
                    label={"Số lượng"}>
                    <Input defaultValue={post.amount} />
                </Form.Item>

                <Form.Item
                    name={'description'}
                    label={"Mô tả sản phẩm"}>
                    <Input.TextArea defaultValue={post.description} />
                </Form.Item>

                <Form.Item name={'mainImage'} label={"Ảnh chính của sản phẩm:"}>
                    <Upload onPreview={(value) => {
                        setImagePreview(value.preview)
                        setModalPreviewVisible(true)
                    }} onChange={async (value) => {
                        value.file.preview = await getBase64(value.file.originFileObj)
                        setMainImage(value.fileList)
                    }}
                        listType="picture-card">
                        {mainImage.length < 1 ? uploadButton : null}
                    </Upload>
                </Form.Item>

                <Form.Item name={'imageDescription'} label={"Ảnh mô tả thêm(tối đa 3):"} >
                    <Upload onPreview={(value) => {
                        setImagePreview(value.preview)
                        setModalPreviewVisible(true)
                    }} onChange={async (value) => {
                        value.file.preview = await getBase64(value.file.originFileObj)
                        setListImageDescription(value.fileList)
                    }}
                        listType="picture-card">
                        {listImageDescription.length < 3 ? uploadButton : null}
                    </Upload>
                </Form.Item>

                <Form.Item wrapperCol={{
                    offset: 10,
                    span: 10,
                }}>
                    <Button type="primary" style={{ right: "0px" }} htmlType="submit" size="large">
                        Lưu lại
                    </Button>
                </Form.Item>
            </Form>
            <Modal visible={modalPreviewVisible}
                footer={null}
                onCancel={() => setModalPreviewVisible(false)}
                width={"600px"}
            >
                <img style={{ width: "100%" }} alt={"can't load img"} src={imagePreview} />
            </Modal>
        </Modal>
    )
}
export default EditPost;