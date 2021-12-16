import { createApiRequest } from "./index";

export const createTransaction = (postIdFrom, postIdTo, userIdFrom, userIdTo) => {
    return createApiRequest({
        url: "/api/create_transaction",
        method: "POST",
        data: {
            from_post_id: postIdFrom,
            to_post_id: postIdTo,
            from_user_id: userIdFrom,
            to_user_id: userIdTo
        }
    })
}

export const completeTrading = (transaction_id) => {
    return createApiRequest({
        url: `/api/complete_transaction/${transaction_id}`,
        method: "GET",
    })
}

export const deleteTransaction = (transaction_id) => {
    return createApiRequest({
        url: `/api/delete_transaction/${transaction_id}`,
        method: "DELETE"
    })
}