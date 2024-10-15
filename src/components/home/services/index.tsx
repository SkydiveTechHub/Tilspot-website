import React from 'react'
import { Link } from 'react-router-dom'
import { servicedata } from '../../../utils/data'
import Container from '../../ui/Container'
import { TagText, TitleText } from '../../ui/Typograph'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'; 
import { FaArrowRight } from 'react-icons/fa'

interface ServiceCardProps{
    imgUrl:string 
    title:string 
    desc:string 
    linkUrl:string
}

const Services: React.FC = () => {
  return (
    <div className='md:px-[4.3rem] py-[5rem]'>
        <Container>
            <div className='flex flex-col justify-between items-center w-full mb-[4rem]'>
                <TagText text='Our Services'/>
                <TitleText style='text-[18px] md:text-[32px] md:w-[60%] text-center' text='Handshake infographic mass market crowdfunding iteration.'/>
            </div>

                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 2500, 
                        disableOnInteraction: false, 
                      }}
                    // navigation
                    // pagination={{ clickable: true }}
                    breakpoints={{
            
                        320: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 30,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 40,
                        },
                      }}
                    >
                    
                {
                        servicedata.map((item, i)=>(
                            <SwiperSlide>
                                <ServiceCard
                                    key={i}
                                    imgUrl={item.imgUrl}
                                    title={item.title}
                                    desc={item.desc}
                                    linkUrl={item.linkUrl}
                                />                            
                            </SwiperSlide>

                        ))
                    }
                </Swiper>

  
        
        </Container>        
    </div>

  )
}

export default Services


const ServiceCard=({imgUrl, title, desc, linkUrl}:ServiceCardProps)=>{
    return(
        <div className='space-y-2'>
            <img src={imgUrl} alt="Card image" />
            <div className='  pt-3'>
                <TitleText style='text-[18px]' text={title}/>
                <p className='text-[14px] w-[70%] text-[#777777] py-2'>{desc}</p>
                <Link to={linkUrl}><button className='border-b-2 border-primary text-primary text-[14px] font-semibold'>Explore <span className='inline-flex pl-2'><FaArrowRight/></span> </button></Link>
            </div>

            
            
        </div>
    )
}
