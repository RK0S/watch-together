import React from 'react';
import Button from '../UI/button/Button';
import Input from './../UI/input/Input';

import classes from './loginForm.module.css'

const LoginForm = () => {
    return (
        <form className={classes.login_form}>
            <Input extraClasses={classes.login_form__input__first} placeholder='Введите имя' />
            <Input extraClasses={classes.login_form__input__second} placeholder='Введите ссылку' />
            <Button  name='Войти' />
        </form>
    );
};

export default LoginForm;