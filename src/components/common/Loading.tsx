
const Loading = () => {
  return (
    <div className='w-full h-screen relative bg-tertiary flex justify-center items-center z-[-1]'>
        <div className='absolute w-full h-full bg-cover bg-center bg-no-repeat inset-0 z-[-1]' style={{backgroundImage:'url(/images/pattern.png)'}}></div>
        <img data-aos="zoom-in" src="/images/Logo.png" alt="" />
    </div>
  )
}

export default Loading
