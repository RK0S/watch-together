
import { ADD_USERNAME, CREATE_SESSIONID, ADD_LINK } from './../../consts/consts';

export const addUsername = (payload) => ({type: ADD_USERNAME, payload: payload})
export const createSessionId = (payload) => ({type: CREATE_SESSIONID, payload: payload})
export const addLink = (payload) => ({type: ADD_LINK, payload: payload})