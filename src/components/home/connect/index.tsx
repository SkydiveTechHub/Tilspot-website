
import { Button } from '../../ui/Button'
import { CntBox, CntItem } from '../../../utils/comps'
import { TitleText } from '../../ui/Typograph'
import Container from '../../ui/Container'
import { PiLeafLight } from "react-icons/pi";
import { TfiShine } from "react-icons/tfi";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Connect = () => {


  return (
    <div className='md:px-[4.3rem] relative'>
        <Container>
            <div className='flex flex-col lg:flex-row justify-between items-center space-y-6'>
                <div className='relative flex-1'>
                    <img data-aos="fade-right" className='' src="/images/c1.png" alt="connect image" />
                    <img data-aos="fade-up" className='hidden lg:block absolute top-[170px] right-5' src="/images/c2.png" alt="connect image" />
                    <img data-aos="fade-left" className='lg:hidden absolute h-[300px] top-5' src="/images/c2.png" alt="connect image" />
                </div>
                <div data-aos="fade-left" className='flex-1 md:px-8'>
                    <div className='lg:px-[2.5rem] space-y-4'>
                        <TitleText style='text-center lg:text-left md:text-[28px] text-left' text='We connect our customers with the best, and help them keep up-and stay open.'/>
                        
                            <ul className='space-y-2'>
                                <CntItem text='We connect our customers with the best.'/>
                                <CntItem text='Advisor success customer launch party.'/>
                                <CntItem text='Business-to-consumer long tail.'/>
                            </ul>
                            
                            
                            
                        <Button variant='primary' text='Start now'/>                        
                    </div>


                </div>

            </div>

            <div className='flex flex-col lg:flex-row-reverse justify-between items-center mt-[4rem] md:mt-[7rem] gap-8'>
                <div className='relative flex-1'>
                    <img data-aos="fade-left" src="/images/c3.png" alt="connect image" />
                    <img data-aos="fade-up" className='hidden lg:block absolute top-[250px] left-5' src="/images/c4.png" alt="connect image" />
                    <img data-aos="fade-right" className='lg:hidden absolute h-[250px] right-0 top-[9rem]' src="/images/c4.png" alt="connect image" />
                </div>
                <div data-aos="fade-right" className='flex-1 '>
                    <TitleText style='text-center md:text-left md:text-[28px] text-left lg:w-[80%]' text='We connect our customers with the best, and help them keep up-and stay open.'/>
                    
                        <ul className='lg:w-[75%] space-y-3 mt-6'>
                            <CntBox>
                                <PiLeafLight/>
                                 <span>We connect our customers with the best.</span>
                            </CntBox> 
                            <CntBox>
                                <TfiShine/>
                                 <span>Advisor success customer launch party.</span>
                            </CntBox> 
                            <CntBox>
                                <MdOutlineRemoveRedEye/>
                                 <span>Business-to-consumer long tail.</span>
                            </CntBox> 
                        </ul>

                </div>

            </div>            
        </Container>



      
    </div>
  )
}

export default Connect


