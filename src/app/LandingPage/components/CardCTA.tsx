import React from "react";

import arrow from "../../../assets/images/arrow.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type CardCTAProps = {
	image: string;
	content: string;
};

const CardCTA: React.FC<CardCTAProps> = ({ image, content }) => {
	const { t } = useTranslation();
	return (
		<Link to={"/about"} className="h-auto relative ">
			<div className="absolute top-0 left-0 h-full w-full flex items-center px-6 justify-center flex-col gap-[20px] z-10 grid-cols-1 ">
				<h2 className="text-white text-4xl font-regular font-sans">
					{t(`landing.${content}.heading`)}
				</h2>
				<p className="font-text font-extralight opacity-80">
					{t(`landing.${content}.paragraph`)}
				</p>
				<img src={arrow} alt="" />
			</div>
			<img
				src={image}
				className="w-full h-full object-cover block opacity-40 z-0"
				alt=""
			/>
		</Link>
	);
};

export default CardCTA;
