import { Link } from "react-router-dom";


type NewsCTAProps = {
	data: {
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

const NewsCTA = (item: NewsCTAProps) => {
	console.log(item.data);
	return (
		<Link to="/about" className="col-span-1 relative">
			<img
				src={
					"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				}
				alt="beer"
				className="h-full w-full absolute top-0 left-0 bg-cover col-span-1 aspect-w-1 aspect-h-1 object-cover opacity-30"
			/>
			<div className="w-full  h-full  flex items-center justify-end flex-col gap-3 pb-4">
				<h3 className="text-white text-xl font-regular font-sans w-full text-center px-8">
					{item.data.title}
				</h3>
				<div className="h-12 font-text text-xs px-20 font-extralight tracking-widest opacity-70 line-clamp-3">
					{item.data.shortDescription}
				</div>
				<button className="h-6 font-text text-xs px-12 font-light opacity-70 italic underline tracking-wide">
					zobacz więcej
				</button>
			</div>
		</Link>
	);
};

export default NewsCTA;
