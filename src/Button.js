import React from 'react';

const Button = ({ buttonName, clickHandler }) => {
    return <button
            onClick={clickHandler}
            name={buttonName}
        >{buttonName.charAt(0).toUpperCase() + buttonName.slice(1)}</button>;
};

export default Button;
