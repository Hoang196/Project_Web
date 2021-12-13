import { Button, Form, Input, Modal, notification, Upload } from "antd";
import React, { useContext, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import UploadFirebase from "../firebase/UploadFirebase";
import AppContext from "../../AppContext";
import { uploadPostData } from "../../services/api/UploadPostData";

const UploadPost = (props) => {
    const { user } = useContext(AppContext)
    const newPostId = props.newPostId

    const [imagePreview, setImagePreview] = useState();
    const [modalPreviewVisible, setModalPreviewVisible] = useState(false)
    const [listImageDescription, setListImageDescription] = useState([])
    const [mainImage, setMainImage] = useState([])

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
        console.log("ndh", value)
        let valueData = {}
        if (value.imageDescription) {
            value.imageDescription.fileList = changeNameDescriptionImage(value)
        }
        value.mainImage.fileList = changeNameMainImage(value)

        const dataMainImage = await uploadDataImageToStorage(value.mainImage.fileList)
        const dataDescribeImages = value.imageDescription ? await uploadDataImageToStorage(value.imageDescription.fileList) : null

        value.image_url = dataMainImage
        for (let i = 0; i < dataDescribeImages.length; i++) {
            value.image_url = value.image_url + " " + dataDescribeImages[i]
        }
        // value.image_url=  dataMainImage +" "+ dataDescribeImages.map(imageUrl => { return imageUrl})
        valueData.name = value.name
        valueData.description = value.description
        valueData.brand = value.brand
        valueData.type = value.type
        valueData.owner_id = user._id
        valueData.amount = Number(value.quantity)
        valueData.image_url = value.image_url

        UploadDataPost(valueData)
    }

    const UploadDataPost = async (value) => {
        const { data, success } = await uploadPostData(value)
        if (success) {
            window.location.reload()
            await notification.success({
                message: "Success",
                description: data.data.detail,
            })
        }
        else await notification.error({
            message: "Error",
            description: data.data.detail
        })
    }

    const changeNameMainImage = (value) => {
        value.mainImage.fileList[0].originFileObj.nameImage = `userId_${user._id}_postId_${newPostId}_main`
        return value.mainImage.fileList
    }

    const changeNameDescriptionImage = (value) => {
        return value.imageDescription.fileList.map((image, index) => {
            image.originFileObj.nameImage = `userId_${user._id}_postId_${newPostId}_${index + 1}`
            return image
        })
    }

    return (
        <Modal
            visible={props.visible}
            title={"Bài đăng mới"}
            onCancel={() => props.setVisible(false)}
            footer={null}
            width={"800px"}
        >
            <Form
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 16,
                }}
                onFinish={handleSubmit}

            >
                <Form.Item
                    name={'name'}
                    label={"Tên sản phẩm"} rules={[
                        {
                            required: true,
                        },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name={'brand'}
                    label={"Thương hiệu"} rules={[
                        {
                            required: true,
                        },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name={'type'}
                    label={"Loại sản phẩm"} rules={[
                        {
                            required: true,
                        },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name={'quantity'}
                    label={"Số lượng"} rules={[
                        {
                            required: true,
                        },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name={'description'}
                    label={"Mô tả sản phẩm"}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item name={'mainImage'} label={"Ảnh chính của sản phẩm:"} rules={[
                    {
                        required: true,
                    },
                ]}>
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
                <Form.Item name={'imageDescription'} label={"Ảnh mô tả thêm (tối đa 3)"} rules={[
                    {
                        required: true,
                    },
                ]}>
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
                        Đăng bài
                    </Button>
                </Form.Item>
            </Form>
            <Modal visible={modalPreviewVisible}
                footer={null}
                onCancel={() => setModalPreviewVisible(false)}
                width={"600px"}
            >
                <img style={{ width: "100%" }} alt={"Can't load img"} src={imagePreview} />
            </Modal>
        </Modal>
    )
}
export default UploadPost;