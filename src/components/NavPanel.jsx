import React from 'react'
import NavButton from './NavButton'
import './NavPanel.css'

const NavPanel = () => {
  return (
    <div className='panel'>
        <NavButton key="left" direction={"left"}/>
        <NavButton key="right" direction={"right"}/>
        <NavButton key="up" direction={"up"} />
        <NavButton key="down"direction={"down"} />
    </div>
  )
}

export default NavPanel