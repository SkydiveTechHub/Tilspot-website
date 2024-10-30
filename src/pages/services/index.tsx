import MainLayout from '../../layout/MainLayout'
import Services from '../../components/home/services'
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
