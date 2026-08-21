import React from 'react';
import cl from './buyProductMenu.module.css'
import CoffeeImg from '../../../Images/coffee.png'
import CondimentsList from "./condimentsList/condimentsList";

const BuyProductMenu = () => {
    return (
        <div className={cl.productZone}>
            <img className={cl.coffeeImg} src={CoffeeImg} />
            <CondimentsList/>
        </div>
    );
};

export default BuyProductMenu;