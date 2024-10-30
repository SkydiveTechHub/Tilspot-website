import React from "react";
import { Heading } from "../../shared/Typography";
import { Testimony } from "utils/data";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Container } from "../../shared/container";

const Testimonial = () => {
	return (
		<div className="py-[100px]">
			<Container>
				<Heading text="What Our Customers Says" />
				<div className="w-[90%] ml-auto mr-auto px-4">
					<Swiper
						spaceBetween={20}
						slidesPerView={3}
						autoplay={{ delay: 3000 }}
						pagination={{ clickable: true }}
						breakpoints={{
							375: {
								slidesPerView: 1,
							},
							768: {
								slidesPerView: 2,
							},

							1024: {
								slidesPerView: 3,
							},

							1536: {
								slidesPerView: 3,
							},
						}}
					>
						{Testimony.map((word, index) => (
							<SwiperSlide key={index}>
								<TestimonyBox key={index} word={word.word} namme={word.name} owner={word.owner} image={word.image} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</Container>
		</div>
	);
};

function TestimonyBox({ word, name, owner, image }) {
	return (
		<div className="bg-white shadow-lg p-[2rem] rounded-[18px] mb-8 mt-8 w-[90%] ml-5 ">
			<img src="/images/Quote.png" alt="qoute" />
			<p className=" text-[14px] font-[400] leading-[30px] mt-4 border-b border-b-[#212529] pb-9">{word}</p>
			<div className="mt-6 flex gap-5 items-center">
				<img src={image} alt="happy-client" className="" />
				<div>
					<h4 className=" text-[24px] font-[600] leading-[36px]">{name}</h4>
					<p className=" font-[400] text-[16px] mt-2 leading-[20px]">{owner}</p>
				</div>
			</div>
		</div>
	);
}

export default Testimonial;
