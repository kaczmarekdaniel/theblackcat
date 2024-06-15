import { News } from "../News";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const NewsArticle = ({ data }: { data: News["fields"] }) => {
	// console.log(data);
	return (
		<article className="w-full lg:h-96 grid grid-cols-1 md:grid-cols-5 ">
			<img
				src={`${data.image}`}
				alt="beer"
				className="h-full lg:max-h-96 w-full top-0 left-0 object-cover object-center opacity-80 col-span-2"
			/>
			<div className="col-span-1 md:col-span-3 flex flex-col items-start justify-start gap-5 md:ml-20 pt-5 lg:pt-10">
				<h3 className="text-white text-3xl font-regular font-sans">
					{data.title}
				</h3>
				<div className="font-text text-sm  pr-20 font-extralight tracking-widest opacity-70 flex flex-col gap-5">
					{documentToReactComponents(data.textContent)}
				</div>
			</div>
		</article>
	);
};

export default NewsArticle;
