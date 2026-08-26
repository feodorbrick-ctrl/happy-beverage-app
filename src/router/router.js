import OrderPage from "../pages/orderPage";
import NavigateMenu from "../components/UI/NavigateMenu/navigateMenu";

export const router = [
    {name: 'home', path: '/', component: <NavigateMenu/>},
    {name: 'order', path: '/order/:coffee', component: <OrderPage/>}
]