import footerContent from "@/data/footer";

const Footer = () => {
	return (
		<footer className="py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20  px-6">
			{footerContent.map((section, index) => (
				<div key={index} className="italic col-span-1">
					<h2 className="text-lg mb-4">{section.title}</h2>
					<ul className="flex flex-col gap-1 text-sm font-text font-light opacity-70">
						{section.data.map((item, index) => (
							<li className="font-extralight" key={index}>
								{item}
							</li>
						))}
					</ul>
				</div>
			))}
		</footer>
	);
};

export default Footer;
