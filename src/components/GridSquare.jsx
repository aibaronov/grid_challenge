import React, { useEffect, useState } from 'react'
import './GridSquare.css'
import { useSelector, useDispatch } from 'react-redux'
import { playerActions } from '../reducers/playerSlice'

export const GridSquare = (props) => {
    const dispatch = useDispatch()
    const { playerCoordinates } = useSelector(state => state.player)
    const gridPosition = props.position


    const playerPresent = playerCoordinates[0] === gridPosition[0] 
                        && playerCoordinates[1] === gridPosition[1]
    const classes = playerPresent ? `grid-square player`: `grid-square color-${props.color}`

    useEffect(() => {
        if (playerPresent){
            dispatch(playerActions.healthManager({"type": props.obstacle}))
        }
    }, [playerPresent])

    return (
    <div className={classes}/>
    )
    }

