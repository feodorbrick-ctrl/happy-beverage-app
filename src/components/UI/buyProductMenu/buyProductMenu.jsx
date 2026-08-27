import React, {useContext, useEffect, useState} from 'react';
import cl from './buyProductMenu.module.css'
import CoffeeImg from '../../../Images/coffee.png'
import CondimentsList from "./condimentsList/condimentsList";
import Context from "../../../index";
import Beverage from '../../data/beverage'
import {useLocation} from "react-router-dom";
import {beverageCostCalculator} from "../../../frameworks/beverageCostCalculator";

const BuyProductMenu = () => {
    const {switchedBeverage} = useContext(Context)
    const [switchedCondiments, setSwitchedCondiments] = useState([]);
    const location = useLocation();
    const [beverage, setBeverage] = useState(switchedBeverage || new Beverage);
    const beverageCostCal = new beverageCostCalculator(beverage, switchedCondiments)
    const [totalCost, setTotalCost] = useState(beverageCostCal.calculateCost());

    useEffect(() => {
        setBeverage(switchedBeverage || new Beverage)
    }, [location])
    useEffect(() => {
        setTotalCost(beverageCostCal.calculateCost());
        console.log(switchedCondiments);
    },[beverage, switchedCondiments])
    return (
        <div className={cl.productZone}>
            <div>
                <h1>Beverage cost: <br/>{beverage.cost()}&euro;</h1>
                <br/>
                <h1>Total cost: <br/>{totalCost}&euro;</h1>
            </div>
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