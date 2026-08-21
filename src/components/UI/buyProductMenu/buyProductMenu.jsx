import React from 'react';
import cl from './buyProductMenu.module.css'
import CoffeeImg from '../../../Images/coffee.png'

const BuyProductMenu = () => {
    return (
        <div className={cl.productZone}>
            <img className={cl.coffeeImg} src={CoffeeImg} />
        </div>
    );
};

export default BuyProductMenu;