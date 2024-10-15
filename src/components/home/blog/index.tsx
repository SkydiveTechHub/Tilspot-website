import Container from '../../ui/Container'
import { TagText, TitleText } from '../../ui/Typograph'
import { blogdata } from '../../../utils/data'
import { Button } from '../../ui/Button'

interface BlogCardProps{
  imgUrl:string 
  title:string 
  desc:string 
  author:string
  date:string
  authorImg:string

}


const Blog = () => {
  return (
    <div className='py-[5rem]'>
        <Container>
            <div className='flex flex-col justify-between items-center w-full'>
                <TagText text='Our Blogs'/>
                <TitleText style='text-[18px] md:text-[32px] lg:w-[60%] text-center' text='Value proposition accelerator product management venture'/>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-[4rem]'>
                {
                    blogdata.map((item, i)=>(
                        <BlogCard
                            key={i}
                            imgUrl={item.imgUrl}
                            title={item.title}
                            desc={item.desc}
                            date={item.date}
                            author={item.author}
                            authorImg={item.authorImg}
                        />
                    ))
                }

            </div>

            <div  className='flex items-center   justify-center'>
                <Button variant='tertiary' text='Load more'/>
            </div>
        
        </Container>        
    </div>

  )
}

export default Blog


const BlogCard=({imgUrl, title, desc, date, author, authorImg}:BlogCardProps)=>{
    return(
        <div>
            <img className='w-full h-[220px]' src={imgUrl} alt="Card image" />
            <div className='h-[210px] relative'>
                <div className='flex gap-3 items-center py-3'>
                    <h3 className='font-bold text-primary text-[16px]'>{title}</h3>
                    <span className='text-[#777777]'>{date}</span>
                </div>
                
                <p className='text-[20px]'>{desc}</p>

                <div className='flex items-center gap-3 absolute bottom-2'>
                    <img className='' src={authorImg} alt="" />
                    <span>{author}</span>
                </div>
            </div>
            
        </div>
    )
}
