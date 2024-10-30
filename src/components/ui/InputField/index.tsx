interface InputProps{
	text?:string
	type?:string
}

export const InputLayout = ({ type, text }:InputProps) => {
	return (
		<input
			type={type}
			placeholder={text}
			className="outline-none bg-white p-3 w-full text-[#333333] text-[16px] leading-[19.36px] font-[400]"
		/>
	);
};

export const TextArea = ({ text }:InputProps) => {
	return (
		<textarea
			rows={6}
			className=" outline-none bg-white p-3 w-full text-[#333333] text-[16px] leading-[19.36px] font-[400] "
		>
			{text}
		</textarea>
	);
};
