import React from 'react'
import { Link } from 'react-router-dom'
import { servicedata } from '../../../utils/data'
import Container from '../../ui/Container'
import { TagText, TitleText } from '../../ui/Typograph'
import 'swiper/css';
import 'swiper/css/autoplay'; 
import { Button } from '../../ui/Button'

interface ServiceCardProps{
    imgUrl:string 
    title:string 
    desc:string 
    linkUrl:string
}
interface ServiceProps{
    count:number
    show:boolean
    headerShow?:boolean
}

const Services: React.FC<ServiceProps> = ({count, show, headerShow}) => {
  return (
    <div className='md:px-[4.3rem] pb-[5rem] pt-[2rem]'>
        <Container>
            { headerShow && (
                    
            <div className='flex flex-col justify-between items-center w-full mb-[4rem]'>
                
                
                        <TagText text='Our Services'/>
                        <TitleText style='text-[18px] md:text-[32px] lg:w-[60%] text-center' text='What We Offer You'/>                    
                

               
                
            </div>
             )
                }
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

                    
                {
                        servicedata.slice(0, count).map((item, i)=>(
                                <ServiceCard
                                    key={i}
                                    imgUrl={item.imgUrl}
                                    title={item.title}
                                    desc={item.desc}
                                    linkUrl={item.linkUrl}
                                />          
                        ))
                    }               
            </div>

            <div style={{display: show?'flex':'none'}} className='justify-center items-center w-full mt-12'>
                <Link to={'/services'}>
                    <Button variant={'outline'} text={'See More'}/>                
                </Link>

            </div>
            {/* <div>
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
            </div> */}



  
        
        </Container>        
    </div>

  )
}

export default Services


const ServiceCard=({imgUrl, desc}:ServiceCardProps)=>{
    return(
        <div data-aos="fade-up" className='space-y-2 flex flex-col justify-center text-[#777777] items-center shadow-md rounded-lg p-3 transition-all duration-500 hover:bg-secondary hover:text-white'>
            <img src={imgUrl} alt="Card image" />
            <div className='  pt-3'>
                {/* <TitleText style='text-[18px] text-center' text={title}/> */}
                <p className='text-[14px] text-center py-2'>{desc}</p>
            </div>
        </div>
    )
}
