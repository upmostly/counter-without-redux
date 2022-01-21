import React from 'react';

const Button = ({ buttonName, clickHandler }) => {
    let returnValue;
    if (buttonName === "increase") {
        returnValue = <button
            onClick={clickHandler}
            name="increase"
        >Increase</button>;
    }
    else {
        returnValue = <button
            onClick={clickHandler}
            name="decrease"
        >Decrease</button>
    }
    return returnValue;
};

export default Button;
