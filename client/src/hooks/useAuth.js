import { useDispatch, useSelector } from 'react-redux';
import { addUsername, createSessionId, addLink } from './../store/reducers/action-creators/authActions';
import createRoomId from './../helpers/createRoomId';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'

// export const useAuth = () => {
//     const params = useParams()
//     const {username} = useSelector(state => state.watchingReducer)
//     useEffect(() => {
//         const socket = new WebSocket(`ws://localhost:5000/`);
//         socket.onopen = () => {
//             socket.send(JSON.stringify({
//                 id: params.id,
//                 username: username,
//                 method: 'connection'
//             }))
//         }
//         socket.onmessage = (e) => {
//             console.log(e.data);
//         }
//     }, []);
// }

export const useAuth = (name, link) => {
    const dispatch = useDispatch();
    const [isValidationError, setIsValidationError] = useState(false);
    const navigate = useNavigate();
    const { sessionId }  = useSelector(state => state.auth)

    const youtubeRegex = /(youtu\.be\/|youtube\.com\/(watch\?(.*&)?v=|(embed|v)\/))([^\?&"'>]+)/;

    useEffect(() => {
        dispatch(createSessionId(createRoomId()))
    }, []);

    const submit = (e) => {
        e.preventDefault()
        if (name && name.length < 30 && link.match(youtubeRegex)) {
            dispatch(addUsername(name))
            dispatch(addLink(link))
            navigate(`/room/${sessionId}`)
        } else {
            setIsValidationError(true)
        }
    }

    return {
        submit, 
        isValidationError
    }
}