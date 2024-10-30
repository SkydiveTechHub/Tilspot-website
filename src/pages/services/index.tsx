import Hero from '../../components/home/hero'
import MainLayout from '../../layout/MainLayout'
import Services from '../../components/home/services'
import EmailCard from '../../components/home/emailCard'
import Connect from '../../components/home/connect'
import Blog from '../../components/home/blog'
import Banner from '../../components/home/banner'
import Testimonials from '../../components/home/testimonial'
import { TitleText } from '../../components/ui/Typograph'
import PageBanner from '../../components/common/PageBanner'

const ServicePage = () => {
  return (
    <div>
      <MainLayout>
      <PageBanner
          imgUrl='/images/bill2.jpg'
          title='Our Services'
          desc='Get to Know More About Who We Are'
        />
        <div className='mt-12'>
          <TitleText style='text-primary text-center font-bold text-[40px]' text='What We offer !'/>
          <Services count={12} show={false}/>
        </div>
        
      </MainLayout>
      
    </div>
  )
}

export default ServicePage
