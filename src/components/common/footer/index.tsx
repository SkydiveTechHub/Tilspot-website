
import { footerData } from '../../../utils/data'
import { Link } from 'react-router-dom'
import Container from '../../ui/Container'

const Footer = () => {
  return (
    <div>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 py-8'>
            <div className='spacey-y-4'>
                <img src="/images/Logo-dark.png" alt="" />
                <p className='text-[#777777] text-[14px] mt-4'>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
            </div>
              {
                footerData.map((i, id)=>(
                  <div key={id} className='space-y-4'>
                    <h3 className='font-bold'>{i.title}</h3>
                    <ul className='space-y-6'>
                      {
                        i.children.map((item, ids)=>(
                          <li key={ids}>
                            <Link className='text-[#777777] text-[16px]' to={item.linkUrl}>
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
          <p className='text-[#777777] text-[14px] mt-4'>All rights reserved.</p>
        </div>
      </Container>



      
    </div>
  )
}

export default Footer

