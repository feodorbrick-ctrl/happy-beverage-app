import React, {useContext} from 'react';
import cl from './ProductZone.module.css'
import Context from "../../../../../index";
import {useNavigate} from "react-router-dom";

const ProductZone = ({coffee, callback}) => {
    const {setSwitchedBeverage} = useContext(Context)
    const navigator = useNavigate();
    return (
        <li className={cl.Product}>
            <button
                className={cl.Product}
                onClick={() => callback(coffee, setSwitchedBeverage, navigator)}
            >
                {coffee.getDescription()}
            </button>
        </li>
    );
};

export default ProductZone;