import {useEffect } from 'react'
import './App.css'
// import Home from './pages/home'
import AOS from 'aos';
import { Route, Routes } from 'react-router-dom';
// import Loading from './components/common/Loading';
import PolicyPage from './pages/policy';
import TermsPage from './pages/t&c';
import Home from './pages/home';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import ServicePage from './pages/services';
// Lazy load the pages
// const Home = lazy(() => import('./pages/home'));
// const AboutPage = lazy(() => import('./pages/about'));
// const ContactPage = lazy(() => import('./pages/contact'));
// const ServicePage = lazy(() => import('./pages/services'));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      once: true, // Animation happens only once when scrolling down
    });
  }, []);

  return (
    <>
    {/* <Suspense fallback={<Loading />}> */}
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/services' element={<ServicePage/>}/>
            <Route path='/privacy-policy' element={<PolicyPage/>}/>
            <Route path='/t&c' element={<TermsPage/>}/>
          </Routes>
    {/* </Suspense> */}

    </>
  )
}
export default App
