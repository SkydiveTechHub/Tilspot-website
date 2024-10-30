interface TypoProps{
    text:string
    style?:string
}

export const TagText =({text}:TypoProps)=>{
    return(
        <p className="text-secondary text-[14px]">{text}</p>
    )
}

export const TitleText =({text,style}:TypoProps)=>{
    return(
        <p className={`text-[20px] ${style}`}>{text}</p>
    )
}