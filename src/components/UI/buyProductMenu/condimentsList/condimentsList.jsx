import React from 'react';
import cl from './condimentsList.module.css'
import CondimentZone from "./condimentZone/condimentZone";
import {CondimentsRegistry} from '../../../data/condimentsRegistry'

const CondimentsList = ({switchedCondiments, setSwitchedCondiments}) => {
    return (
        <div className={cl.condimentsList}>
            {Object.values(CondimentsRegistry).map((condiment) =>
                <CondimentZone
                    condimentsToProduct={switchedCondiments}
                    setSwitchedCondiments={setSwitchedCondiments}
                    condiment={condiment}
                    key={condiment.name}
                />
            )}
        </div>
    );
};

export default CondimentsList;