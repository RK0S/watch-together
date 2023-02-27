import LoginPage from './../pages/login-page/LoginPage';
import RoomPage from './../pages/room-page/RoomPage';


export const routes = [
    {path: '/login', element: <LoginPage />},
    {path: '/room/:id', element: <RoomPage />}
]