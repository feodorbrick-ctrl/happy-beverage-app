import React from 'react';
import cl from './productList.module.css'
import Mocha from "../../../data/condimentsToCoffee/Mocha";
import {coffeesObj} from "../../../data/coffeesObj";

const ProductList = () => {

    let coffee = coffeesObj.espresso;
    coffee.setMagnitude('Medium')
    coffee = new Mocha(coffee)
    console.log(coffee.getDescription() + '\n' + coffee.cost() + '$')
    return (
        <div>
            <ul className={cl.productList}>
                <li><button onClick={() => console.log(coffee.getDescription() + ' is buy on ' + coffee.cost() + '$')}>{coffeesObj.espresso.getDescription()}</button></li>
            </ul>
        </div>
    );
};

export default ProductList;