import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import Container from '../../ui/Container';
import { TagText, TitleText } from '../../ui/Typograph';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";


const Testimonials: React.FC = () => {
  const slides = [
    {
      id: 1,
      content:
        '“Our automated bill payment system ensures quick transactions and hassle-free management, saving you time and effort.”',
      author: 'Jane Doe',
      authorImg:
        'https://media.istockphoto.com/id/1961063429/photo/testimonial-portrait-of-a-mature-asian-woman.jpg?s=612x612&w=0&k=20&c=lzlrfPXRH6rw-fFx6m14sgz9fI-p2D4JORGYdHzzKBc=',
      authorPost: 'Product Manager @ QuickPay',
    },
    {
      id: 2,
      content:
        '“Seamless integration of our platform with multiple payment gateways guarantees a smooth experience for all users.”',
      author: 'John Smith',
      authorImg:
        'https://media.istockphoto.com/id/1230749818/photo/portrait-of-smiling-male-owner-of-fashion-store-standing-in-front-of-clothing-display.jpg?s=612x612&w=0&k=20&c=xoWhF-hrQcbMEPDYncHiHF8HJX2YgmYt7T-KLCPZIpY=',
      authorPost: 'CTO @ PayPro Solutions',
    },
    {
      id: 3,
      content:
        '“Our customer-centric approach prioritizes security and transparency in every transaction, ensuring your bills are paid on time.”',
      author: 'Alice Johnson',
      authorImg:
        'https://media.istockphoto.com/id/1961063429/photo/testimonial-portrait-of-a-mature-asian-woman.jpg?s=612x612&w=0&k=20&c=lzlrfPXRH6rw-fFx6m14sgz9fI-p2D4JORGYdHzzKBc=',
      authorPost: 'Head of Operations @ BillEase',
    },
    {
      id: 4,
      content:
        '“Efficient bill payments have never been easier. Our system is designed to simplify your finances.”',
      author: 'David Brown',
      authorImg:
        'https://images.ctfassets.net/vztl6s0hp3ro/4nq58wgJiVZ46Q8aTKNwaD/b42784c0664f0322c08a108cd2a4ee69/7_types_of_employee_testimonials_to_attract_the_best_candidates.webp',
      authorPost: 'Financial Analyst @ FinPay',
    },
    {
      id: 5,
      content:
        '“Real-time updates and notifications keep our customers informed about their bill payments.”',
      author: 'Emily White',
      authorImg:
        'https://www.who.int/images/default-source/careers/testimonials/mina-brajovic-circle.png?Status=Master&sfvrsn=5b370ae5_7',
      authorPost: 'Customer Success Lead @ BillTrack',
    },
    {
      id: 6,
      content:
        '“We prioritize security, ensuring all your transactions are safe and encrypted.”',
      author: 'Michael Green',
      authorImg:
        'https://w7.pngwing.com/pngs/334/401/png-transparent-testimonial-avatar-business-plan-advertising-marketing-avatar-heroes-plan-business-thumbnail.png',
      authorPost: 'Security Specialist @ SecurePay',
    },
    {
      id: 7,
      content:
        '“Our platform provides detailed reports, giving you better control over your expenses.”',
      author: 'Sophia Turner',
      authorImg:
        'https://images.squarespace-cdn.com/content/v1/651998e05a97287d391f2a87/1697150358493-OF7F236OZXVWV7LWYN9H/CEO-Female_Modern_Professional_Headshots-karenVaisman-Photography-Calabasas-LosAngeles-Photographer-nearme-Simi-WestlakeVillage-LA-ty-4.jpg',
      authorPost: 'Finance Manager @ ExpenseFlow',
    },
    {
      id: 8,
      content:
        '“Our AI-powered reminders ensure that you never miss a payment deadline.”',
      author: 'Chris Wilson',
      authorImg:
        'https://media.istockphoto.com/id/1264565531/photo/portrait-of-male-entrepreneur-in-a-modern-shared-workplace.jpg?s=612x612&w=0&k=20&c=_6rc3OlDhH4Ic0r_DgBWFQucNPrwzlZ3BXszc5uuwH4=',
      authorPost: 'AI Specialist @ RemindMePay',
    },
    {
      id: 9,
      content:
        '“Automating bill payments has helped our clients save time and reduce late fees.”',
      author: 'Laura Martinez',
      authorImg:
        'https://www.who.int/images/default-source/careers/testimonials/maria-greenblat-circle.png?Status=Master&sfvrsn=f342c90b_7',
      authorPost: 'Customer Advocate @ AutoPayPlus',
    },
    {
      id: 10,
      content:
        '“Our system offers flexible payment options, making it easier for businesses and individuals to manage their finances.”',
      author: 'Daniel Lee',
      authorImg:
        'https://www.psacramento.com/content/images/2021/10/paulo-sacramento.1024x1024-1.jpg',
      authorPost: 'Business Development Manager @ FlexiPay',
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
    <div data-aos="fade-up" className='bg-primary py-12'>
      <Container>

        <div className='flex mb-10 flex-col md:flex-row'>
          <div className='flex flex-col items-center lg:items-start justify-center'>
            <TagText text='Our Testimonials'/>
            <TitleText style='text-white text-center md:text-left flex-1 text-[28px] md:text-[38px]' text='What Our Customers Say About Us'/>            
          </div>

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
                            <img  className='w-[60px] h-[60px] rounded-full' src={slide.authorImg} alt="img" />
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


