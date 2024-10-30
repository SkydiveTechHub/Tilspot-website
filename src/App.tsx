import { useEffect } from 'react'
import './App.css'
import Home from './pages/home'
import AOS from 'aos';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import ServicePage from './pages/services';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      once: true, // Animation happens only once when scrolling down
    });
  }, []);

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/services' element={<ServicePage/>}/>
    </Routes>
    </>
  )
}

export default App
