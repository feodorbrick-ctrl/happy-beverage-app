import React, {useContext, useEffect, useState} from 'react';
import cl from './buyProductMenu.module.css'
import CoffeeImg from '../../../Images/coffee.png'
import CondimentsList from "./condimentsList/condimentsList";
import Context from "../../../index";
import Beverage from '../../data/beverage'
import {useLocation} from "react-router-dom";
import {beverageCostCalculator} from "../../../frameworks/beverageCostCalculator";
import SwitchMagnitudeBtn from "../SwitchMagnitudeBtn/SwitchMagnitudeBtn";
import Spinner from "../spinner/spinner";
import Modal from "../modal/modal";

const BuyProductMenu = () => {
    const {switchedBeverage} = useContext(Context)
    const [switchedCondiments, setSwitchedCondiments] = useState([]);
    const location = useLocation();
    const [beverage, setBeverage] = useState(switchedBeverage || new Beverage);
    const beverageCostCal = new beverageCostCalculator(beverage, switchedCondiments)
    const [totalCost, setTotalCost] = useState(beverageCostCal.calculateCost());
    const [currentMagnitudeOfBeverage, setCurrentMagnitudeOfBeverage] = useState(1);
    const [magnitudeLevels] = React.useState(['Small', 'Medium', 'Big']);
    const [isSpinnerVisible, setSpinnerVisibility] = useState(false);
    const [isMessageVisible, setMessageVisibility] = useState(false);

    useEffect(() => {
        setBeverage(switchedBeverage || new Beverage)
        beverageCostCal.setBeverageAndCondiments(beverage, switchedCondiments)
    }, [location])
    useEffect(() => {
        setCurrentMagnitudeOfBeverage(magnitudeLevels.indexOf(beverage.size))
        setTotalCost(beverageCostCal.calculateCost());
        console.log('change beverage')
    }, [beverage, switchedCondiments])
    useEffect(() => {
        setBeverage(prevBeverage => {
            const newBeverage = switchedBeverage || new Beverage();
            newBeverage.description = prevBeverage.description;
            newBeverage.size = magnitudeLevels[currentMagnitudeOfBeverage];
            return newBeverage;
        });
    }, [currentMagnitudeOfBeverage]);

    function buyBeverage() {
        setSpinnerVisibility(true)
        setTimeout(() => {
            setSpinnerVisibility(false)
            setMessageVisibility(true)
        }, 2000);
    }

    return (
        <div className={cl.productZone}>
            <div>
                <h1>Beverage cost: <br/>{beverage.cost()}&euro;</h1>
                <br/>
                <h1>Total cost: <br/>{totalCost ? totalCost : 0}&euro;</h1>
            </div>
            <div className={cl.cupAndHisName}>
                <img className={cl.coffeeImg} src={CoffeeImg}/>
                <div>
                    <SwitchMagnitudeBtn
                        currentMagnitude={currentMagnitudeOfBeverage}
                        setCurrentMagnitude={setCurrentMagnitudeOfBeverage}
                        magnitudeLevels={magnitudeLevels}
                    />
                    <h1 className={cl.beverageNameText}>{beverage.getDescription()}</h1>
                </div>
                <Spinner isVisible={isSpinnerVisible}/>
                <Modal children={<h1 className={cl.message}>{beverageCostCal.getDecoratedBeverage().getDescription()} is bought
                    on {beverageCostCal.calculateCost()}&euro;</h1>} visible={isMessageVisible}
                       setVisible={setMessageVisibility}/>
                <button onClick={buyBeverage} className={cl.buyBtn}>Buy</button>
            </div>
            <CondimentsList
                switchedCondiments={switchedCondiments}
                setSwitchedCondiments={setSwitchedCondiments}
            />
        </div>
    );
};

export default BuyProductMenu;