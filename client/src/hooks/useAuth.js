import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';


export const useAuth = () => {
    const params = useParams()
    const {username} = useSelector(state => state.watchingReducer)
    useEffect(() => {
        const socket = new WebSocket(`ws://localhost:5000/`);
        socket.onopen = () => {
            socket.send(JSON.stringify({
                id: params.id,
                username: username,
                method: 'connection'
            }))
        }
        socket.onmessage = (e) => {
            console.log(e.data);
        }
    }, []);
}