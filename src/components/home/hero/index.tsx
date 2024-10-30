import Container from '../../ui/Container'
import { TitleText } from '../../ui/Typograph'
import { Link } from 'react-router-dom'

const Hero = () => {

  return (
    <div className='w-full relative bg-white z-[-1] pb-8 md:pb-0 mt-[-2rem]'>
      <img className='hidden lg:block absolute right-0 top-0 z-[-1]' src="/images/hero-ellipse.png" alt="" />
      <Container>
        <div  className='flex flex-col lg:flex-row items-center justify-between gap-8 pt-[6rem] lg:pt-0'>
          <div data-aos="fade-right" className='flex-1 space-y-8'>
            <TitleText style='text-primary font-[700] text-[32px] text-center lg:text-left md:text-[52px]' text='Pay Smart, Live Easy'/>
            
            <p className=' text-center lg:text-left w-full lg:w-[80%]'>Effortlessly manage all your bills in one place. 
              Tilspot lets you pay, track, and manage 
              your bills with just a few taps. Say goodbye 
              to late fees and paper bills!</p>
          
            <div className='flex justify-center items-center lg:justify-normal gap-6'>
              {/* <Button variant='outline' text='Buy Template'/> */}
              <Link to={''}>
                  <img className='h-[50px]' src="/images/play.png" alt="download" />              
                </Link>
              <Link to={''}>
                  <img className='h-[50px]' src="/images/app.png" alt="download" />              
                </Link>
            </div>

          </div>
          <div data-aos="fade-left" className='flex-1'>
            <img src="/images/hero-img.png" alt="hero graphics" />
          </div>
        </div>



      </Container>
      


    </div>
  )
}

export default Hero
