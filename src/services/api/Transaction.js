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
    const result = createApiRequest({
        url: `/api/complete_transaction/${transaction_id}`,
        method: "GET",
    })
    return result
}