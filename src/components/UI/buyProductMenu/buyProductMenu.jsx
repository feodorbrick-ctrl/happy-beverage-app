import React, {useContext, useEffect, useMemo, useState} from 'react';
import cl from './buyProductMenu.module.css'
import CoffeeImg from '../../../Images/coffee.png'
import CondimentsList from "./condimentsList/condimentsList";
import Context from "../../../index";
import Beverage from '../../data/beverage'
import {useLocation} from "react-router-dom";

const BuyProductMenu = () => {
    const {switchedBeverage} = useContext(Context)
    const [switchedCondiments, setSwitchedCondiments] = useState([]);
    const [beverage, setBeverage] = useState(switchedBeverage || new Beverage);
    const location = useLocation();

    useEffect(() => {
        setBeverage(switchedBeverage || new Beverage);
    }, [location])
    useMemo(() => {
        console.log('change condiments list')
    }, [switchedCondiments]);
    return (
        <div className={cl.productZone}>
            <h1>{}</h1>
            <div className={cl.cupAndHisName}>
                <img className={cl.coffeeImg} src={CoffeeImg}/>
                <h1 className={cl.beverageNameText}>{beverage.getDescription()}</h1>
            </div>
            <CondimentsList
                switchedCondiments={switchedCondiments}
                setSwitchedCondiments={setSwitchedCondiments}
            />
        </div>
    );
};

export default BuyProductMenu;