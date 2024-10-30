import MainLayout from '../../layout/MainLayout'
import About from '../../components/about/about'
import PageBanner from '../../components/common/PageBanner'
import Partners from '../../components/home/partner'
import Services from '../../components/home/services'
import {  TitleText } from '../../components/ui/Typograph'
import Why from '../../components/about/why'

const AboutPage = () => {
  return (
    <div>
      <MainLayout>
        <PageBanner
          imgUrl='/images/bill1.jpg'
          title='About Us'
          desc='Get to Know More About Who We Are'
        />
        <About/>
        <div className='bg-tertiary'>
          <Partners/>
        </div>

        <div className='mt-12 mb-20'>
          <TitleText style='text-primary text-center font-bold text-[28px]' text='What We Do'/>
          <Services show={true} count={4}/>
        </div>
        <div className='mt-[-10rem]' >
          <Why/>
        </div>  
      </MainLayout>
      
    </div>
  )
}

export default AboutPage
