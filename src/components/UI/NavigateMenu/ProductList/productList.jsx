import React from 'react';
import './productList.module.css'
import {CoffeeRegistry} from "../../../data/coffeeRegistry";
import ProductZone from "./ProductZone/ProductZone";

const ProductList = () => {

    return (
        <ul>
            <ProductZone coffee={CoffeeRegistry.espresso} />
            <ProductZone coffee={CoffeeRegistry.americano} />
            <ProductZone coffee={CoffeeRegistry.latte} />
            <ProductZone coffee={CoffeeRegistry.cappuccino} />
            <ProductZone coffee={CoffeeRegistry.frappuccino} />
        </ul>
    );
};

export default ProductList;