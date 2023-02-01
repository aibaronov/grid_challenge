import { configureStore } from "@reduxjs/toolkit";
import playerReducer from '../reducers/playerSlice'
export default configureStore({
    reducer: {
        player: playerReducer
    }
})