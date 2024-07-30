import { News } from "../News";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import useHasOverflow from "@/hooks/useHasOverflow.tsx";
import { useRef } from "react";
import { Button } from "@/components/ui/button.tsx";

const NewsArticle = ({ data }: { data: News["fields"] }) => {
	// console.log(data);
	const ref = useRef<HTMLDivElement>(null);
	const { hasOverflow, setOverflowOpen, overflowOpen } = useHasOverflow(ref);

	console.log(data.title, hasOverflow);

	const handleOpenButton = () => {
		setOverflowOpen(!overflowOpen);
		if (ref.current) {
			ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<article
			ref={ref}
			className={` grid grid-cols-1 md:grid-cols-8 ${overflowOpen ? "" : "overflow-hidden lg:h-96"}`}
		>
			<img
				src={`${data.image}`}
				alt="beer"
				className="h-full lg:max-h-96 w-full top-0 left-0 object-cover object-center opacity-80 col-span-4"
			/>
			<div className="relative col-span-1 md:col-span-4 flex flex-col items-start justify-start gap-5 md:ml-20 pt-5 lg:pt-10">
				<div className={` ${overflowOpen ? "" : "max-h-52 md:max-h-40"}`}>
					<h3 className="text-white text-3xl font-regular font-sans">
						{data.title}
					</h3>
					<div className="font-text text-[13px] mt-4 pr-20 font-extralight tracking-widest opacity-80  flex flex-col gap-5 pb-10">
						{documentToReactComponents(data.textContent)}
					</div>
				</div>
				{hasOverflow && (
					<div
						className={`w-full h-32 absolute bottom-0 flex items-end justify-center ${overflowOpen ? "" : "bg-gradient-to-t from-background "}`}
					>
						<Button
							variant={"link"}
							className="h-6 text-white font-text text-sm fon px-12 font-light  italic underline tracking-wide"
							onClick={handleOpenButton}
						>
							{overflowOpen ? "ukryj" : "zobacz więcej"}
						</Button>
					</div>
				)}
			</div>
		</article>
	);
};

export default NewsArticle;
