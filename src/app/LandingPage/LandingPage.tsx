import bg1 from "../../assets/images/beer.png";
import bg2 from "../../assets/images/cocktail.png";
import CardCTA from "./components/CardCTA";
import { motion } from "framer-motion";
import NewsCTA from "./components/NewsCTA";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

type News = {
	sys: {
		id: string;
	};
	fields: {
		title: string;
		image: {
			fields: {
				file: {
					url: string;
				};
			};
		};
		shortDescription: string;
	};
};

const LandingPage = () => {
	const [data, setData] = useState<News[]>([]);

	useEffect(() => {
		const SPACE_ID = "zta1yb3fhcv6";
		const ACCESS_TOKEN = "jcS33h45FWpVjncjeeWbWSnD1HwmOneptOlb5LYpSs8";

		// Contentful API endpoint
		const url = `https://cdn.contentful.com/spaces/${SPACE_ID}/entries?access_token=${ACCESS_TOKEN}&limit=3`;

		// Fetch data from Contentful
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setData(data.items);
				console.log(data);
			})
			.catch((error) => console.error("Error fetching data:", error));
	}, []);

	return (
		<>
			<motion.div
				className="grid grid-cols-1 sm:grid-cols-2 "
				initial={{ opacity: 0.5 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<CardCTA image={bg1} content="card1" />
				<CardCTA image={bg2} content="card2" />
			</motion.div>
			<div className="flex items-center my-20 justify-center py-12 flex-col gap-12 px-6">
				<h2 className="text-white text-4xl font-regular font-sans">
					Aktualności
				</h2>
				<ul className="grid grid-cols-3 gap-10 w-full h-72 ">
					{data.map((item) => (
						<NewsCTA key={item.sys.id} data={item.fields} />
					))}
				</ul>
			</div>
			<div className="h-80 w-full relative flex flex-col items-center justify-center gap-5">
				<img
					src="https://images.unsplash.com/photo-1613577813903-e9e9bc994cdb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="beer"
					className="h-full w-full absolute top-0 left-0 object-cover opacity-30"
				/>
				<h2 className="text-white text-4xl font-regular font-sans">Visit us</h2>
				<Button
					variant="outline"
					className="rounded-full font-text font-extralight text-sm italic hover:bg-black hover:text-white"
				>
					<span className="opacity-80">Book a visit</span>
				</Button>
			</div>
		</>
	);
};

export default LandingPage;
