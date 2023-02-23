import React from 'react';
import LoginForm from '../../components/login-form/LoginForm';



import classes from './loginPage.module.css'

const LoginPage = () => {
    return (
        <div className={classes.login_page}>
            <h1 className={classes.title}>Watch together</h1>
            <LoginForm />
            <h6 className={classes.author}>made by Roman Kosolapov</h6>
        </div>
    );
};

export default LoginPage;