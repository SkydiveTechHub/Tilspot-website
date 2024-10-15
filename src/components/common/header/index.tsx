
import { Link } from 'react-router-dom'
import Container from '../../ui/Container'
import { Button } from '../../ui/Button'
import { headerData } from '../../../utils/data'
import { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [show, setShow] = useState(false)
  return (
    <div data-aos="flip-down">
      <Container>
        <div className='flex absolute z-[1000] top-0 left-0 w-full justify-between items-center py-4 px-[2rem] md:px-[4rem]'>
            
            {/* logo */}
          <div><img className='w-[100px] md:w-[150px]' src="/images/Logo.png" alt="Logo" /></div>

          {/* navlinks */}
          <div className='hidden lg:flex items-center gap-8'>
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

          <div className='lg:hidden  w-[80%] '>
            <div className='float-right'>
              <button onClick={()=>setShow(true)}><IoMenu color='white' size={25}/></button>
            </div>

            <div className={` flex-col items-center absolute top-0 right-0 gap-8 w-[80%] pt-[1rem] ${!show?'translate-x-[600px] hidden': 'translate-x-0 flex'} duration-500 transition-all  bg-primary h-screen`}>
            <div className='w-full flex justify-end pr-6'>
              <button onClick={()=>setShow(false)}><FaTimes color='white' size={25}/></button>
            </div>
              <ul className='flex flex-col items-center gap-8'>
                {
                  headerData.map((i, id)=>(
                    <li onClick={()=>setShow(false)} className='w-full' key={id}>
                      <Link className='text-[15px] text-white hover:font-bold ' to={i.url}>{i.name}</Link>
                    </li>
                  ))
                }
                  
              </ul>

              <Link to={'/'}><Button variant='white' text='Login'/></Link>
            </div>
            
          </div>
        </div>

      </Container>
    </div>
    


  )
}

export default NavBar


