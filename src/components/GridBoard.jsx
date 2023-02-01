import React from 'react'
import { GridSquare } from './GridSquare'
import { useSelector } from 'react-redux'
import './GridBoard.css'
const GridBoard = () => {
  const obstacleArray = Array(9000).fill("Blank")
                        .concat(Array(500).fill("Speeder"))
                        .concat(Array(250).fill("Lava"))
                        .concat(Array(250).fill("Mud"))
  shuffleArray(obstacleArray)
  const { targetCoordinates } = useSelector(state => state.player)
  
  const grid = []
  for (let row = 0; row < 100; row++){
    grid.push([])
    for (let col = 0; col < 100; col++){
        const targetPosition = targetCoordinates[0] === col && targetCoordinates[1] === row
        let squareColor = targetPosition ? '2' : '1'
        grid[row].push(<GridSquare key={`${col}${row}`} color={squareColor} position={[col, row]} obstacle={obstacleArray.pop()}/>)
    }
  }
  

  return (
    <div className='grid-board'>
        {grid}
    </div>
  )
}

function shuffleArray(array){
  for (let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random()*(i+1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export default GridBoard