import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    username: '',
    link: '',
    isLoading: false,
    error: ''
}

export const watchingSlice = createSlice({
    name: 'watching',
    initialState,
    reducers: {
        setName(state, action) {
            state.username = action.payload
        },
        setLink(state, action) {
            state.link = action.payload.split('v=')[1]
        }
    }
})

export default watchingSlice.reducer