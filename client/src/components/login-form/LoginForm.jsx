import React from 'react';
import Input from './../UI/input/Input';
import Button from '../UI/button/Button';
import useInput from './../../hooks/useInput';
import { useAuth } from './../../hooks/useAuth';


import classes from './loginForm.module.css';

const LoginForm = () => {
    const name = useInput('Watcher');
    const link = useInput('');
    const {submit, isValidationError} = useAuth(name.value, link.value)


    return (
        <form className={classes.login_form}>
            <Input
                {...name}
                extraClass={classes.login_form__input__first}
                placeholder="Введите имя"
            />
            <Input
                {...link}
                extraClass={classes.login_form__input__second}
                placeholder="Введите ссылку"
            />
            {isValidationError && <span>*Неподходящее имя или некорректная ссылка</span>}
            <Button onClick={submit}>Войти</Button>
        </form>
    );
};

export default LoginForm;