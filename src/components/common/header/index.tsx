
import { Link, useLocation, } from 'react-router-dom'
import Container from '../../ui/Container'
import { Button } from '../../ui/Button'
import { headerData } from '../../../utils/data'
import { useEffect, useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";


const NavBar = () => {
  const [show, setShow] = useState(false)
  const [isHome, setIsHome] = useState(false)
  const navigator = useLocation()

  useEffect(()=>{
    if((navigator.pathname) === '/' ){
      console.log(navigator.pathname)
      setIsHome(true)
    }else{
      setIsHome(false)
    }
  },[])
  return (
    <div style={{backgroundColor: isHome?'white':'#002B6F'}} data-aos="flip-down" className='rounded-b-[40px] shadow-lg sticky z-[1000] top-0 left-0 w-full'>
      <Container>
        <div className='flex  w-full justify-between items-center py-4 '>            
            {/* logo */}
            <Link to={'/'}><img className='bg-white rounded-lg p-2 w-[100px] md:w-[150px]' src="/images/Logo.png" alt="Logo" /></Link>

          {/* navlinks */}
          <div className='hidden lg:flex items-center gap-8'>
            <ul className='flex items-center gap-8'>
              {
                headerData.map((i, id)=>(
                  <li key={id}>
                    <Link style={{color: isHome?'#002B6F':'white', transition: 'all ease-in .3s'}} className={`text-[15px] text-[white]  hover:border-b-2 rounded-md px-2  border-secondary hover:font-bold ${navigator.pathname === `${i.url}` ? 'border-b-2':null}`}  to={i.url}>{i.name}</Link>
                  </li>
                ))
              }
                
            </ul>
          </div>

          <div className='lg:hidden  w-[80%] '>
            <div className='float-right'>
              <button onClick={()=>setShow(true)}><IoMenu color={isHome?'#002b6f':'white'} size={25}/></button>
            </div>

            <div style={{transition:'all .5s ease-in-out'}} className={` flex-col items-center absolute top-0 right-0 gap-8 w-[80%] pt-[1rem] ${!show?'translate-x-[600px] hidden': 'translate-x-0 flex'} duration-500 transition-all  bg-primary rounded-bl-[5rem] h-screen`}>
            <div className='w-full flex justify-end pr-6'>
              <button onClick={()=>setShow(false)}><FaTimes color='white' size={25}/></button>
            </div>
              <ul className='flex flex-col items-center gap-8 w-full px-8'>
                {
                  headerData.map((i, id)=>(
                    <li onClick={()=>setShow(false)} className={`w-full text-center text-[16px] py-1 ${navigator.pathname === `${i.url}` ? 'bg-white w-full rounded-md text-primary':'text-white'}`} key={id}>
                      <Link className={` text-[15px] hover:font-bold `} to={i.url}>{i.name}</Link>
                    </li>
                  ))
                }
                  
              </ul>
              <Link className='lg:hidden' to={'/'}>
                <Button variant={'outline'} text={'Download App'}/>                
              </Link>
            </div>
            
          </div>

          <Link className='hidden lg:block' to={'/'}>
            <Button variant={'outline'} text={'Download App'}/>                
          </Link>
        </div>

      </Container>
    </div>
    


  )
}

export default NavBar


