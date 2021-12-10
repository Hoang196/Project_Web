import { createApiRequest } from "./index";

export const getTransHisbyUserId = (userId) => {
    return createApiRequest({
        url: `/api/get_user_history/${userId}`,
        method: 'GET'
    })
}

export const getAllTrans = () => {
    return createApiRequest({
        url: `/api/get_all_history`,
        method: 'GET'
    })
}