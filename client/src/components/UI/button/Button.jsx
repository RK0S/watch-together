import React from 'react';

import classes from './button.module.css'

const Button = ({name}) => {
    return (
        <button className={classes.button}>
            {name}
        </button>
    );
};

export default Button;