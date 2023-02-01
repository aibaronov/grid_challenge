
import {useEffect, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import GridBoard from './components/GridBoard';
import NavPanel from './components/NavPanel';
import ArrowKeysReact from 'arrow-keys-react';
import PlayerInfo from './components/PlayerInfo';
import {playerActions} from './reducers/playerSlice'
function App() {
  const dispatch = useDispatch()
  const gridReference = useRef(null);
  const {playerSuccess} = useSelector(state => state.player)
  ArrowKeysReact.config({
    left: () => {
      dispatch(playerActions.move({"type": "left"}))
    },
    right: () => {
      dispatch(playerActions.move({"type": "right"}))
    },
    up: () => {
      dispatch(playerActions.move({"type": "up"}))
    },
    down: () => {
      dispatch(playerActions.move({"type": "down"}))
    }
  });

  function resetHandler(){
    gridReference.current.focus();
    dispatch(playerActions.reset())
  }

  useEffect(() => {
    gridReference.current.focus();
  }, [])
  return (
    <div className="App"{...ArrowKeysReact.events} tabIndex="1" ref={gridReference}>
      <header className="App-header">
        <h1 className="App-title">Obstacle Game</h1>
        <>{playerSuccess ? 
          <>
            <h2>You win!</h2>
            <button className="reset-button"onClick={resetHandler}>Reset</button>
          </> : null}</>
        <PlayerInfo reset={resetHandler}/>
        <h4>Use the keyboard arrow keys or buttons to navigate</h4>
        <NavPanel />
      </header>
      <GridBoard  />
    </div>
  );
}


export default App;
