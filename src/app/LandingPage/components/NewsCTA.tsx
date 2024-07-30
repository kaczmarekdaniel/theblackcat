import { Link } from "react-router-dom";
import { News } from "@/app/LandingPage/LandingPage.tsx";


const NewsCTA = ({ data }: { data: News["fields"] }) => {

	console.log(data);
	return (
		<Link to="/news" className="col-span-1 relative py-20 md:py-0">
			<img
				src={`${data.image}`}
				alt="beer"
				className="h-full w-full absolute top-0 left-0 bg-cover col-span-1 aspect-w-1 aspect-h-1 object-cover opacity-30"
			/>
			<div className="w-full h-full flex items-center justify-end flex-col gap-3 py-4 md:py-0 md:pb-8">
				<h3
					className="text-white text-xl font-regular font-sans w-full text-center px-4 sm:px-8  h-auto flex items-center justify-center">
					{data.title}
				</h3>
				<div className="h-12 font-text text-xs px-10 sm:px-20 font-extralight tracking-widest opacity-70 line-clamp-3">
					{data.shortDescription}
				</div>
				<button className="h-6 font-text text-xs px-12 font-light opacity-70 italic hover:underline tracking-wide">
					zobacz więcej
				</button>
			</div>
		</Link>
	);
};

export default NewsCTA;
