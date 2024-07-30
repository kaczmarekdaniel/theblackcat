import { Link } from "react-router-dom";

const DesktopNav = () => {
	return (
		<nav className="hidden lg:flex ">
			<ul className="flex flex-row gap-6 text-sm ">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About us</Link>
				</li>
				<li>
					<Link to="/news">News</Link>
				</li>
				<li>
					<Link to="/visit-us">Visit us</Link>
				</li>
			</ul>
		</nav>
	);
};

export default DesktopNav;
