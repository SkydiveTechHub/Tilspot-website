import { CntDrop } from '../../../utils/comps'
import Container from '../../ui/Container'
import { TitleText } from '../../ui/Typograph'

const Banner = () => {
  return (
    <div className='lg:mt-[10rem] py-[5rem] md:px-[4.3rem]'>
        <Container>
            <img data-aos="fade-up" src="/images/banner.png" alt="banner" />

            <div data-aos="swipe-up" className='flex flex-col lg:flex-row mt-8'>
              <div className='flex-1'>
                <TitleText style=' flex-1 text-center md:text-left md:text-[28px] text-left lg:w-[85%]' text='WHY OUR CUSTOMERS CHOOSE'/>
                <TitleText style=' flex-1 text-center md:text-left md:text-[28px] text-left lg:w-[85%]' text='TILSPOT'/>
              </div>
                

                <div className='flex-1 mt-8 lg:mt-0'>
                  <CntDrop text='We connect our customers with the best?'/>
                  <CntDrop text='Android research & development rockstar? '/>
                </div>
            </div>
        </Container>
      
    </div>
  )
}

export default Banner
