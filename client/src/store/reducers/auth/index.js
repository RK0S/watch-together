import { CREATE_SESSIONID, ADD_USERNAME, ADD_LINK } from './../../consts/consts';


const initialState = {
    username: '',
    sessionId: '',
    link: '',
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_USERNAME:
            return { ...state, username: action.payload };
        case CREATE_SESSIONID:
            return { ...state, sessionId: action.payload };
        case ADD_LINK:
            return { ...state, link: action.payload };
        default:
            return state;
    }
}
