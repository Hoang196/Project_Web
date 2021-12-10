import { createApiRequest } from "./index";

export const getPostDataByUserId = (userId) => {
    return createApiRequest({
        url: `/api/get_posts_by_userId/${userId}`,
        method: "GET"
    })
}

export const getPostDataByUserIdFake = (userId) => {
    return createApiRequest({
        url: `/api/get_posts_by_userId_fake/${userId}`,
        method: "GET"
    })
}

export const getPostDataByPostId = (postId) => {
    return createApiRequest({
        url: `/api/get_post_by_id/${postId}`,
        method: "GET"
    })
}

export const getAllPostWantToTrade = (productId) => {
    return createApiRequest({
        url: `/api/get_product_want_to_trade_with/${productId}`,
        method: "GET"
    })
}

export const getAllPostData = (pageNumber) => {
    return createApiRequest({
        url: `/api/get_all_post?page=${pageNumber}`,
        method: "GET"
    })
}

export const getPostBySearch = (keyword) => {
    return createApiRequest({
        url: `/api/search_post/${keyword}`,
        method: "GET"
    })
}

export const getPostOfUserBySearch = (id, keyword) => {
    return createApiRequest({
        url: `/api/search_post_user/${id}?key=${keyword}`,
        method: "GET"
    })
}

export const deletePost = (id) => {
    return createApiRequest({
        url: `/api/delete_post/${id}`,
        method: "DELETE",
    })
}

export const editPostData = (value) => {
    return createApiRequest({
        url: '/api/edit_post',
        method: "POST",
        data: value
    })
}
