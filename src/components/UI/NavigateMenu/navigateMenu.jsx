import React from 'react';
import cl from './navigateMenu.module.css'
import ProductList from "./ProductList/productList";

const NavigateMenu = () => {
    function goToPageOfCoffee (coffee, setSwitchedBeverage, navigator) {
        setSwitchedBeverage(coffee);
        navigator(`/order/${coffee.getDescription()}`);
    }
    return (
        <div className={cl.navMenu}>
            <ProductList callback={goToPageOfCoffee}/>
        </div>
    );
};

export default NavigateMenu;