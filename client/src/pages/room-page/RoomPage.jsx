import React from 'react';
import YouTube from 'react-youtube';
import { useSelector } from 'react-redux';
import { useAuth } from './../../hooks/useAuth';

const RoomPage = () => {
    const {link} = useSelector(state => state.watchingReducer)

    useAuth()
    const func = () => {
        console.log('error');
    }

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            controls: 0,
            autoplay: 1,
        },
    };
    return (
        <YouTube onError={func} videoId={link} opts={opts}/>
    );
};

export default RoomPage;