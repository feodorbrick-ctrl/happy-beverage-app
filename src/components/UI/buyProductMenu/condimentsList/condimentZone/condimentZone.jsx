import React, {useState} from 'react';
import cl from './condimentZone.module.css'

const CondimentZone = ({condimentName, condiment, condimentsToProduct = [], setSwitchedCondiments}) => {
    const [numberOfCondiment, setNumberOfCondiment] = useState(0)
    function addCondiment() {
        if (numberOfCondiment !== 2) {
            const finalCondiment = [...condimentsToProduct]
            setNumberOfCondiment(numberOfCondiment + 1)
            finalCondiment.push(condiment)
            setSwitchedCondiments(finalCondiment)
        }
    }
    function removeCondiment() {
        if (numberOfCondiment !== 0) {
            const finalArray = [...condimentsToProduct]
            setNumberOfCondiment(numberOfCondiment - 1)
            const iOfCondiment = finalArray.indexOf(condiment)
            if (iOfCondiment !== -1) {
                finalArray.splice(iOfCondiment, 1)
                setSwitchedCondiments(finalArray)
            }
        }
    }
    return (
        <div className={cl.condimentZone}>
            <p className={cl.condimentName}>{condimentName}</p>
            <p>{numberOfCondiment}</p>
            <button onClick={addCondiment} className={cl.condimentManagementBtn}>add condiment</button>
            <button onClick={removeCondiment} className={cl.condimentManagementBtn}>delete condiment</button>
        </div>
    );
};

export default CondimentZone;