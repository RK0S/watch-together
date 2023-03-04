import { useDispatch } from 'react-redux';
import { addUsername, createSessionId, addLink } from './../store/reducers/action-creators/authActions';
import createRoomId from './../helpers/createRoomId';
import { useState } from 'react';
import { useCallback } from 'react';


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

    const youtubeRegex = /(youtu\.be\/|youtube\.com\/(watch\?(.*&)?v=|(embed|v)\/))([^\?&"'>]+)/;

    const submit = (e) => {
        e.preventDefault()
        if (name && link.match(youtubeRegex)) {
            dispatch(addUsername(name))
            dispatch(createSessionId(createRoomId()))
            dispatch(addLink(link))
        } else {
            setIsValidationError(true)
        }
    }

    return {
        submit, 
        isValidationError
    }
}