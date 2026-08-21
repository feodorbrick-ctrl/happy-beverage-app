import React, {useEffect} from 'react';
import cl from './condimentsList.module.css'
import CondimentZone from "./condimentZone/condimentZone";
import Mocha from "../../../data/condimentsToCoffee/Mocha";

const CondimentsList = () => {
    return (
        <div className={cl.condimentsList}>
            <CondimentZone condimentName='Mocha' condiment={Mocha} />
        </div>
    );
};

export default CondimentsList;