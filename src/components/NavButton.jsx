import {useDispatch } from 'react-redux'
import {playerActions} from '../reducers/playerSlice'
const NavButton = (props) => {
  const dispatch = useDispatch()  
  function handleMovement(){

    dispatch(playerActions.move({"type": props.direction}))
  }
  return (
    <div>
        <button onClick={handleMovement}>{props.direction}</button>
    </div>
  )
}

export default NavButton