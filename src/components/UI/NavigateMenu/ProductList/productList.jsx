import React from 'react';
import './productList.module.css'
import {CoffeeRegistry} from "../../../data/coffeeRegistry";
import ProductZone from "./ProductZone/ProductZone";

const ProductList = ({callback}) => {
    return (
        <ul>
            {Object.values(CoffeeRegistry).map((coffee) =>
                <ProductZone coffee={coffee} key={coffee.getDescription()} callback={callback} />
            )}
        </ul>
    );
};

export default ProductList;