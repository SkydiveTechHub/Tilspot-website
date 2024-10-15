import React, {ReactNode} from 'react'
import Marquee from 'react-fast-marquee';
interface BannerProps{
    classname: string;
    imgUrl: Array<string>;
    direction?: undefined | "left" | "right" | "up" | "down" ;
}
const BannerSlide : React.FC<BannerProps> = ({imgUrl, classname, direction}) => {
  return (
    <div className=' w-full'>

        <div className="mt-8">
        <Marquee
          gradient={true}
          gradientColor={'#0A2640'}
          direction= {direction}
          // speed={speed}
        >
          <div
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-8"
            className='flex justify-center items-center'
          >
            {imgUrl.map((el, i) => (
              <img
                key={i}
                src={el}
                className={`w-[150px] h-[64px] ${classname}`}
              />
            ))}
          </div>
        </Marquee>
      </div>
      
    </div>
  )
}

export default BannerSlide
