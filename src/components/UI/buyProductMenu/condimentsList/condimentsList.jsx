import React from 'react';
import cl from './condimentsList.module.css'
import CondimentZone from "./condimentZone/condimentZone";
import {CondimentsRegistry} from '../../../data/condimentsRegistry'

const CondimentsList = ({switchedCondiments}) => {
    return (
        <div className={cl.condimentsList}>
            {Object.values(CondimentsRegistry).map((condiment) =>
                <CondimentZone
                    condimentName={condiment.name}
                    condimentsToProduct={switchedCondiments}
                    condiment={condiment}
                    key={condiment.name}
                />
            )}
        </div>
    );
};

export default CondimentsList;