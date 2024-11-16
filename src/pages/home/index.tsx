import Hero from '../../components/home/hero'
import MainLayout from '../../layout/MainLayout'
import Services from '../../components/home/services'
import Connect from '../../components/home/connect'
import Testimonials from '../../components/home/testimonial'
import Partners from '../../components/home/partner'
import Why from '../../components/about/why'

const Home = () => {
  return (
    <div>
      <MainLayout>
        <Hero/>
        <Partners/>
        <Services count={8} show={true} headerShow/>
        <Connect/>
        {/* <Banner/> */}
        <Testimonials/>        
        <Why/>

        {/* <Blog/> */}
        {/* <EmailCard/> */}
      </MainLayout>
      
    </div>
  )
}

export default Home
