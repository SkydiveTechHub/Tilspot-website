import React, { useState } from "react";
import Container, { FlexContainer } from "../ui/Container";
import { FaqItem } from "../../utils/data";
import { InputLayout, TextArea } from "../ui/InputField";

const Faq = () => {
	const [curOpen, setCurOpen] = useState<number | null>(null);
	return (
		<div className="py-[120px]">
			<Container>
				<FlexContainer
					contentLeft={
						<div className="w-full lg:w-[50%]">
							<h3 className="text-[#212529] font-[700] text-[36px] leading-[43.57px]">FAQs</h3>
							<p className="text-[#8F8F8F] text-[16px] font-[400] leading-[19.36px] mb-4">
								Have questions?, we’re here to help
							</p>
							<div className="flex flex-col gap-10 mb-16">
								{FaqItem.map((el, i) => (
									<AccordionItem
										title={el.title}
										key={el.title}
										numb={i}
										curOpen={curOpen}
										onOpen={setCurOpen}
										text={el.text}
									/>
								))}
							</div>
						</div>
					}
					contentRight={
						<div className="w-full lg:w-[40%]">
							<div className="w-full  bg-[#BADDFB] rounded-[8px] p-6">
								<h3 className="font-[600] text-primary text-[36px] leading-[43.57px]">Have any questions?</h3>
								<p className="text-[#8F8F8F] font-[400] text-[16px] leading-[19.36px] mt-3">
									Our support team is readily available to help out
								</p>
								<div className="flex flex-col gap-3 mt-8">
									<InputLayout type="text" text="Name" />
									<InputLayout type="tel" text="Phone Number" />
									<TextArea text="Message" />
									<button type="submit" className="bg-secondary rounded-[5px] py-3 mb-9 w-full mt-6 text-white">
										Send message
									</button>
								</div>
							</div>						
						</div>

					}
					direction={"flex-col lg:flex-row"}
				/>
			</Container>
		</div>
	);
};

interface AccordionItemProps {
	title: string;
	numb: number;
	curOpen: number | null;
	text: string;
	onOpen: React.Dispatch<React.SetStateAction<number | null>>;
}

function AccordionItem({ title, numb, curOpen, text, onOpen }: AccordionItemProps) {
	const isOpen = numb === curOpen;

	function handleClick() {
		onOpen(isOpen ? null : numb);
	}

	return (
		<div className="cursor-pointer pb-3 border-b-[3px]" onClick={handleClick}>
			<div className="flex gap-4 text-[#333333] font-[500] text-[20px]">
				<p className="flex-1 text-primary font-[600] text-[17px] leading-[20.57px]">{title}</p>
				<p className="text-[20px] h-[30px] w-[30px] rounded-[100%] flex justify-center items-center border border-[#000000]">
					{isOpen ? "-" : "+"}
				</p>
			</div>

			{isOpen && (
				<div className="pr-4 text-[#3A3A3A] font-[400] text-[13px] leading-[15.73px] w-[90%]">
					{text}
				</div>
			)}
		</div>
	);
}

export default Faq;
