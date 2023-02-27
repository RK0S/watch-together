import {combineReducers, configureStore} from '@reduxjs/toolkit'
import watchingReducer from './reducers/watchingSlice'

const rootReducer = combineReducers({
    watchingReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}