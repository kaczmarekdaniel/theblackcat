import React from "react";

import arrow from "../../../assets/images/arrow.svg";

type CardCTAProps = {
	image: string;
};

const CardCTA: React.FC<CardCTAProps> = ({ image }) => {
	return (
		<button className="h-auto relative ">
			<div className="absolute top-0 left-0 h-full w-full flex items-center justify-center flex-col gap-[20px] z-10 ">
				<h2 className="text-white text-4xl font-regular font-sans">Menu</h2>
				<p className="font-text font-extralight">
					A casual industrial space serving cocktails on tap with seasonal
					twists.
				</p>
				<img src={arrow} alt="" />
			</div>
			<img
				src={image}
				className="w-full h-full object-cover block  z-0"
				alt=""
			/>
		</button>
	);
};

export default CardCTA;
