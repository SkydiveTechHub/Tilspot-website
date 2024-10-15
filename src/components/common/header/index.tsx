import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../ui/Container'

const NavBar = () => {
  return (
    <Container>
      <div className='flex absolute z-[1000] top-0 left-0 w-full justify-between items-center py-4 px-[4rem]'>
          
          {/* logo */}
        <div><img src="/images/Logo.png" alt="Logo" /></div>

        {/* navlinks */}
        <div>
          <ul>
              <li></li>
          </ul>

          <Link to={'/'}>Login</Link>
        </div>
      </div>

    </Container>

  )
}

export default NavBar
