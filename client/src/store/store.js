import { combineReducers, createStore } from "redux";
import reducers from "./reducers";
import { composeWithDevTools } from '@redux-devtools/extension'

const rootReducer = combineReducers(reducers)

export const store = createStore(rootReducer, composeWithDevTools())