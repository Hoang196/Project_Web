import { createApiRequest } from "./index";

export const getAllUserData = () => {
    return createApiRequest({
        url: '/api/get_all_users',
        method: "GET"
    })
}
export const getUserDataById = (id) => {
    return createApiRequest({
        url: `/api/get_user_by_id/${id}`,
        method: "GET"
    })
}

export const editUserData = (value) => {
    return createApiRequest({
        url: '/api/edit_userInfo',
        method: "POSt",
        data: value
    })
}

export const deleteUser = (id) => {
    return createApiRequest({
        url: `/api/delete_user/${id}`,
        method: "DELETE",
    })
}