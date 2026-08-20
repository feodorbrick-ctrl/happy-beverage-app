import React from 'react';
import cl from './ProductZone.module.css'

const ProductZone = ({coffee}) => {
    return (
        <li className={cl.Product}>
            <button
                className={cl.Product}
                onClick={() => console.log(coffee.getMagnitude() + ' ' + coffee.getDescription() + ' is buy on ' + coffee.cost() + '$')}
            >
                {coffee.getDescription()}
            </button>
        </li>
    );
};

export default ProductZone;