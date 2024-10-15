import React from 'react'
import { Button } from '../../ui/Button'
import { CntBox, CntItem } from '../../../utils/comps'
import { TitleText } from '../../ui/Typograph'
import Container from '../../ui/Container'

const Connect = () => {


  return (
    <div className='md:px-[4.3rem] relative'>
        <Container>
            <div className='flex flex-col md:flex-row justify-between items-center space-y-6'>
                <div className='relative flex-1'>
                    <img className='' src="/images/c1.png" alt="connect image" />
                    <img className='hidden md:block absolute top-[170px] right-5' src="/images/c2.png" alt="connect image" />
                    <img className='md:hidden absolute h-[300px] top-5' src="/images/c2.png" alt="connect image" />
                </div>
                <div className='flex-1 md:px-8'>
                    <div className='md:px-[2.5rem] space-y-4'>
                        <TitleText style='text-center md:text-left md:text-[28px] text-left' text='We connect our customers with the best, and help them keep up-and stay open.'/>
                        
                            <ul className='space-y-2'>
                                <CntItem text='We connect our customers with the best.'/>
                                <CntItem text='Advisor success customer launch party.'/>
                                <CntItem text='Business-to-consumer long tail.'/>
                            </ul>
                            
                            
                            
                        <Button variant='primary' text='Start now'/>                        
                    </div>


                </div>

            </div>

            <div className='flex flex-col-reverse md:flex-row-reverse justify-between items-center mt-[4rem] md:mt-[7rem] gap-8'>
                <div className='relative flex-1'>
                    <img src="/images/c3.png" alt="connect image" />
                    <img className='hidden md:block absolute top-[250px] left-5' src="/images/c4.png" alt="connect image" />
                    <img className='md:hidden absolute h-[250px] right-0 top-[9rem]' src="/images/c4.png" alt="connect image" />
                </div>
                <div className='flex-1 '>
                    <TitleText style='text-center md:text-left md:text-[28px] text-left md:w-[80%]' text='We connect our customers with the best, and help them keep up-and stay open.'/>
                    
                        <ul className='md:w-[75%] space-y-3'>
                            <CntBox text='We connect our customers with the best.'/>
                            <CntBox text='Advisor success customer launch party.'/>
                            <CntBox text='Business-to-consumer long tail.'/>
                        </ul>
                        

                </div>

            </div>            
        </Container>



      
    </div>
  )
}

export default Connect


