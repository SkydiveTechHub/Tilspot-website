import { CntDrop } from '../../../utils/comps'
import Container from '../../ui/Container'
import { TitleText } from '../../ui/Typograph'

const Banner = () => {
  return (
    <div className='lg:mt-[10rem] py-[5rem] md:px-[4.3rem]'>
        <Container>
            <img src="/images/banner.png" alt="banner" />

            <div className='flex flex-col lg:flex-row mt-8'>
              <div className='flex-1'>
                <TitleText style=' flex-1 text-center md:text-left md:text-[28px] text-left lg:w-[85%]' text='We connect our customers with the best, and help them keep up-and stay open.'/>
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
