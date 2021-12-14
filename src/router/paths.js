
const basePath = '/u'

const paths = {
    FirstDirect: '/',
    Admin: `${basePath}/admin`,
    product: `${basePath}/admin/list_product`,
    userList: `${basePath}/admin/list_user`,
    transaction: `${basePath}/admin/list_transaction`,
    Information: '/info',
    Contact: '/contact',
    HomePage: `${basePath}`,
    Product: `${basePath}/products`,
    UserPage: (userId) => `${basePath}/user_page/${userId || ":userId"}`,
    UserInfo: `${basePath}/myInfo`,
    UserList: `${basePath}/user_list`,
    Login: '/login',
    Register: '/register',
    PostDetail: (postId) => `${basePath}/post_detail/${postId || ":postId"}`
}
export default paths