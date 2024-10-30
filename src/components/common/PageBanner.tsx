

interface PageBannerProps{
    title:string
    desc:string
    imgUrl:string
}

const PageBanner = ({title, desc, imgUrl}:PageBannerProps) => {
  return (
    <div style={{backgroundImage:`url(${imgUrl})`}} className='bg-cover bg-no-repeat w-full h-[50vh] mt-[-2rem] z-[-1] relative flex justify-center items-center flex-col'>
      <div style={{backgroundColor:'rgba(0,0,0,0.7)'}} className='absolute w-full h-full inset-0 z-[-1]'></div>
      <h1 className='text-white font-[900] text-[48px]'>{title}</h1>
      <p className='text-white font-[300] text-[16px]'>{desc}</p>
    </div>
  )
}

export default PageBanner
