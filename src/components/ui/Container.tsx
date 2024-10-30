import React from 'react'

interface ContainerProps{
    children?:React.ReactNode
    contentLeft?:React.ReactNode
    contentRight?:React.ReactNode
    flexDirection?:string
    direction?:string
}

const Container = ({children}:ContainerProps) => {
  return (
    <div className='px-[2rem] md:px-[3rem] lg:px-[4rem] h-full'>
      {children}
    </div>
  )
}

export default Container


export const FlexContainer = ({ contentLeft, contentRight, direction }:ContainerProps) => {
	return (
		<div className={`flex ${direction} gap-2  justify-between `}>
			<>{contentLeft}</>
			<>{contentRight}</>
		</div>
	);
};
