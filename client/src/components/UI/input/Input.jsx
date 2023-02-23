import React from 'react';

import classes from './input.module.css'

const Input = ({extraClasses, placeholder}) => {
    return (
        <input className={[classes.input, extraClasses].join(' ')} type="text" placeholder={placeholder} />
    );
};

export default Input;