
import Container, { FlexContainer } from "../ui/Container";
import { feature } from "../../utils/data";

const Features = () => {
	return (
		<div className="bg-primary py-[100px]">
			<Container>
				{/* <Heading text="Our features" style="text-white" /> */}
				<div className="mt-[5rem]">
					<FlexContainer
						contentLeft={
							<div>
								<div className="w-full lg:w-full mt-[4rem]">
									<img src="/images/Element.png" alt="Element" className="w-full" />
								</div>
							</div>
						}
						contentRight={
							<div className="w-full lg:w-[50%]">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem]  w-full md:w-[100%] mr-auto ml-auto mt-[5rem]">
									{feature.map((reason, i) => {
										return (
											<div className="flex gap-2 items-center" key={i}>
												<img src={reason.logo} alt={reason.text} className="w-[4rem]" />
												<p className="text-white font-[500] text-[14px] leading-[30px]">{reason.text}</p>
											</div>
										);
									})}
								</div>
							</div>
						}
						direction={"flex-col lg:flex-row"}
					/>
				</div>
			</Container>
		</div>
	);
};

export default Features;
