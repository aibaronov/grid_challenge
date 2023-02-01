import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    health: 100,
    playerCoordinates: [0, Math.floor(Math.random() * 100)],
    moveCount: 150,
    currentObstacle: "Blank",
    targetCoordinates: [99, Math.floor(Math.random() * 100)],
    playerSuccess: false
}

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        reset: (state) => {
            state.health = 100
            state.playerCoordinates = [0, Math.floor(Math.random() * 100)]
            state.moveCount = 150
            state.currentObstacle ="Blank"
            state.targetCoordinates = [99, Math.floor(Math.random() * 100)]
            state.playerSuccess = false
        },
        success: (state) => {
            state.playerSuccess = true
        }, 
        healthManager: (state, action) => {
            state.currentObstacle = action.payload.type;
            if (action.payload.type === "Blank"){
                return state;
            }
            else if (action.payload.type === "Speeder"){
                state.health -= 5;
            }
            else if (action.payload.type === "Lava"){
                state.health -= 50;
                state.moveCount -= 10;
            } 
            else if (action.payload.type === "Mud"){
                state.health -= 10;
                state.moveCount -= 5;
            }
        },
        move: (state, action) => {
            state.moveCount -= 1;
            if (action.payload.type === "right"){
                if (state.playerCoordinates[0] === 99){
                    return
                }
                else{
                    state.playerCoordinates[0] = state.playerCoordinates[0] + 1;
                }
            }
            if (action.payload.type === "left"){
                if (state.playerCoordinates[0] === 0){
                    return
                }else{
                    state.playerCoordinates[0] = state.playerCoordinates[0] - 1;
                }
            }
            if (action.payload.type === 'up'){
                if (state.playerCoordinates[1] === 0){
                    return
                }else{
                    state.playerCoordinates[1] = state.playerCoordinates[1] - 1;
                }
            }
            if (action.payload.type === 'down'){
                if (state.playerCoordinates[1] === 99){
                    return
                } else{
                    state.playerCoordinates[1] = state.playerCoordinates[1] + 1;
                }
            }
            // Check if current coordinates match target coordinates
            if (state.playerCoordinates[0] === state.targetCoordinates[0] && state.playerCoordinates[1] === state.targetCoordinates[1]){
                state.playerSuccess = true
            }
        }
    }
})

export default playerSlice.reducer;
export const playerActions = playerSlice.actions;