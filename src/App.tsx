import { useEffect } from 'react'
import './App.css'
import Home from './pages/home'
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      once: true, // Animation happens only once when scrolling down
    });
  }, []);

  return (
    <>
      <Home/>
    </>
  )
}

export default App
