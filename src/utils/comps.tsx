interface  CntItemProps{
    text:string;
    imgUrl?:string
}

export const CntItem = ({text}:CntItemProps) =>{
    return(
        <li><img src="/images/tick.svg" alt="tick mark" className="inline pr-3 h-[40px] w-[40px]" /> <span>{text}</span></li>
    )
}
export const CntBox = ({text, imgUrl}:CntItemProps) =>{
    return(
        <li className="shadow-md p-2 bg-white font-semibold text-[14px] rounded-sm duration-500 transition-all text-primary hover:bg-primary hover:text-white"><img src={imgUrl} alt="cnt image" className="inline pr-3" /> <span>{text}</span></li>
    )
}
export const CntDrop = ({text}:CntItemProps) =>{
    return(
        <div className="flex justify-between items-center p-2 border-b border-primary bg-white font-semibold text-[14px] rounded-sm duration-500 transition-all  "><span className="text-primary">{text}</span> <img src={'/images/chev-down.png'} alt="cnt image" className="w-6 h-6" /> </div>
    )
}