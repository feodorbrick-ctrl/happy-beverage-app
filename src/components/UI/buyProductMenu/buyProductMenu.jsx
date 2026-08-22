import React, {useState} from 'react';
import cl from './buyProductMenu.module.css'
import CoffeeImg from '../../../Images/coffee.png'
import CondimentsList from "./condimentsList/condimentsList";

const BuyProductMenu = () => {
    const [switchedCondiments, setSwitchedCondiments] = useState([]);
    return (
        <div className={cl.productZone}>
            <img className={cl.coffeeImg} src={CoffeeImg} />
            <CondimentsList switchedCondiments={switchedCondiments}/>
        </div>
    );
};

export default BuyProductMenu;