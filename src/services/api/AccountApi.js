import { createApiRequest } from "./index";

export const loginApi = (email, password) => {
    const data = { email, password }
    const result = createApiRequest({
        url: '/api/login',
        method: 'POST',
        data: data
    })
    return result
}

export const registerApi = (email, username, password, phoneNumber, gender, dateOfBirth) => {
    const data = { email, username, password, phoneNumber, gender, dateOfBirth }
    const result = createApiRequest({
        url: '/api/register',
        method: 'POST',
        data: data
    })
    return result
}




