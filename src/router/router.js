import App from "../App";
import paths from "./paths";
import FirstDirect from "../app/FirstDirect/FirstDirect";
import infoContainer from "../app/information/infoContainer";
import contactContainer from "../app/information/contactContainer";
import LoginContainer from "../app/login/LoginContainer";
import RegisterContainer from "../app/register/RegisterContainer";
import DefaultContainer from "../app/DefaultContainer";
import UserListContainer from "../app/userList/UserListContainer";
import HomePageContainer from "../app/homepage/HomePageContainer";
import ProductContainer from "../app/products/ProductContainer";
import UserPageContainer from "../app/user/UserPageContainer";
import PostDetailContainer from "../app/postDetail/PostDetailContainer";
import UserRecordContainer from "../app/userRecord/UserRecordContainer";
import TransactionHistoryOfUser from "../app/TransactionHistory/TransactionHistoryOfUser"
import AdminContainer from "../app/admin/AdminContainer";
import homePageAdmin from "../app/admin/homepage/homePageAdmin";
import ProductContainerAdmin from "../app/admin/products/productContainer";
import UserListContainerAdmin from "../app/admin/userList/userListContainer";
import TransactionContainer from "../app/admin/transactions/transactionContainer";


const router = [
    {
        component: App,
        routes: [
            {
                path: paths.FirstDirect,
                exact: true,
                component: FirstDirect
            },
            {
                path: paths.Information,
                exact: true,
                component: infoContainer
            },
            {
                path: paths.Contact,
                exact: true,
                component: contactContainer
            },
            {
                path: paths.Login,
                exact: true,
                component: LoginContainer
            },
            {
                path: paths.Register,
                exact: true,
                component: RegisterContainer
            },
            {
                path: paths.Admin,
                component: AdminContainer,
                routes: [
                    {
                        path: paths.homepage,
                        exact: true,
                        component: homePageAdmin
                    },
                    {
                        path: paths.product,
                        exact: true,
                        component: ProductContainerAdmin
                    },
                    {
                        path: paths.userList,
                        exact: true,
                        component: UserListContainerAdmin
                    },
                    {
                        path: paths.transaction,
                        exact: true,
                        component: TransactionContainer
                    },
                ]
            },
            {
                path: paths.HomePage,
                component: DefaultContainer,
                routes: [
                    {
                        path: paths.HomePage,
                        exact: true,
                        component: HomePageContainer
                    },
                    {
                        path: paths.Product,
                        exact: true,
                        component: ProductContainer
                    },
                    {
                        path: paths.UserPage(),
                        exact: true,
                        component: UserPageContainer
                    },
                    {
                        path: paths.UserInfo,
                        exact: true,
                        component: UserRecordContainer
                    },
                    {
                        path: paths.PostDetail(),
                        exact: true,
                        component: PostDetailContainer
                    },
                    {
                        path: paths.UserList,
                        exact: true,
                        component: UserListContainer
                    },
                    {
                        path: paths.History(),
                        exact: true,
                        component: TransactionHistoryOfUser
                    },
                ]
            },
        ]
    }
]
export default router