import React from 'react'
import Emoji from './Emoji'

function Nav() {
  return (
      <nav className='nav-wrapper bg-white'>
        <ul className='nav-container'>
          <li><Emoji symbol="🖐️" label="woman-technologist"/></li>
            <li>Hello<br />world!</li>  
        </ul>
      </nav>
  )
}

export default Nav;
