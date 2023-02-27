import React from 'react';

import classes from './button.module.css'

const Button = ({name, onClick}) => {
    function submit(e) {
        e.preventDefault();
        onClick()
    }
    return (
        <button onClick={e => submit(e)} className={classes.button}>
            {name}
        </button>
    );
};

export default Button;