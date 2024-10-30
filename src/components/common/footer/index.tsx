
import { footerData } from '../../../utils/data'
import { Link } from 'react-router-dom'
import Container from '../../ui/Container'

const Footer = () => {
  return (
    <div data-aos="fade-up" className='bg-primary py-12'>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 py-8'>
            <div className='spacey-y-4 col-span-2'>

                <img className='bg-white rounded-lg p-2 w-[150px]' src="/images/Logo.png" alt="" />
                <p className='text-[#f4f4f4] text-[14px] mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus at hic excepturi suscipit omnis magnam quaerat amet dolores neque nam!</p>
            
                <div className='flex justify-center items-center lg:justify-normal gap-6 mt-4'>
                  {/* <Button variant='outline' text='Buy Template'/> */}
                  <Link to={''}>
                      <img className='h-[50px]' src="/images/play.png" alt="download" />              
                    </Link>
                  <Link to={''}>
                      <img className='h-[50px]' src="/images/app.png" alt="download" />              
                    </Link>
                </div>
            </div>
              {
                footerData.map((i, id)=>(
                  <div key={id} className='space-y-4'>
                    <h3 className='font-bold text-white'>{i.title}</h3>
                    <ul className='space-y-6'>
                      {
                        i.children.map((item, ids)=>(
                          <li key={ids}>
                            <Link className='text-[#f4f4f4] text-[16px]' to={item.linkUrl}>
                              {item.name}
                            </Link>
                          </li>
                        ))
                      }
                    </ul>                  
                  </div>

                ))
              }
                
        </div>
        <div>
          <p className='text-[#f4f4f4] text-[14px] mt-4'>All rights reserved.</p>
        </div>
      </Container>



      
    </div>
  )
}

export default Footer

