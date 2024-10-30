
import Container from '../../ui/Container'
import { Button } from '../../ui/Button'
import { TitleText } from '../../ui/Typograph'

const EmailCard = () => {
  return (
    <div data-aos="zoom-in" className='lg:pt-[5rem] pb-[5rem]'>
      <Container>
        <div className='w-full rounded-lg  bg-tertiary flex flex-col justify-between items-center py-12 space-y-8 relative z-[-1]'>
          <img src="/images/Ellipse.png" className='top-0 right-0 absolute z-[-1]' alt="" />
          <TitleText style='text-white text-[20px] md:text-[32px] w-[70%] text-center lg:text-[48px]' text='Get Newsletter sit amet, consectetur.'/>
          
          <div className='flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 gap-6'>
              <input type="text" placeholder='Your email address' className='rounded-[46px] px-6 py-3 md:w-[400px]'/>
              <Button variant='primary' text='Send'/>
          </div>
        </div>
      </Container>
    </div>

  )
}

export default EmailCard
