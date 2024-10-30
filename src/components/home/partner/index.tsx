import BannerSlide from '../../common/BannerSlide'
import { partnerData } from '../../../utils/data'

const Partners = () => {
  return (
    <div data-aos="swipe-up" className=' py-3'>
        <BannerSlide
            imgUrl={partnerData}
            direction="right"
            classname="object-contain !ml-2 lg:!ml-8 "
        />
        <BannerSlide
            imgUrl={partnerData}
            direction="left"
            classname="object-contain !ml-2 lg:!ml-8 "
        />
  </div>
  )
}

export default Partners
