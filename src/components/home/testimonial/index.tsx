import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import Container from '../../ui/Container';
import { TitleText } from '../../ui/Typograph';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";


const Testimonials: React.FC = () => {
  const slides = [
    { 
      id: 1, 
      content: '“Buyer buzz partner network disruptive non-disclosure agreement business”' ,
      author:'Albus Dumbledore',
      authorImg:'/images/t1.png',
      authorPost:'Manager @ Howarts',
    },
    { 
      id: 2, 
      content: '“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”' ,
      author:'Severus Snape',
      authorImg:'/images/t2.png',
      authorPost:'Manager @ Slytherin',
    },
    { 
      id: 3, 
      content: '“Release facebook responsive web design business model canvas seed money monetization.”' ,
      author:'Harry Potter',
      authorImg:'/images/t3.png',
      authorPost:'Team Leader @ Gryffindor',
    },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval); 
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // Adjust index to loop slides
  const getSlideClass = (index: number) => {
    const slideCount = slides.length;

    if (index === currentIndex) return 'card active'; 
    if ((index === (currentIndex + 1) % slideCount) || (index === (currentIndex - 1 + slideCount) % slideCount)) {
      return 'card'; 
    }
    return 'card hidden'; 
  };

  return (
    <div className='bg-primary py-12'>
      <Container>

        <div className='flex mb-10 flex-col md:flex-row'>
          <TitleText style='text-white text-center md:text-left flex-1 text-[38px]' text='An enterprise template to ramp up your company website'/>
          <div className='flex-1 flex justify-center md:justify-between items-end py-8'>
            <div className='hidden md:block'>

            </div>
            <div className='flex gap-2'>
              <button className="flex justify-center items-center prev-btn bg-white text-primary rounded-full w-[50px] h-[50px] cursor-pointer border-none " onClick={prevSlide}><FaArrowLeft/></button>
              <button className="flex justify-center items-center next-btn bg-white text-primary rounded-full w-[50px] h-[50px] cursor-pointer border-none" onClick={nextSlide}><FaArrowRight/></button>              
            </div>

          </div>
        </div>

        <div className="carousel-container">
          <div className="carousel">
            {slides.map((slide, index) => (
              <div key={slide.id} className={getSlideClass(index)}>
                    <div className='space-y-2'>
                          <TitleText style='text-[18px]' text={slide.content}/>

                          <div className='flex items-center gap-3 pt-6'>
                            <img src={slide.authorImg} alt="img" />
                            <div  className='w-full'>
                              <p className='text-[16px] w-[70%]'>{slide.author}</p>
                              <p className='text-[13px] w-[70%] text-[#777777]'>{slide.authorPost}</p>
                            </div>
                          </div>
                      </div>
              </div>
            ))}
          </div>
          
        </div>        
      </Container>

    </div>

  );
};

export default Testimonials;


