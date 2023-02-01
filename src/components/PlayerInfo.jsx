import { useSelector } from "react-redux"
import './PlayerInfo.css'

const PlayerInfo = (props) => {
  const {reset} = props
  const {health, moveCount, currentObstacle} = useSelector(state => state.player)

  // function resetHandler(){
  //   dispatch(playerActions.reset())
  // }

  return (
    <div className="playerInfo">
        {health>0 ? 
            <>
                <h2>Health: {health}</h2>
                <h2>Moves Remaining: {moveCount}</h2>
                <h2>Current Obstacle: {currentObstacle}</h2>
            </> :
            <>
                <h2>Game Over</h2>
                <button onClick={reset}>Reset</button>
            </>
        }
    </div>
  )
}

export default PlayerInfo