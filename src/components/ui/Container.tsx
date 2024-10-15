import React from 'react'

interface ContainerProps{
    children:React.ReactNode
}

const Container = ({children}:ContainerProps) => {
  return (
    <div className='px-[2rem] md:px-[3rem] lg:px-[4rem] h-full'>
      {children}
    </div>
  )
}

export default Container
