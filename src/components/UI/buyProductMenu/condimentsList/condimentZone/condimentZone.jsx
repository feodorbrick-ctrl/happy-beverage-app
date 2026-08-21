import React, {useState} from 'react';
import cl from './condimentZone.module.css'

const CondimentZone = ({condimentName, condiment, condimentsToProduct = [], setCondimentsToProduct}) => {
    const [numberOfCondiment, setNumberOfCondiment] = useState(0)
    function addCondiment() {
        if (numberOfCondiment !== 3) {
            setNumberOfCondiment(numberOfCondiment + 1)
            setCondimentsToProduct([...condimentsToProduct, condiment])
        }
    }
    function removeCondiment() {
        if (numberOfCondiment !== 0) {
            setNumberOfCondiment(numberOfCondiment - 1)
            const iOfCondiment = condimentsToProduct.indexOf(condiment)
            if (iOfCondiment !== -1) {
                setCondimentsToProduct(condimentsToProduct.slice(iOfCondiment, 1))
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