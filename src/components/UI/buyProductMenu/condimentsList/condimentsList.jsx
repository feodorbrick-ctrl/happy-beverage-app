import React from 'react';
import cl from './condimentsList.module.css'
import CondimentZone from "./condimentZone/condimentZone";
import {CondimentsRegistry} from '../../../data/condimentsRegistry'

const CondimentsList = ({switchedCondiments}) => {
    return (
        <div className={cl.condimentsList}>
            <CondimentZone
                condimentName='Mocha'
                condiment={CondimentsRegistry.mocha}
                condimentsToProduct={switchedCondiments}
            />
            <CondimentZone
                condimentName='Sugar'
                condiment={CondimentsRegistry.sugar}
                condimentsToProduct={switchedCondiments}
            />
            <CondimentZone
                condimentName='Chocolate'
                condiment={CondimentsRegistry.chocolate}
                condimentsToProduct={switchedCondiments}
            />
            <CondimentZone
                condimentName='WhippedCream'
                condiment={CondimentsRegistry.whippedCream}
                condimentsToProduct={switchedCondiments}
            />
        </div>
    );
};

export default CondimentsList;