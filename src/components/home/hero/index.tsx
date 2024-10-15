import { Button } from '../../ui/Button'
import Container from '../../ui/Container'
import { TitleText } from '../../ui/Typograph'
import BannerSlide from '../../common/BannerSlide'

const Hero = () => {

  const partners = [
    'images/Logo3.png',
    'images/Presto.png',
    'images/Logo3.png',
    'images/Presto.png',
    'images/Logo3.png',
    'images/Presto.png',
    'images/Logo3.png',
    'images/Presto.png',
    'images/Logo3.png',
    'images/Presto.png',
    'images/Logo3.png',
    'images/Presto.png',
  ]

  return (
    <div className='w-full min-h-screen lg:h-screen relative bg-primary z-[-1] pb-8 md:pb-0'>
      <img className='absolute right-0 top-0 z-[-1]' src="/images/hero-ellipse.png" alt="" />
      <Container>
        <div className='flex flex-col lg:flex-row items-center h-[80%] justify-between gap-8 pt-[6rem] lg:pt-0'>
          <div className='flex-1 space-y-8'>
            <TitleText style='text-white text-[28px] text-center lg:text-left md:text-[48px]' text='Save time by building  fast with Boldo Template'/>
            
            <p className='text-white text-center lg:text-left'>Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>
          
            <div className='flex flex-col md:flex-row md:justify-center items-center lg:justify-normal gap-6'>
              <Button variant='green' text='Buy Template'/>
              <Button variant='primary' text='Explore'/>
            </div>

          </div>
          <div className='flex-1'>
            <img src="/images/heroG.svg" alt="hero graphics" />
          </div>
        </div>

        <div>
        <BannerSlide
            imgUrl={partners}
            direction="right"
            classname="object-contain !ml-2 lg:!ml-8 "
          />
        </div>

      </Container>
      


    </div>
  )
}

export default Hero
