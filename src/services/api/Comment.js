import { createApiRequest } from "./index";

export const getAllComment = () => {
    return createApiRequest({
        url: `/api/get_all_comments`,
        method: "GET"
    })
}

export const getCommentByUserId = (UserId) => {
    return createApiRequest({
        url: `/api/get_comments_by_userId/${UserId}`,
        method: "GET"
    })
}

export const createComment = (data) => {
    return createApiRequest({
        url: '/api/add_comment',
        method: "POST",
        data: data
    })
}

export const editComment = (data) => {
    return createApiRequest({
        url: '/api/edit_comment',
        method: "POST",
        data: data
    })
}

export const deleteComment = (id) => {
    return createApiRequest({
        url: `/api/delete_comment/${id}`,
        method: "DELETE",
    })
}