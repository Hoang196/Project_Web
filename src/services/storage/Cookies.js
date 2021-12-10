import { Cookies } from 'react-cookie'

const cookies = new Cookies()
export const getCookie = (name) => {
    return cookies.get(name) || null
}
export const setCookie = (name, value) => {
    return cookies.set(name, JSON.stringify(value))
}
export const removeCookie = (name) => {
    return cookies.remove(name)
}