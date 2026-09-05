import React from 'react';
import cl from './spinner.module.css'
import Beans from '../../../Images/coffeeBeans.png'

const Spinner = ({isVisible}) => {
    return (
        <img src={Beans} alt='Coffee Beans' className={cl.shakeElement} style={{display: isVisible ? 'flex' : 'none'}}/>
    );
};

export default Spinner;