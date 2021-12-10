import { createApiRequest } from "./index";

export const uploadPostData = (value) => {
    return createApiRequest({
        url: '/api/add_post',
        method: "POST",
        data: value
    })
}