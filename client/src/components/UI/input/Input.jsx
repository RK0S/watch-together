import React from 'react';

import classes from './input.module.css';

const Input = ({ extraClasses, value, placeholder, changeParams }) => {
    function changeValue(e) {
        changeParams(e);
    }

    return (
        <input
            onChange={(e) => changeValue(e)}
            value={value}
            placeholder={placeholder}
            className={[classes.input, extraClasses].join(' ')}
            type="text"
        />
    );
};

export default Input;
