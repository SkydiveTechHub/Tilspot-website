import { Link } from "react-router-dom";
import { reasonData } from "../../utils/data";
import Container from "../ui/Container";
import { TagText, TitleText } from "../ui/Typograph";

interface ServiceProps{
	logo:string
	header:string
	text:string
}

const Why = () => {
	return (
		<div className="py-[120px]">
			<Container>
			<div className='flex flex-col justify-between items-center w-full mb-[4rem]'>   
				<TagText text='Why Choose Us'/>
				<TitleText style='text-[18px] md:text-[32px] lg:w-[60%] text-center' text='We Give You the Best Payment Options with Ease'/>                    

				</div>
				{/* <Heading text="Why TILSPOT?" style="text-[#212529]" /> */}
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-[3rem]  w-full mr-auto ml-auto">
					{reasonData.map((box:any, index:any) => (
						<Service key={index} logo={box.logo} header={box.header} text={box.text} />
					))}
				</div>
			</Container>
		</div>
	);
};

function Service({ logo, header, text }:ServiceProps) {
	return (
		<div className="bg-[#F6F7FD] py-[40px] px-[16px] rounded-[20px] flex flex-col  items-center gap-5 text-center">
			<img src={logo} alt={header} className="w-[70px]" />
			<h3 className="text-center font-[600] text-[20px] leading-[30px] text-[#333333]">{header}</h3>
			<p className="text-[#333333] font-[400] leading-[24px] text-[14px] flex-grow">{text}</p>
			{/* <Link
				to={"/"}
				className="flex-none border border-primary hover:text-white hover:bg-primary duration-300 transition-all ease-in text-primary font-[400] text-[18px] leading-[23px] py-3 px-5 rounded-[6px]"
			>
				Get Started &rarr;
			</Link> */}
		</div>
	);
}

export default Why;
