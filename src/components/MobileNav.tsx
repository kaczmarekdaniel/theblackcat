import { useState } from "react";
import { Link } from "react-router-dom";

import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";

import accordionIcon from "@/assets/images/menu.svg";
const MobileNav = () => {
	const [isOpen, setIsOpen] = useState(false);

	const closeDrawer = () => {
		setIsOpen(false);
	};

	return (
		<Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
			<DrawerTrigger className="lg:hidden">
				<img src={accordionIcon} alt="menu" />
			</DrawerTrigger>

			<DrawerContent className="h-screen  rounded-none border-none ">
				<DrawerHeader>
					<DrawerTitle>Menu</DrawerTitle>
					<ul>
						<li>
							<Link to="/" onClick={closeDrawer}>
								Home
							</Link>
						</li>
						<li>
							<Link to="/about" onClick={closeDrawer}>
								About
							</Link>
						</li>
						<li>
							<Link to="/visit-us" onClick={closeDrawer}>
								Visit us
							</Link>
						</li>
					</ul>
				</DrawerHeader>
				<DrawerFooter>
					<DrawerClose onClick={() => setIsOpen(false)}>Close</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default MobileNav;
