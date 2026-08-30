import React from 'react';
import cl from './SwitchMagnitudeBtn.module.css'

const SwitchMagnitudeBtn = ({currentMagnitude, setCurrentMagnitude, magnitudeLevels}) => {
    function nextMagnitude() {
        setCurrentMagnitude(prev => {
            if (prev !== magnitudeLevels.length - 1) {
                return prev + 1;
            } else {
                return 0;
            }
        });
    }

    return (
        <button className={cl.switchMagnitude} onClick={nextMagnitude}>
            {magnitudeLevels[currentMagnitude]}
        </button>
    );
};

export default SwitchMagnitudeBtn;