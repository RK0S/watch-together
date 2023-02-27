import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './../routes/index';
import { roomId } from './../consts/roomId';

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route => 
                <Route  path={route.path} element={route.element} key={route.path}/>
            )}
            <Route path='*' element={<Navigate to={`/room/${roomId}`} />} />
        </Routes>
    );
};

export default AppRouter;