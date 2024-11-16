import MainLayout from '../../layout/MainLayout'
import Faq from '../../components/contact/faq'
import PageBanner from '../../components/common/PageBanner'

const ContactPage = () => {
  return (
    <div>
      <MainLayout>
        <PageBanner
            imgUrl='/images/bill1.jpg'
            title='FAQs'
            desc='Reach Our To Us, We are Here !'
          />
        <Faq/>
      </MainLayout>
      
    </div>
  )
}

export default ContactPage
