import React, { useState } from 'react';
import {watchingSlice} from '../../store/reducers/watchingSlice';
import Button from '../UI/button/Button';
import Input from './../UI/input/Input';
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { roomId } from '../../consts/roomId';


import classes from './loginForm.module.css'

const LoginForm = () => {
    const [info, setInfo] = useState({username: 'Watcher', link: ''})
    const {setName, setLink} = watchingSlice.actions
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function changeName(e) {
        setInfo({...info, username: e.target.value})
    }

    function changeLink(e) {
        setInfo({...info, link: e.target.value})
    }

    function changeReducerState() {
        if (info.link.split('v=')[1]) {
            dispatch(setName(info.username))
            dispatch(setLink(info.link))
            navigate(`/room/${roomId}`)
        } else {
            console.log('Введена неверная ссылка');
        }
    }

    return (
        <form className={classes.login_form}>
            <Input changeParams={changeName} value={info.username} extraClasses={classes.login_form__input__first} placeholder='Введите имя' />
            <Input changeParams={changeLink} value={info.link} extraClasses={classes.login_form__input__second} placeholder='Введите ссылку' />
            <Button onClick={changeReducerState} name='Войти' />
        </form>
    );
};

export default LoginForm;