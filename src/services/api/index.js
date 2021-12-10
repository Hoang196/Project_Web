import axios from "axios";

// const basePath = 'https://exchange-old-item.herokuapp.com'
const basePath = 'http://localhost:5000'

export const createApiRequest = async ({ url, method, data, params }) => {
    try {
        const result = await axios({
            method: method,
            url: `${basePath}${url}`,
            data,
            params,
        })
        return (
            {
                success: true,
                data: result
            }
        )
    }
    catch (e) {
        const { response } = e
        console.log("loi", e)
        return (
            {
                success: false,
                data: response
            }
        )
    }
}