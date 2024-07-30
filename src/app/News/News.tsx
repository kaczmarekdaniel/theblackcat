import { useEffect, useState } from "react";
import {motion} from "framer-motion";
import NewsArticle from "./components/NewsArticle";
import { Document } from "@contentful/rich-text-types";

export type News = {
	sys: {
		id: string;
	};
	fields: {
		title: string;
		image: {
			sys: {
				id: string;
			};
		};
		textContent: Document;
	};
};

const News = () => {
	const [data, setData] = useState<News[]>([]);

	useEffect(() => {
		const SPACE_ID = "zta1yb3fhcv6";
		const ACCESS_TOKEN = "jcS33h45FWpVjncjeeWbWSnD1HwmOneptOlb5LYpSs8";

		// Contentful API endpoint
		const url = `https://cdn.contentful.com/spaces/${SPACE_ID}/entries?access_token=${ACCESS_TOKEN}`;

		// Fetch data from Contentful
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);

				data.items.forEach((entry: News) => {
					const item = data.includes.Asset.find(
						(item: News) => item.sys.id === entry.fields.image.sys.id
					);
					entry.fields.image = item.fields.file.url;
				});
				setData(data.items);
				// console.log(data);
			})
			.catch((error) => console.error("Error fetching data:", error));
	}, []);

	return (
		<motion.div
			className="pt-10 px-6 flex flex-col items-center gap-16 h-auto"
			initial={{ opacity: 0.5 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<h1 className="text-white text-4xl font-regular font-sans">News</h1>
			{data.map((item) => (
				<NewsArticle key={item.sys.id} data={item.fields} />
			))}
		</motion.div>
	);
};

export default News;
