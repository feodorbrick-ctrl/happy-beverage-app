import React from 'react';
import cl from './navigateMenu.module.css'
import ProductList from "./ProductList/productList";

const NavigateMenu = () => {
    return (
        <div className={cl.navMenu}>
            <ProductList/>
        </div>
    );
};

export default NavigateMenu;