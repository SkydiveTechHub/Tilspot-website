
import { Link } from 'react-router-dom'
import Container from '../../ui/Container'
import { Button } from '../../ui/Button'
import { headerData } from '../../../utils/data'

const NavBar = () => {
  return (
    <Container>
      <div className='flex absolute z-[1000] top-0 left-0 w-full justify-between items-center py-4 px-[2rem] md:px-[4rem]'>
          
          {/* logo */}
        <div><img className='w-[100px] md:w-[150px]' src="/images/Logo.png" alt="Logo" /></div>

        {/* navlinks */}
        <div className='flex items-center gap-8'>
          <ul className='flex items-center gap-8'>
            {
              headerData.map((i, id)=>(
                <li key={id}>
                  <Link className='text-[15px] text-white hover:font-bold ' to={i.url}>{i.name}</Link>
                </li>
              ))
            }
              
          </ul>

          <Link to={'/'}><Button variant='white' text='Login'/></Link>
        </div>
      </div>

    </Container>

  )
}

export default NavBar


