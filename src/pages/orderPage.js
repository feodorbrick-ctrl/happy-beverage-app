import React from 'react';
import NavigateMenu from "../components/UI/NavigateMenu/navigateMenu";
import BuyProductMenu from "../components/UI/buyProductMenu/buyProductMenu";

const OrderPage = () => {
    return (
        <div>
            <NavigateMenu/>
            <BuyProductMenu/>
        </div>
    );
};

export default OrderPage;