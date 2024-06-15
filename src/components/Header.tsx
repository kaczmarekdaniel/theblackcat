import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import logo from "@/assets/images/logo.svg";

import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Nav = () => {
	const { i18n } = useTranslation();

	const toggleLanguage = () => {
		i18n.changeLanguage(i18n.language === "en" ? "pl" : "en");
	};

	return (
		<header className="grid grid-cols-9 w-full h-[100px] font-text font-extralight px-6">
			<nav className="flex items-center justify-between col-span-4 ">
				<MobileNav />
				<DesktopNav />
			</nav>
			<Link
				to={"/"}
				className="flex items-center justify-center col-span-1 col-start-5"
			>
				<img src={logo} alt="logo" className="h-[60px]" />
			</Link>
			<button
				onClick={toggleLanguage}
				className="col-span-1 col-start-9 flex justify-end items-center"
			>
				change
			</button>
		</header>
	);
};

export default Nav;
